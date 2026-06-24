# 🛡️ March of the Legion — Documentación Completa

---

## 📁 Estructura del Proyecto

```
March_of_Legion_Joshua/src/
│
├── Troops.java                  ← Punto de entrada (main)
│
├── model/                       ← Entidades del dominio
│   ├── Troop.java               ← Clase abstracta base
│   ├── TroopTypes.java          ← 8 subclases concretas
│   ├── TroopFactory.java        ← Fábrica de tropas
│   ├── ListType.java            ← Enum: CHARACTER / NUMBER
│   └── Orientation.java         ← Enum: NORTH / SOUTH / EAST / WEST
│
├── sorting/                     ← Algoritmos de ordenamiento
│   ├── Sorter.java              ← Interfaz genérica con Generics
│   ├── SortingAlgorithms.java   ← 6 algoritmos implementados
│   └── SorterFactory.java       ← Fábrica de sorters
│
├── battlefield/                 ← Campo de batalla
│   └── Battlefield.java         ← Matriz NxN + visualización
│
├── cli/                         ← Línea de comandos
│   └── CliArgs.java             ← Parseo y validación
│
└── util/                        ← Utilidades
    └── StepPrinter.java         ← Impresión paso a paso + pausas
```

---

## ⚙️ Compilar y ejecutar

```powershell
# Compilar todo (desde src/)
javac -d out model\*.java util\*.java sorting\*.java battlefield\*.java cli\*.java Troops.java

# Casos de uso
java -cp out Troops a=i t=c o=s u=1,2,5,4,10        # Insertion | chars  | Sur    | 10x10
java -cp out Troops a=b t=n o=w u=1,1,2,3,5 f=6     # Bubble    | nums   | Oeste  | 6x6
java -cp out Troops a=q t=c o=n u=2,2,3,3,5 f=8     # Quick     | chars  | Norte  | 8x8
java -cp out Troops a=m t=n o=e u=1,2,3,4,5 f=7     # Merge     | nums   | Este   | 7x7
java -cp out Troops a=s t=c o=s u=3,4,5,6,10 f=15   # Selection | chars  | Sur    | 15x15
java -cp out Troops a=h t=n o=n u=1,1,2,2,4 f=6     # Heap      | nums   | Norte  | 6x6
```

---

## 🧠 Diagrama de Clases (UML)

```
                    «interface»
          Sorter<T extends Comparable<T>>
          ┌─────────────────────────────┐
          │ + sort(List<T>)             │
          │ + sortStepByStep(...): long │
          │ + algorithmName(): String   │
          └─────────────┬───────────────┘
                        │ implements
          ┌─────────────┼──────────────────────┐
          │             │             │         │
   InsertionSort   BubbleSort  SelectionSort  MergeSort
                                           QuickSort  HeapSort


                    «abstract»
              Troop implements Comparable<Troop>
          ┌────────────────────────────────────┐
          │ - health, speed, strength: int     │
          │ - range, sortValue: int            │
          │ - display: String                  │
          │ + getTypeName(): String  «abstract»│
          │ + compareTo(), equals(), hashCode()│
          └──────────────┬─────────────────────┘
                         │ extends
     ┌──────┬────────┬───┴──┬────────┬──────────┬─────────────┬─────────┐
Commander  Medic   Tank  Sniper  Infantry  Engineer  Artilleryman  AntiAir


   Battlefield          TroopFactory         SorterFactory
   ───────────          ────────────         ─────────────
   -grid:String[][]     +buildTroops()       +create(code)
   +placeRandomly()     «static factory»     «static factory»
   +placeSorted()
   +print()

   CliArgs              StepPrinter
   ────────             ───────────
   +algorithmCode       +print()  «static»
   +listType            +pause()  «static»
   +orientation         «final utility»
   +counts, fieldSize
   +parse()  «static»

   «enum» ListType       «enum» Orientation
   CHARACTER | NUMBER    NORTH|SOUTH|EAST|WEST
```

---

## 📌 Explicación detallada de cada archivo

---

### 🔷 `Troops.java` — Punto de entrada

**¿Qué es?**
El archivo principal del programa. Contiene el método `main()` que es lo primero que Java ejecuta.

**¿Qué hace exactamente?**
No contiene lógica de negocio propia. Su único trabajo es coordinar a las demás clases en el orden correcto:

```
1. Le pasa los argumentos a CliArgs para validarlos
2. Le pide a SorterFactory que cree el algoritmo elegido
3. Le pide a TroopFactory que genere la lista de tropas
4. Crea el campo de batalla (Battlefield)
5. Muestra el campo inicial (posición aleatoria)
6. Ejecuta el ordenamiento paso a paso
7. Muestra el campo final (posición ordenada)
8. Imprime el tiempo neto de ordenamiento
```

**¿Por qué está solo?**
Porque aplica el principio de responsabilidad única (SRP): este archivo solo orquesta, si cambias cualquier lógica del programa, este archivo no necesita modificarse.

---

### 🔷 `model/Troop.java` — Clase abstracta base

**¿Qué es?**
La raíz de toda la jerarquía de tropas. Es `abstract`, lo que significa que no se puede instanciar directamente — nadie puede escribir `new Troop()`.

**¿Qué contiene?**

| Atributo | Tipo | Descripción |
|----------|------|-------------|
| `health` | int | Puntos de vida de la unidad |
| `speed` | int | Velocidad de movimiento |
| `strength` | int | Fuerza de ataque |
| `range` | int | Alcance del ataque |
| `display` | String | Símbolo visual en el campo (letra o número) |
| `sortValue` | int | Valor numérico para los algoritmos de ordenamiento |

**¿Por qué es importante?**
- Todos los atributos son `private final` → **encapsulamiento**: nadie puede modificarlos desde fuera
- Declara `getTypeName()` como abstracto → **abstracción**: obliga a cada subclase a decir su nombre
- Implementa `Comparable<Troop>` con `compareTo()` → los algoritmos de ordenamiento pueden comparar cualquier tropa sin saber su tipo concreto
- Sobreescribe `equals()` y `hashCode()` → dos tropas con mismo display y sortValue son iguales
- `toString()` devuelve `display` → `StepPrinter` puede imprimir cualquier tropa simplemente llamando `item.toString()`

---

### 🔷 `model/TroopTypes.java` — Las 8 subclases

**¿Qué es?**
Un archivo que contiene las 8 clases concretas que extienden `Troop`. Cada una representa un tipo de unidad militar con sus propios valores de atributos.

**¿Por qué están todas en un solo archivo?**
Porque son clases pequeñas (3-4 líneas cada una) y relacionadas entre sí. Separarlas en 8 archivos distintos haría el proyecto innecesariamente grande sin añadir claridad.

**Las 8 unidades:**

| Clase | Vida | Vel | Fuerza | Rango | Rol en el campo |
|-------|------|-----|--------|-------|-----------------|
| `Commander` | 100 | 2 | 90 | 10 | Mando estratégico |
| `Medic` | 70 | 8 | 10 | 3 | Soporte y curación |
| `Tank` | 200 | 1 | 95 | 6 | Blindaje pesado |
| `Sniper` | 50 | 4 | 85 | 20 | Largo alcance |
| `Infantry` | 80 | 6 | 50 | 4 | Combate básico |
| `Engineer` | 60 | 9 | 30 | 2 | Logística |
| `Artilleryman` | 75 | 2 | 88 | 15 | Fuego indirecto |
| `AntiAir` | 65 | 3 | 70 | 18 | Defensa aérea |

**Cada clase solo necesita dos líneas de lógica propia:**
```java
// Ejemplo: Tank hereda todo de Troop y solo define sus valores
class Tank extends Troop {
    public Tank(String display, int sortValue) {
        super(200, 1, 95, 6, display, sortValue); // vida, vel, fuerza, rango
    }
    @Override
    public String getTypeName() { return "Tanque"; } // polimorfismo
}
```

---

### 🔷 `model/TroopFactory.java` — Fábrica de tropas

**¿Qué es?**
Aplica el patrón **Factory**: centraliza la creación de objetos `Troop`. Nadie más en el programa sabe cómo construir tropas — todo pasa por aquí.

**¿Qué recibe y qué devuelve?**
- Recibe: el tipo de lista (`CHARACTER` o `NUMBER`) y un arreglo de 5 conteos `[cmd, med, tank, snip, inf]`
- Devuelve: `List<Troop>` con todas las tropas ya creadas y listas

**Lógica de creación:**

Para tipo `CHARACTER` asigna letras según rangos del enunciado:
```
Comandante: a-j    Médico: k-t    Tanque: u-z + A-J
Sniper: K-N        Infantería: O-X
```

Para tipo `NUMBER` genera un número aleatorio en el rango:
```
Comandante: 1-10   Médico: 11-20   Tanque: 21-30
Sniper: 31-40      Infantería: 41-50
```

**¿Por qué es útil?**
Si mañana agregas un nuevo tipo de tropa (por ejemplo, `Pilot`), solo modificas esta clase. `Troops.java`, `Battlefield.java` y todos los demás no saben nada de cómo se crean las tropas.

---

### 🔷 `model/ListType.java` — Enum de tipo de lista

**¿Qué es?**
Una enumeración con dos valores: `CHARACTER` y `NUMBER`. Representa el tipo de dato con el que trabaja el programa.

**¿Por qué un enum y no un String?**
Porque un enum es seguro en tiempo de compilación. Si escribes `ListType.CARACTER` (con error de tipeo), el compilador lo detecta inmediatamente. Un String como `"character"` puede tener errores que solo se descubren al ejecutar.

**¿Qué incluye?**
- `parse(String raw)` → convierte `"c"` o `"n"` al enum, lanza `IllegalArgumentException` si el valor no es válido
- `displayName()` → devuelve `"Character"` o `"Number"` para la salida en consola

---

### 🔷 `model/Orientation.java` — Enum de orientación

**¿Qué es?**
Una enumeración con cuatro valores: `NORTH`, `SOUTH`, `EAST`, `WEST`. Determina en qué dirección se ordena visualmente el campo de batalla.

**¿Qué significa cada valor?**

| Valor | Dirección de ordenamiento | Comportamiento visual |
|-------|--------------------------|----------------------|
| `SOUTH` | Norte → Sur | Tropas llenan filas de arriba hacia abajo |
| `NORTH` | Sur → Norte | Tropas llenan filas de abajo hacia arriba |
| `EAST` | Oeste → Este | Tropas llenan columnas de izquierda a derecha |
| `WEST` | Este → Oeste | Tropas llenan columnas de derecha a izquierda |

**¿Qué incluye?**
- `parse(String raw)` → convierte `"n"/"s"/"e"/"w"` al enum correspondiente
- `displayName()` → devuelve el nombre en español para la salida ("Norte", "Sud", etc.)

---

### 🔷 `sorting/Sorter.java` — Interfaz genérica

**¿Qué es?**
El contrato que deben cumplir TODOS los algoritmos de ordenamiento. Es una interfaz con **Generics**: `Sorter<T extends Comparable<T>>`.

**¿Qué significa `<T extends Comparable<T>>`?**
Significa que esta interfaz funciona con cualquier tipo de dato que sepa compararse a sí mismo. No está atada a `Troop` — si mañana quisieras ordenar `String` o `Integer`, funcionaría igual sin cambiar nada.

**¿Qué define?**

```java
void sort(List<T> list)
// Ordena la lista sin mostrar pasos. Usado internamente.

long sortStepByStep(List<T> list, long stepPauseMs, ListType listType)
// Ordena mostrando el estado tras cada paso.
// Devuelve SOLO el tiempo de ordenamiento en nanosegundos (sin contar pausas).

String algorithmName()
// Devuelve el nombre del algoritmo para mostrarlo en pantalla.
```

**¿Qué es el `default method`?**
`sortStepByStep` tiene una implementación `default` en la interfaz. Si un algoritmo no la sobreescribe, se usa esta versión básica que simplemente ordena y muestra el resultado final. Cada algoritmo la sobreescribe con su propia lógica de pasos.

---

### 🔷 `sorting/SortingAlgorithms.java` — Los 6 algoritmos

**¿Qué es?**
Contiene los 6 algoritmos de ordenamiento implementados. Todos implementan `Sorter<T>`.

**Cada algoritmo tiene DOS versiones:**
- `sort()` — ordena sin mostrar nada (lógica pura)
- `sortStepByStep()` — ordena mostrando cada paso con pausa

**La clave del cronómetro neto:**
```java
// ✅ CORRECTO: cronómetro solo mide la lógica
long t0 = System.nanoTime();
// ... código de ordenamiento ...
totalNs += System.nanoTime() - t0;

// La pausa está FUERA del cronómetro
StepPrinter.pause(pauseMs);  // Thread.sleep NO se cuenta
```

**Los 6 algoritmos:**

| Algoritmo | Complejidad | Cuándo muestra un paso |
|-----------|-------------|----------------------|
| `InsertionSort` | O(n²) / O(n) mejor | Tras cada inserción |
| `BubbleSort` | O(n²) | Tras cada pasada completa |
| `SelectionSort` | O(n²) siempre | Tras colocar cada mínimo |
| `MergeSort` | O(n log n) siempre | Tras cada operación de merge |
| `QuickSort` | O(n log n) promedio | Tras cada partición con pivote |
| `HeapSort` | O(n log n) siempre | Tras extraer cada máximo del heap |

---

### 🔷 `sorting/SorterFactory.java` — Fábrica de algoritmos

**¿Qué es?**
Aplica el patrón **Factory** para los algoritmos. Recibe una letra del CLI y devuelve el `Sorter<Troop>` correspondiente.

**¿Por qué es útil?**
`Troops.java` no necesita saber qué clases existen. Solo llama `SorterFactory.create("i")` y recibe el algoritmo listo. Para agregar un nuevo algoritmo, solo agregas una línea aquí — nada más cambia.

```java
// Así de simple es usarlo desde Troops.java:
Sorter<Troop> sorter = SorterFactory.create(parsed.algorithmCode);
sorter.sortStepByStep(troops, STEP_PAUSE_MS, parsed.listType);
```

---

### 🔷 `battlefield/Battlefield.java` — El campo de batalla

**¿Qué es?**
Maneja la matriz `String[N][N]` que es la representación visual del campo. `N` es el tamaño definido por el parámetro `f`.

**Tres operaciones principales:**

**1. `placeRandomly(troops)`** — posición inicial
Recorre la lista de tropas y coloca cada una en una celda aleatoria.
Si la celda ya está ocupada, genera nuevas coordenadas y reintenta hasta encontrar una libre.

**2. `placeSorted(troops, orientation)`** — posición final
Primero limpia todo el grid (pone `*` en todas las celdas).
Luego coloca las tropas ya ordenadas recorriendo el grid en la dirección de la orientación:
```
SOUTH → recorre filas 0,1,2... (arriba a abajo)
NORTH → recorre filas N-1,N-2... (abajo a arriba)
EAST  → recorre columnas 0,1,2... (izquierda a derecha)
WEST  → recorre columnas N-1,N-2... (derecha a izquierda)
```

**3. `print(listType)`** — impresión en consola
Recorre el grid e imprime cada celda con un ancho fijo.
- Tipo `CHARACTER` → ancho 4 por celda
- Tipo `NUMBER` → ancho 6 por celda (números de 2 dígitos necesitan más espacio)

**Importante:** Se usa **una sola instancia** para las dos posiciones.
`placeRandomly()` llena el grid → se imprime.
`placeSorted()` limpia y re-llena → se imprime de nuevo.

---

### 🔷 `cli/CliArgs.java` — Parseo de argumentos

**¿Qué es?**
La "puerta de entrada" del programa. Toma los argumentos crudos de `main(String[] args)` y los convierte en datos validados y tipados.

**Flujo de validación (en orden estricto):**

```
args[] → HashMap<String,String>   "a=i t=c o=s u=1,2,5,4,10 f=10"
           ↓
Validar formato "clave=valor"     si falla → error + return
           ↓
Validar "a" (algoritmo)           si no es I/B/S/M/Q/H → error
           ↓
Validar "t" (tipo)                si no es C/N → error
           ↓
Validar "o" (orientación)         si no es N/S/E/W → error
           ↓
Validar "u" (conteos)             si no son 5 enteros ≥ 0 → error
           ↓
Validar "f" (campo, default 10)   si no está entre 5-1000 → error
           ↓
Validar total tropas ≤ f×f        si excede → error
           ↓
result.valid = true               ✅ todo OK
```

**¿Por qué es importante validar en este orden?**
Cada error tiene su propio mensaje descriptivo. Si el usuario escribe mal el algoritmo, le dices exactamente qué está mal y cuáles son los valores válidos — no un genérico "invalid input".

---

### 🔷 `util/StepPrinter.java` — Impresión y pausas

**¿Qué es?**
Clase utilitaria `final` (no se puede heredar, no se puede instanciar) con dos métodos estáticos. Separa la responsabilidad de visualización de la lógica de los algoritmos.

**¿Por qué existe esta clase y no está dentro de cada algoritmo?**
Principio de responsabilidad única (SRP): los algoritmos solo deben ordenar. Si mañana quieres cambiar el formato de impresión (por ejemplo, mostrar en columnas en lugar de fila), solo modificas `StepPrinter` — los 6 algoritmos no se tocan.

**`print(list, step, listType)`** → imprime una línea así:
```
  Step  3: [  C   M   M   T   T   S   S   I   I   I ]
  Final:   [  C   M   M   T   T   T   S   S   I   I ]
```

**`pause(millis)`** → ejecuta `Thread.sleep(millis)` con manejo correcto de `InterruptedException`:
```java
try {
    Thread.sleep(millis);
} catch (InterruptedException e) {
    Thread.currentThread().interrupt(); // restaura el estado de interrupción
}
```
Este tiempo de pausa NO se cuenta en el cronómetro de ordenamiento.

---

## ✅ Principios de POO aplicados

| Principio | Archivo donde se aplica | Cómo |
|-----------|------------------------|------|
| **Herencia** | `TroopTypes.java` | `Commander`, `Tank`, etc. extienden `Troop` |
| **Polimorfismo** | `TroopTypes.java` | Cada clase sobreescribe `getTypeName()` |
| **Encapsulamiento** | `Troop.java` | Atributos `private final`, solo getters |
| **Abstracción** | `Troop.java`, `Sorter.java` | Clase abstracta e interfaz |
| **Generics** | `Sorter.java` | `<T extends Comparable<T>>` |
| **Comparable** | `Troop.java` | `compareTo()`, `equals()`, `hashCode()` |
| **Factory Pattern** | `TroopFactory`, `SorterFactory` | Centralizan creación de objetos |
| **SRP** | `StepPrinter`, cada algoritmo | Una sola responsabilidad por clase |
| **Enums separados** | `ListType.java`, `Orientation.java` | Archivos propios, no dentro de otra clase |

---

## ⚠️ Manejo de errores — mensajes esperados

```
Error: invalid format 'xyz'. Expected: key=value
Error: missing required parameter 'a' (algorithm)
Error: invalid algorithm 'z'. Valid: I, B, S, M, Q, H
Error: invalid type 'x'. Valid: C (character), N (number)
Error: invalid orientation 'x'. Valid: N, S, E, W
Error: invalid 'u'. Expected 5 non-negative integers (e.g. u=1,2,5,4,10)
Error: battlefield size must be between 5 and 1000
Error: troops (500) exceed capacity (5x5=25)
```