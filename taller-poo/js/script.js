//Ejercicio 1
console.log("Ejercicio 1")
class persona1 {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre
    this.edad = edad
    this.profesion = profesion
  }
}

let nombre1 = new persona1("Eduardo", "18", "Profesor")
let nombre2 = new persona1("Cesar", "50", "Programador")
console.log(
  `Mi nombres es ${nombre1.nombre} tengo ${nombre1.edad} años y soy ${nombre1.profesion}`
)
console.log(
  `Mi nombres es ${nombre2.nombre} tengo ${nombre2.edad} años y soy ${nombre2.profesion}`
)

//Ejercicio 2
console.log("%cEjercicio 2", "color:#808000; font-size:13.3px;")
class vehiculo {
  constructor(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
  }
  arrancar() {
    console.log("el vehiculo arranco")
  }
  detener() {
    console.log("el vehiculo se detuvo")
  }
}

class coche extends vehiculo {
  constructor(marca, modelo) {
    super(marca, modelo)
  }

  acelerar() {
    console.log("el vehiculo acelero")
  }
}
let miVehiculo = new vehiculo("Ferrari", 2020)
console.log(`Soy un ${miVehiculo.marca} y mi modelo es ${miVehiculo.modelo}`)
let miCoche = new coche("Lamborgini", 2023)
console.log(`Soy un ${miCoche.marca} y mi modelo es ${miCoche.modelo}`)

miCoche.acelerar()
miVehiculo.arrancar()
miVehiculo.detener()

//Ejercicio 3
console.log("%cEjercicio 3", "color:#92C41D; font-size:13.6px;")
class cuentaBancaria {
  constructor(saldo) {
    this.saldo = saldo
  }

  get saldoprivate() {
    return this.saldo
  }

  depositar(cantidadSaldo) {
    if (cantidadSaldo > 1000) {
      this.saldo += cantidadSaldo
      console.log(
        `Se deposito ${cantidadSaldo} COP, Su nuevo saldo es: ${this.saldo}`
      )
    } else {
      console.log("Cantidad a depositar es invalida")
    }
  }
  retirar(cantidadSaldo) {
    if (cantidadSaldo > 999 && cantidadSaldo <= this.saldo) {
      this.saldo -= cantidadSaldo
      console.log(
        `Se retiraron ${cantidadSaldo} COP, Su nuevo saldo es: ${this.saldo}`
      )
    } else {
      console.log("Cantidad invalida o fondos insuficientes")
    }
  }
}

let julian = new cuentaBancaria(2000)
console.log("file: script.js:59  julian:", julian)
julian.depositar(50000)
julian.retirar(1000)

//Ejercicio 4
console.log("%cEjercicio 4", "color:#92C41D; font-size:13.9px;")
class Figura {
  calcularArea() { }
}

class Circulo extends Figura {
  constructor(radio) {
    super()
    this.radio = radio
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio
  }
}

class Rectangulo extends Figura {
  constructor(ancho, alto) {
    super()
    this.ancho = ancho
    this.alto = alto
  }

  calcularArea() {
    return this.ancho * this.alto
  }
}

let miCirculo = new Circulo(5)
console.log(miCirculo)
console.log(
  `Mi radio es de ${miCirculo.radio
  }² por lo tanto mi radio equivale a ${miCirculo.calcularArea()}`
)
let miRectangulo = new Rectangulo(4, 6)
console.log(miRectangulo)

console.log(
  `Mi ancho es de ${miRectangulo.ancho} y mi alto es de ${miRectangulo.alto
  } por lo tanto mi área equivale a ${miRectangulo.calcularArea()}`
)

//Ejercicio 5
console.log("%cEjercicio 5", "color:#92C41D; font-size:14.3px;")
class direccion {
  constructor(calle, ciudad, codigoPostal) {
    this.calle = calle
    this.ciudad = ciudad
    this.codigoPostal = codigoPostal
  }
}

class persona2 {
  constructor(edad, buzon, direccion) {
    this.edad = edad
    this.buzon = buzon
    this.direccion = direccion
  }
}

let direccionE6 = new direccion("calle 40 - 32", "Bogotá", 12382381723)

let personitaE5 = new persona2(17, "Lleno", direccionE6)
console.log("file: script.js:155  personita1:", personitaE5)

//Ejercicio 7
console.log("%cEjercicio 7", "color:#92C41D; font-size:14.6px;")
class animal {
  constructor() { }
  hablar() { }
}

class gato extends animal {
  hablar() {
    return "Miau"
  }
}

class perro extends animal {
  hablar() {
    return "Guau"
  }
}

const gatoE7 = new gato()
const perroE7 = new perro()

console.log(`Soy un gato y hago ${gatoE7.hablar()}`)
console.log(`Soy un perro y hago ${perroE7.hablar()}`)