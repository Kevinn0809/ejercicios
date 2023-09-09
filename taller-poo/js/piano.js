class teclaPiano {
    constructor(nombreArchivoSonido, botonHTML) {
        this.nombreArchivoSonido = nombreArchivoSonido
        this.botonHTML = botonHTML
        this.botonHTML.addEventListener('click', () => this.reproducirSonido())
    }

    reproducirSonido() {
        const audio = new Audio(this.nombreArchivoSonido)
        audio.play()
    }
}

// Crea instancias de las teclas del piano con diferentes archivos de sonido y botones HTML correspondientes
const teclaDo = new teclaPiano('/assets/notas/nota1.mp3', document.querySelector("#do"))
const teclaRe = new teclaPiano('/assets/notas/nota2.mp3', document.querySelector("#re"))
const teclaMi = new teclaPiano('/assets/notas/nota3.mp3', document.querySelector("#mi"))
const teclaFa = new teclaPiano('/assets/notas/nota4.mp3', document.querySelector("#fa"))
const teclaSol = new teclaPiano('/assets/notas/nota5.mp3', document.querySelector("#sol"))
const teclaLa = new teclaPiano('/assets/notas/nota6.mp3', document.querySelector("#la"))
const teclaSi = new teclaPiano('/assets/notas/nota7.mp3', document.querySelector("#si"))
const teclaDoEnd = new teclaPiano('/assets/notas/nota8.mp3', document.querySelector("#doEnd"))
console.log(teclaDoEnd);