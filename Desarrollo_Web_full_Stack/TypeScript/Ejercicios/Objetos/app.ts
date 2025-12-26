
// Objetos

type Carros = {
  carroceria: string, 
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?: () => void
}


const batimovil:Carros = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee:Carros = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// type arrayObjects = [
//   {
//     nombre: string,
//     edad: number,
//     mutante: boolean
//   },
//   {
//     nombre: string,
//     edad: number,
//     mutante: boolean
//   },
//   {
//     nombre: string,
//     edad: number| undefined,
//     mutante: boolean
//   }

// ]

type arrayObjects = {
  nombre: string,
  edad: number | undefined,
  mutante: boolean
}

//ya no la llamaria como const villanos: arrayObjects = [{}]

// Villanos debe de ser un arreglo de objetos personalizados
const villanos: arrayObjects[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];


type Xmen = {
  poder: (string | boolean),
  estatura: ( number|[string] )
}

type Events = {
  lider: (string | boolean),
  // miembros: ( number|[string, string, string, string] )
  miembros: string[]
}

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
const charles:Xmen = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis: Events = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
// para hacer esto mas facil y no hacer las condicionales de or | entonces solamente hacemos



let mystique: Xmen | Events;

mystique = charles;
mystique = apocalipsis;
