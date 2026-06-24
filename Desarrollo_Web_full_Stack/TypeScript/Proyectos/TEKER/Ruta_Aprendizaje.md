# Ruta de Aprendizaje — TeKer (Plataforma de Salud)
> Stack: JavaScript · Next.js 14 App Router · React 18 · Redux Toolkit · Oracle DB · JWT

---

## Nivel de JavaScript requerido

Para este proyecto necesitas dominar **JavaScript intermedio-avanzado**. No se requiere TypeScript, pero sí un JS sólido. La razón es que Next.js 14 con App Router, Server Actions y el manejo de Oracle desde el servidor exigen entender el lenguaje a fondo: asincronía real, closures, módulos, y manejo de errores robusto.

---

## Fase 1 — JavaScript (base obligatoria)

### 1.1 Fundamentos sólidos

Estos temas deben estar claros antes de tocar React o Next.js.

- **Variables y scope**: diferencia entre `var`, `let`, `const` · scope de bloque vs función · hoisting
- **Funciones**: declaradas vs expresiones · arrow functions · parámetros por defecto · rest/spread `...args`
- **Arrays y objetos**: `.map()`, `.filter()`, `.reduce()`, `.find()`, `.some()` · destructuring · spread operator
- **Template literals**: strings con `${}` · multilínea
- **Módulos ES6**: `import` / `export` · `export default` vs named exports
- **Clases**: `class`, `constructor`, herencia básica con `extends`

### 1.2 Asincronía — crítico para Server Actions y Oracle

Este bloque es el más importante para el proyecto. Todas las llamadas a Oracle son asíncronas.

- **Callbacks**: entender el problema que generan (callback hell)
- **Promises**: `.then()` · `.catch()` · `.finally()` · `Promise.all()` · `Promise.allSettled()`
- **async / await**: escribir código asíncrono legible · `await` solo dentro de `async` · manejo con `try/catch`
- **Manejo de errores asíncronos**: `try/catch` en funciones async · lanzar errores con `throw new Error()`

```js
// Ejemplo base que usarás en Server Actions
async function obtenerCitas(medicoId) {
  try {
    const resultado = await ejecutarProcedimiento('PKG_CITAS.GET_BY_MEDICO', [medicoId])
    return resultado
  } catch (error) {
    throw new Error('Error al obtener citas: ' + error.message)
  }
}
```

### 1.3 Patrones modernos usados en el proyecto

- **Destructuring avanzado**: de objetos anidados · en parámetros de función · con valores por defecto
- **Optional chaining**: `usuario?.perfil?.nombre` — evita errores con datos de Oracle que pueden ser null
- **Nullish coalescing**: `valor ?? 'default'` — diferente a `||`
- **Array spread y Object spread**: clonar sin mutar · mergear objetos en Redux
- **Closures**: cómo los hooks de React los usan internamente
- **Short-circuit evaluation**: `condicion && <Componente />` — patrón central en JSX

### 1.4 Manipulación de datos

Necesario para procesar respuestas de Oracle antes de renderizar.

- **JSON**: `JSON.parse()` · `JSON.stringify()` · manejo de CLOB desde Oracle
- **Date**: formateo de fechas para citas médicas · `new Date()` · `.toLocaleDateString()`
- **Array methods encadenados**: filtrar + mapear + reducir en una sola expresión
- **Inmutabilidad**: no mutar arrays/objetos directamente — fundamental para Redux

---

## Fase 2 — React 18 (capa de UI)

### 2.1 Componentes y JSX

- Componentes funcionales · JSX como sintaxis · props · children como prop especial
- Renderizado condicional: ternario `? :` · short-circuit `&&`
- Listas: `.map()` con `key` obligatorio
- Eventos: `onClick`, `onChange`, `onSubmit` · `e.preventDefault()`

### 2.2 Hooks esenciales

| Hook | Uso en TeKer |
|------|-------------|
| `useState` | Campos de formularios, loading, errores locales |
| `useEffect` | Inicializar datos al montar, suscripciones |
| `useEffect([])` | Cargar datos una sola vez al entrar a una vista |
| `useEffect([dep])` | Re-fetch cuando cambia el paciente o médico activo |
| `useMemo` | Memoizar listas de citas filtradas |
| `useCallback` | Estabilizar funciones pasadas a componentes hijos |
| `useRef` | Referencias a inputs, scroll programático |

### 2.3 Composición de componentes

- Componentes genéricos con `children`
- Props como configuración: `<Tabla columnas={cols} datos={rows} />`
- Componentes de layout compartidos entre roles
- Separación de responsabilidades: presentación vs lógica

### 2.4 Manejo de formularios

```js
// Patrón estándar en TeKer (sin TypeScript, sin librerías externas)
function FormularioCita() {
  const [form, setForm] = useState({ fecha: '', pacienteId: '', notas: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await crearCita(form) // Server Action
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
}
```

---

## Fase 3 — Next.js 14 App Router (núcleo del proyecto)

### 3.1 Server Components vs Client Components

| | Server Component | Client Component |
|---|---|---|
| Directiva | ninguna (default) | `'use client'` al inicio |
| Accede a DB | sí, directo | no |
| Usa hooks | no | sí |
| Llama Server Actions | no directamente | sí |
| Va al bundle del cliente | no | sí |

**Regla práctica**: si necesita `useState`, `useEffect`, eventos del DOM o Redux → `'use client'`. Si solo muestra datos → Server Component.

### 3.2 Sistema de rutas por rol

```
app/
├── middleware.js              ← verifica JWT y redirige por rol
├── (auth)/
│   └── login/page.js
├── medico/
│   ├── layout.js              ← layout exclusivo del médico
│   ├── citas/page.js
│   └── pacientes/page.js
├── paciente/
│   ├── layout.js
│   └── historial/page.js
├── coordinador/
│   ├── layout.js
│   └── agenda/page.js
└── aliado/
    ├── layout.js
    └── panel/page.js
```

### 3.3 Server Actions

```js
// app/actions/citas.js
'use server'

import { ejecutarProcedimiento } from '@/lib/oracle'
import { revalidatePath } from 'next/cache'

export async function crearCita(data) {
  try {
    await ejecutarProcedimiento('PKG_CITAS.INSERT_CITA', [
      data.medicoId,
      data.pacienteId,
      data.fecha,
      data.notas
    ])
    revalidatePath('/medico/citas')
  } catch (error) {
    throw new Error('No se pudo crear la cita')
  }
}
```

### 3.4 Layouts y children

```js
// app/medico/layout.js
export default function MedicoLayout({ children }) {
  return (
    <div className="flex">
      <SidebarMedico />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
```

### 3.5 Caché y revalidación

- `revalidatePath('/ruta')` — invalida el caché de una ruta específica después de una mutación
- `revalidateTag('citas')` — invalida por etiqueta cuando múltiples rutas muestran los mismos datos
- `fetch` con `{ cache: 'no-store' }` — para datos que nunca deben cachearse (notificaciones en tiempo real)

---

## Fase 4 — Redux Toolkit (estado global)

### 4.1 Qué va en Redux en TeKer

| Estado | Dónde vive |
|--------|-----------|
| Usuario autenticado (rol, nombre, id) | Redux |
| Notificaciones pendientes | Redux |
| Filtros activos en tablas | Redux |
| Loading/error de operaciones globales | Redux |
| Datos de formularios multi-paso | Redux |
| Datos que solo se muestran en una vista | State local (`useState`) |

### 4.2 Estructura de un slice

```js
// store/slices/usuarioSlice.js
import { createSlice } from '@reduxjs/toolkit'

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: { datos: null, rol: null },
  reducers: {
    setUsuario: (state, action) => {
      state.datos = action.payload.datos
      state.rol = action.payload.rol
    },
    limpiarUsuario: (state) => {
      state.datos = null
      state.rol = null
    }
  }
})

export const { setUsuario, limpiarUsuario } = usuarioSlice.actions
export default usuarioSlice.reducer
```

### 4.3 Uso en componentes

```js
'use client'

import { useSelector, useDispatch } from 'react-redux'
import { setUsuario } from '@/store/slices/usuarioSlice'

function PerfilUsuario() {
  const usuario = useSelector(state => state.usuario.datos)
  const dispatch = useDispatch()

  return <p>{usuario?.nombre}</p>
}
```

---

## Fase 5 — Autenticación JWT + Middleware

### 5.1 Flujo de login

```
Usuario llena form → Server Action login()
  → Oracle verifica credenciales (PKG_AUTH.VERIFICAR_USUARIO)
  → Se genera JWT con jose (HS256) incluyendo { userId, rol }
  → JWT se guarda en cookie HttpOnly
  → redirect() a /{rol}/dashboard
```

### 5.2 Middleware de protección

```js
// middleware.js (raíz del proyecto)
import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const token = request.cookies.get('session')?.value
  
  if (!token) return NextResponse.redirect(new URL('/login', request.url))

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))
    
    const { rol } = payload
    const pathname = request.nextUrl.pathname

    // Evitar que un paciente acceda a rutas de médico
    if (pathname.startsWith('/medico') && rol !== 'medico') {
      return NextResponse.redirect(new URL(`/${rol}/dashboard`, request.url))
    }

    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/medico/:path*', '/paciente/:path*', '/coordinador/:path*', '/aliado/:path*']
}
```

---

## Fase 6 — Oracle DB desde Node.js

### 6.1 Conceptos clave

- **Connection pool**: no se abre una conexión nueva por cada request — se reutilizan conexiones del pool
- **Stored procedures**: toda la lógica SQL vive en PL/SQL dentro de Oracle, no en JavaScript
- **Parámetros**: tipos `BIND_IN`, `BIND_OUT`, `BIND_INOUT`
- **CLOB**: tipo Oracle para textos largos (notas médicas, historiales) — requiere manejo especial en Node.js

### 6.2 Llamada típica desde Server Action

```js
// lib/oracle.js
import oracledb from 'oracledb'

export async function ejecutarProcedimiento(procedimiento, params) {
  let conexion
  try {
    conexion = await oracledb.getConnection()
    const resultado = await conexion.execute(
      `BEGIN ${procedimiento}(:1, :2, :3, :4); END;`,
      params,
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    )
    return resultado.rows
  } finally {
    if (conexion) await conexion.close()
  }
}
```

---

## Resumen — orden de estudio recomendado

```
Semana 1  →  JS Fase 1 completa (fundamentos + asincronía)
Semana 2  →  React 18 Fase 2 (componentes + hooks)
Semana 3  →  Next.js 14 Fase 3 (App Router + Server Actions)
Semana 4  →  Redux Toolkit Fase 4 + JWT Fase 5
Semana 5  →  Oracle Fase 6 + integración end-to-end
```

### Temas críticos — dominar antes de la primera semana en el proyecto

- `async/await` con `try/catch`
- Server Components vs Client Components
- Server Actions → Oracle stored procedure → `revalidatePath()`
- Rutas dinámicas por rol + middleware JWT
- Redux Toolkit: slice, `useSelector`, `useDispatch`

### Temas importantes — trabajo diario

- Layouts anidados por rol con `children`
- Formularios con `useState` sin TypeScript
- Cache y revalidación en Next.js 14
- Hooks de React: `useEffect`, `useMemo`, `useCallback`
- Manejo de errores en Server Actions

### Temas contextuales — entender el ecosistema

- Oracle connection pool + `node-oracledb`
- JWT con `jose` + cookies HttpOnly
- Arquitectura de carpetas por rol
- Tailwind CSS utility classes

---


# Recursos Gratuitos de Estudio — Stack TeKer
> JavaScript · React 18 · Next.js 14 · Redux Toolkit · JWT · Oracle

---

## Cómo usar este documento

Cada sección tiene recursos ordenados por **prioridad de consumo**. El ícono indica el tipo de recurso:
- 📺 Video / YouTube
- 📖 Documentación oficial
- 🌐 Plataforma interactiva
- 🧪 Práctica / ejercicios

La estrategia recomendada: **30% ver, 70% hacer**. Cada video que veas, replícalo en código.

---

## Fase 1 — JavaScript (punto de partida)

### Objetivo: dominar async/await, array methods y ES6 moderno

---

### Opción A — Español (recomendada si prefieres tu idioma)

#### 1. Jon Mircha — Curso completo de JavaScript
- 📺 **Canal**: [youtube.com/jonmircha](https://www.youtube.com/jonmircha)
- 📖 **Sitio complementario**: [aprendejavascript.org](https://aprendejavascript.org)
- **Por qué**: Es el curso más completo en español. Cubre ES6+, asincronía, módulos, todo lo que necesitas. El autor es profesor universitario y desarrollador independiente.
- **Temas clave a buscar en su canal**:
  - `JavaScript Asíncrono` (Promises, async/await)
  - `Destructuring y Spread`
  - `Array Methods` (map, filter, reduce)
  - `Módulos ES6`

#### 2. freeCodeCamp Español — JavaScript desde cero (9 horas)
- 📺 **Video**: [Curso completo en YouTube](https://www.youtube.com/@freecodecampespanol)
- 🌐 **Plataforma interactiva**: [freecodecamp.org/espanol](https://www.freecodecamp.org/espanol)
- **Por qué**: Ejercicios interactivos directamente en el navegador. Ideal para practicar sin configurar nada. Tiene certificación gratuita al terminar.
- **Ruta recomendada dentro de freeCodeCamp**:
  1. Algoritmos y Estructuras de Datos en JavaScript
  2. Desarrollo Web Responsivo (para entender HTML/CSS base de Tailwind)

---

### Opción B — Inglés (más actualizado y completo)

#### 3. JavaScript.info
- 📖 **Sitio**: [javascript.info](https://javascript.info)
- **Por qué**: La mejor documentación práctica de JS que existe. Tiene ejemplos ejecutables, ejercicios y explicaciones muy claras. Cubre exactamente los temas que necesitas.
- **Secciones prioritarias**:
  - Part 1, Cap 11: Promises, async/await
  - Part 1, Cap 5: Array methods
  - Part 1, Cap 6: Functions avanzadas (closures)
  - Part 1, Cap 3: Objects, destructuring

#### 4. MDN Web Docs — Referencia de JavaScript
- 📖 **Sitio**: [developer.mozilla.org/es/docs/Web/JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- **Por qué**: La referencia oficial. Úsala como diccionario, no como curso. Cuando no recuerdes cómo funciona `.reduce()` o `optional chaining`, búscalo aquí.

---

### Temas específicos a buscar en YouTube (español)
| Tema | Búsqueda recomendada |
|------|---------------------|
| Async/Await | `"async await javascript español"` |
| Promises | `"promesas javascript desde cero"` |
| Destructuring | `"destructuring javascript ES6 español"` |
| Array Methods | `"map filter reduce javascript español"` |
| Optional Chaining | `"optional chaining javascript"` |

---

## Fase 2 — React 18

### Objetivo: hooks, formularios, composición de componentes

---

#### 1. Documentación oficial de React (la mejor fuente)
- 📖 **Sitio**: [react.dev/learn](https://react.dev/learn)
- **Por qué**: La doc oficial fue completamente reescrita en 2023. Tiene tutoriales interactivos, ejemplos editables en vivo y cubre exactamente React 18 con hooks modernos. **Es gratuita y es la fuente más actualizada que existe.**
- **Secciones clave**:
  - Quick Start → para arrancar rápido
  - Describing the UI → componentes y JSX
  - Adding Interactivity → useState, eventos
  - Managing State → cuándo y cómo usar estado
  - Escape Hatches → useEffect, useRef

#### 2. freeCodeCamp — React Course (en inglés, gratuito en YouTube)
- 📺 **Búsqueda**: `"freeCodeCamp React full course"` en YouTube
- **Por qué**: Cursos de 6-10 horas completamente gratuitos en YouTube. Cubren React 18 con hooks.

#### 3. Midudev — React en español
- 📺 **Canal**: [youtube.com/@midudev](https://www.youtube.com/@midudev)
- **Por qué**: Desarrollador senior hispanohablante con contenido muy actualizado. Sus tutoriales de React y Next.js son directos y prácticos. Busca específicamente sus videos de:
  - `useState y useEffect`
  - `Formularios en React`
  - `React desde cero`

---

## Fase 3 — Next.js 14 App Router

### Objetivo: Server Components, Server Actions, layouts, rutas dinámicas, revalidación

---

#### 1. Documentación oficial de Next.js (IMPRESCINDIBLE)
- 📖 **Sitio**: [nextjs.org/docs](https://nextjs.org/docs)
- **Por qué**: La documentación oficial es excepcionalmente buena. Tiene ejemplos de código para cada concepto. Para el stack de TeKer, estas son las secciones críticas:
  - `App Router > Building Your Application > Routing` → rutas, layouts, páginas dinámicas
  - `App Router > Building Your Application > Data Fetching > Server Actions` → cómo mutear datos
  - `App Router > Building Your Application > Caching` → revalidatePath, revalidateTag
  - `App Router > API Reference > Functions > cookies` → para el JWT
  - `App Router > API Reference > Functions > redirect` → redirección por rol

#### 2. Curso Next.js 14 completo — YouTube (español)
- 📺 **Video**: [Tutorial Next.js 14 paso a paso](https://www.youtube.com/watch?v=jMy4pVZMyLM)
- **Duración**: ~2-3 horas
- **Cubre**: App Router, rutas, data fetching, conexión a DB

#### 3. Curso Next.js 14 completo — YouTube (inglés, más completo)
- 📺 **Video**: [Next.js 14 Complete Course - Lama Dev](https://www.youtube.com/watch?v=WgFpPjD7D6I)
- **Duración**: ~5 horas
- **Cubre**: App Router, Server Actions, autenticación, dashboard de admin — **muy alineado con TeKer**

#### 4. EDteam — Next.js 14 desde cero (español, parcialmente gratuito)
- 🌐 **Sitio**: [ed.team/cursos/next](https://ed.team/cursos/next)
- **Cubre**: Routing, Tailwind CSS, Server Components, data fetching con caché y revalidación

---

## Fase 4 — Redux Toolkit

### Objetivo: slices, store, useSelector, useDispatch, integración con Next.js

---

#### 1. Documentación oficial de Redux Toolkit
- 📖 **Sitio**: [redux-toolkit.js.org](https://redux-toolkit.js.org)
- **Sección crítica para TeKer**: [redux-toolkit.js.org/usage/nextjs](https://redux-toolkit.js.org/usage/nextjs) — documentación oficial de cómo usar Redux con Next.js App Router específicamente.
- **Tutorial de inicio rápido**: `redux-toolkit.js.org/tutorials/quick-start` — 15 minutos, explica el flujo completo.

#### 2. Redux en español (documentación traducida)
- 📖 **Sitio**: [es.redux.js.org](https://es.redux.js.org)
- **Por qué**: Documentación oficial de Redux traducida al español. Útil para entender los conceptos base antes de pasar a Redux Toolkit.

#### 3. YouTube — Redux Toolkit desde cero (español)
- 📺 **Búsqueda**: `"Redux Toolkit desde cero React español"` en YouTube
- **Video recomendado**: busca el de Fazt Code o HolaMundo en YouTube — tienen tutoriales prácticos de ~1 hora.

#### 4. Redux con Next.js — template oficial
```bash
npx create-next-app --example with-redux mi-proyecto
```
- **Por qué**: Genera un proyecto con Redux Toolkit ya configurado correctamente para Next.js App Router. Es la forma más rápida de ver cómo debe integrarse.

---

## Fase 5 — JWT y Autenticación

### Objetivo: entender el flujo de login, cookies HttpOnly, middleware de Next.js

---

#### 1. Documentación de Next.js — Middleware
- 📖 **Sitio**: [nextjs.org/docs/app/building-your-application/routing/middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- **Por qué**: Explica exactamente cómo funciona el `middleware.js` que usa TeKer para proteger rutas por rol.

#### 2. jose — Librería JWT usada en el proyecto
- 📖 **Repositorio**: [github.com/panva/jose](https://github.com/panva/jose)
- **Funciones clave a buscar**: `SignJWT`, `jwtVerify`, `EncryptJWT`

#### 3. YouTube — Autenticación con JWT en Next.js 14
- 📺 **Búsqueda**: `"JWT Next.js 14 App Router authentication cookies"` en YouTube
- **Por qué**: Hay varios tutoriales de ~30-60 min que muestran el flujo completo: login → JWT → cookie → middleware → protección de rutas.

---

## Fase 6 — Tailwind CSS

### Objetivo: utility classes, responsive, estados hover/focus

---

#### 1. Documentación oficial de Tailwind CSS
- 📖 **Sitio**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Por qué**: La documentación tiene una barra de búsqueda excelente. Cuando necesites saber cómo hacer algo visual, búscalo directo aquí. No hace falta un curso.
- **Secciones para empezar**:
  - Core Concepts → Utility-First Fundamentals
  - Core Concepts → Responsive Design
  - Core Concepts → Hover, Focus, and Other States

#### 2. Tailwind Play — editor online gratuito
- 🧪 **Sitio**: [play.tailwindcss.com](https://play.tailwindcss.com)
- **Por qué**: Practica clases de Tailwind directamente en el navegador sin instalar nada.

---

## Recursos rápidos de práctica (sin instalar nada)

| Herramienta | Para qué | Link |
|-------------|----------|------|
| **CodeSandbox** | Proyectos React/Next.js en el navegador | codesandbox.io |
| **StackBlitz** | Entorno Next.js completo online | stackblitz.com |
| **Tailwind Play** | Practicar clases Tailwind | play.tailwindcss.com |
| **freeCodeCamp** | Ejercicios interactivos de JS | freecodecamp.org/espanol |
| **JavaScript.info** | Ejercicios de JS con solución | javascript.info |

---

## Plan de estudio semanal recomendado

### Semana 1 — JavaScript sólido
| Día | Tarea | Tiempo |
|-----|-------|--------|
| Lunes | JS: variables, funciones, arrow functions — Jon Mircha | 2h |
| Martes | JS: array methods (map, filter, reduce) — práctica en freeCodeCamp | 2h |
| Miércoles | JS: Promises y async/await — javascript.info cap. 11 | 2h |
| Jueves | JS: destructuring, spread, optional chaining | 1.5h |
| Viernes | JS: proyecto pequeño — lista de citas con fetch a una API pública | 2h |

### Semana 2 — React 18
| Día | Tarea | Tiempo |
|-----|-------|--------|
| Lunes | React: componentes, props, JSX — react.dev/learn | 2h |
| Martes | React: useState, eventos, formularios | 2h |
| Miércoles | React: useEffect (los tres modos) | 2h |
| Jueves | React: composición, children, componentes reutilizables | 1.5h |
| Viernes | Proyecto: formulario de cita médica con React (sin Next.js) | 2h |

### Semana 3 — Next.js 14 App Router
| Día | Tarea | Tiempo |
|-----|-------|--------|
| Lunes | Next.js: App Router, rutas, layouts — docs oficiales | 2h |
| Martes | Next.js: Server vs Client Components — tutorial YouTube | 2h |
| Miércoles | Next.js: Server Actions — docs + práctica | 2h |
| Jueves | Next.js: revalidatePath, caché, rutas dinámicas | 1.5h |
| Viernes | Proyecto: dashboard con 2 roles, layout compartido, Server Action | 2h |

### Semana 4 — Redux Toolkit + JWT
| Día | Tarea | Tiempo |
|-----|-------|--------|
| Lunes | Redux: store, slices, useSelector, useDispatch — docs oficiales | 2h |
| Martes | Redux: integración con Next.js App Router — doc oficial nextjs | 2h |
| Miércoles | JWT: flujo de login, jose, cookies HttpOnly | 2h |
| Jueves | Middleware de Next.js para protección de rutas por rol | 1.5h |
| Viernes | Integración final: login → JWT → Redux → dashboard por rol | 2h |

---

## Consejo final

> La documentación oficial de **react.dev**, **nextjs.org/docs** y **redux-toolkit.js.org** son mejores que cualquier curso. Son gratuitas, están actualizadas y tienen ejemplos de código ejecutables. Úsalas como fuente primaria, y los videos de YouTube como complemento cuando algo no quede claro leyendo.

---

*Documento generado para preparación técnica en TeKer — recursos 100% gratuitos*