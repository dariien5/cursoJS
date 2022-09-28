"use strict" //modo esticto, donde todas las variables deben estar declaradas.+

let x = 3; //siempre hay que declararlas con let, var o const

//declaracion de clases en js 
class Ejemplo {
    //contructor
    constructor (name,year){ //esta clase incluye dos parametros
        this.name = name; //en los parámetros pobservamos dos variables
        this.year = year;
    }

    //metodo funciones
    edad(){
        return this.year;
    }
}

//crear una clase extendida
class Saludo extends Ejemplo {
    constructor(name, year, obs) {
        super(name,year);
        this.obs = obs;
    }
    show() {
        return this.age() + "---->" + this.obs;
    }
}

let ejemploClas=new Ejemplo ("Prueba ejemplo",1990)
console.log(ejemploClas.age());

import { name, age} from "./person.js";

import mesaje from "./mensaje.js";
alert (name);
alert(age);