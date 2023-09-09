// Ejercicio 1
function sumaN() {
  let numberEjercicio1 = document.querySelector("#sumaEjercicio1").value
  let sum = 0
  if (sumaEjercicio1.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor rellene el input ",
    })
  } else {
    for (let i = 1; i <= numberEjercicio1; i++) {
      sum += i
    }
    Swal.fire({
      title: "Resultado",
      icon: "success",
      html: "Tu suma es " + sum,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Gracias!',
    })
  }
}

// Ejercicio 2

function verificarNumero() {
  let number = document.querySelector("#numeroEjercicio2").value
  if (numeroEjercicio2.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor rellene el input ",
    })
  } else {
    //el porcentaje es el reciduo
    if (number % 2 === 0) {
      let timerInterval
      Swal.fire({
        title: "Resultado",
        html: "El resultado es par",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          const b = Swal.getHtmlContainer().querySelector("b")
          timerInterval = setInterval(() => {}, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("Se ha cerrado correctamente el modal")
        }
      })
    } else {
      Swal.fire({
        title: "Resultado",
        html: "El resultado es impar",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          const b = Swal.getHtmlContainer().querySelector("b")
          timerInterval = setInterval(() => {}, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("Se ha cerrado correctamente el modal")
        }
      })
    }
  }
}

// Ejercicio 3

function btnEjercicio3() {
  let edad = document.querySelector("#iEdad").value
  let genero = document.querySelector("#iGenero").value
  if ((edad, genero === "")) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor si no rellenas los campos no puedes reclamar el premio",
    })
  } else {
    if (edad <= 10) {
      if (
        genero == "niño" ||
        genero == "Niño" ||
        genero == "niña" ||
        genero == "Niña"
      ) {
        Swal.fire({
          title: "Resultado",
          html: "Recibes un juguito",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            const b = Swal.getHtmlContainer().querySelector("b")
            timerInterval = setInterval(() => {}, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("Se ha cerrado correctamente el modal")
          }
        })
      }
    } else if (edad >= 18) {
      if (genero === "mujer") {
        Swal.fire({
          title: "Resultado!",
          text: "Recibirás una cerveza gratis y una porción de pizza Hawaiana.",
          imageUrl: "",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        })
      } else if (genero === "hombre") {
        Swal.fire({
          title: "Resultado!",
          text: "Recibirás una cerveza gratis y una porción de pizza tres carnes.",
          imageUrl: "https://unsplash.it/400/200",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        })
      }
    } else {
      Swal.fire({
        title: "Lamentablemente",
        text: "No recibes nada",
        imageUrl: "https://media.giphy.com/media/M28rUlcjueKUE/giphy.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          const b = Swal.getHtmlContainer().querySelector("b")
          timerInterval = setInterval(() => {}, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("Se ha cerrado correctamente el modal")
        }
      })
    }
  }
}

//Ejercicio 4

let usuarioM = []
let M = [
  {
    comida: "Hamburguesa",
    precio: 20000,
  },
  {
    comida: "Pizza",
    precio: 9000,
  },
  {
    comida: "Papas Fritas",
    precio: 4000,
  },
  {
    comida: "Gaseosa",
    precio: 2500,
  },
]

let iOrden = document.querySelector("#iOrden")
let agregarItem = document.querySelector("#agregarItem")
let totalPagar = document.querySelector("#totalPagar")

let total = 0

agregarItem.addEventListener("click", (e) => {
  e.preventDefault()
  let seleccion = encontrarSeleccion(iOrden.value)
  if (seleccion) {
    usuarioM.push(seleccion)
    total += seleccion.precio
    iOrden.value = ""
    let carrito = document.querySelector("#tuCarritoText")
    carrito.innerHTML += `  
      <li>${seleccion.comida}</li>
    `
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La opción no esta dentro de nuestro menú. Intente de nuevo",
    })
  }
})

totalPagar.addEventListener("click", (e) => {
  e.preventDefault()
  mostrarTotal()
})

//el metodo toLowerCase sirve para que devuelva el string el letras minusculas
function encontrarSeleccion(item) {
  const seleccion = M.filter(
    (menuItem) => menuItem.comida.toLowerCase() === item.toLowerCase()
  )
  return seleccion.length > 0 ? seleccion[0] : null
}

function mostrarTotal() {
  console.log(`Total a totalPagar: $${total}`)
  Swal.fire({
    title: `Total a pagar $${total}`,
    text: "Si das clic en Pagar, te va a redirigir a pagar por PSE a Nequi",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    footer:
      '<button id="PagarM" class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Pagar</button>' +
      '<button id="cerrarModal" class="swal2-confirm swal2-styled" aria-label="" style="display: inline-block;">Cancelar</button>',
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
  })

  const PagarMBtn = document.querySelector("#PagarM")
  PagarMBtn.addEventListener("click", () => {
    Swal.close()
    window.open("https://recarga.nequi.com.co/bdigitalpsl/#!/", "_blank")
  })

  const cerrarModalButton = document.querySelector("#cerrarModal")
  cerrarModalButton.addEventListener("click", () => {
    Swal.close()
  })
}

//Ejercicio 5

let calcularBtn = document.querySelector("#calcularBtn")
let totalEjercicio5 = document.querySelector("#totalEjercicio5")
let tablaDiv = document.querySelector("#tablaDiv")

calcularBtn.addEventListener("click", () => {
  let numeroInput = parseInt(document.querySelector("#numeroInput").value)
  let tablaHTML = ""
  let total = 0

  //isNaN sirve para identificar si el valor no es un número
  if (isNaN(numeroInput) || numeroInput == 0) {
    alert("asdlka")
  } else {
    for (let iM = 1; iM <= 10; iM++) {
      let resultado = numeroInput * iM
      tablaHTML += `
                      <tr>
                        <td class="numeroI"><i class="fa-solid fa-table me-2"></i>${numeroInput} x ${iM}=</td>
                        <td class="resultadoTd">${resultado}</td>
                      </tr>
                    
                  `
      total += resultado
    }

    tablaDiv.innerHTML = `<h3>Aqui tienes la tabla del ${numeroInput}</h3><table class="tablaEjercicio5">${tablaHTML}</table>`
    totalEjercicio5.innerHTML = `<p>Total de los resultados ${total}</p>`
  }
})

//Ejercicio 6

let iValidar = document.querySelector("#iValidar")
let iEjercicio6 = document.querySelector("#iEjercicio6")
let matricula = 1000000

iValidar.addEventListener("click", () => {
  let valorEjercicio6 = parseFloat(iEjercicio6.value)

  if (valorEjercicio6 < 10.1 && valorEjercicio6 > 0.9) {
    if (valorEjercicio6 < 3) {
      Swal.fire({
        title: "El estudiante no recibe descuento",
        html: "Debe pagar " + matricula + " COP.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          const b = Swal.getHtmlContainer().querySelector("b")
          timerInterval = setInterval(() => {}, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("Se ha cerrado correctamente el modal")
        }
      })
    } else if (valorEjercicio6 >= 3 && valorEjercicio6 <= 4) {
      const descuento = matricula * (5 / 100)
      const totalMatricula = matricula - descuento
      Swal.fire({
        title: "El estudiante tiene un descuento del 5%.",
        html: "Debe pagar " + totalMatricula + " COP.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          const b = Swal.getHtmlContainer().querySelector("b")
          timerInterval = setInterval(() => {}, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("Se ha cerrado correctamente el modal")
        }
      })
    } else if (valorEjercicio6 <= 10) {
      descuento = matricula * (50 / 100)
      totalMatricula = matricula - descuento
      Swal.fire({
        title: "El estudiante tiene un descuento del 50%.",
        html: "Debe pagar " + totalMatricula + " COP.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          const b = Swal.getHtmlContainer().querySelector("b")
          timerInterval = setInterval(() => {}, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("Se ha cerrado correctamente el modal")
        }
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El promedio debe ser de 1 a 10",
      })
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El promedio debe ser de 1 a 10",
    })
  }
})
