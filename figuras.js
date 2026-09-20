
// Obtenemos todos los formularios
const formularios = document.querySelectorAll(".figura form");


// ==========================================
// FUNCIÓN PARA MOSTRAR EL RESULTADO
// ==========================================

function mostrarResultado(formulario, resultado) {

    const span = formulario.querySelector(".resultado span");

    span.textContent = resultado.toFixed(2);
}


// ==========================================
// TRIÁNGULO EQUILÁTERO
// Fórmula: (√3 / 4) × lado²
// ==========================================

document.querySelector("#lado-triangulo")
    .closest("form")
    .querySelector("button")
    .addEventListener("click", function () {

        const formulario = this.closest("form");
        const lado = parseFloat(
            document.querySelector("#lado-triangulo").value
        );

        if (isNaN(lado) || lado <= 0) {
            alert("Ingresa un lado válido.");
            return;
        }

        const area = (Math.sqrt(3) / 4) * Math.pow(lado, 2);

        mostrarResultado(formulario, area);
    });


// ==========================================
// CUADRADO
// Fórmula: lado × lado
// ==========================================

document.querySelector("#lado-cuadrado")
    .closest("form")
    .querySelector("button")
    .addEventListener("click", function () {

        const formulario = this.closest("form");
        const lado = parseFloat(
            document.querySelector("#lado-cuadrado").value
        );

        if (isNaN(lado) || lado <= 0) {
            alert("Ingresa un lado válido.");
            return;
        }

        const area = lado * lado;

        mostrarResultado(formulario, area);
    });


// ==========================================
// RECTÁNGULO
// Fórmula: base × altura
// ==========================================

document.querySelector("#base-rectangulo")
    .closest("form")
    .querySelector("button")
    .addEventListener("click", function () {

        const formulario = this.closest("form");

        const base = parseFloat(
            document.querySelector("#base-rectangulo").value
        );

        const altura = parseFloat(
            document.querySelector("#altura-rectangulo").value
        );

        if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
            alert("Ingresa valores válidos.");
            return;
        }

        const area = base * altura;

        mostrarResultado(formulario, area);
    });


// ==========================================
// ROMBO
// Fórmula: (diagonal mayor × diagonal menor) / 2
// ==========================================

document.querySelector("#diagonal-mayor")
    .closest("form")
    .querySelector("button")
    .addEventListener("click", function () {

        const formulario = this.closest("form");

        const diagonalMayor = parseFloat(
            document.querySelector("#diagonal-mayor").value
        );

        const diagonalMenor = parseFloat(
            document.querySelector("#diagonal-menor").value
        );

        if (
            isNaN(diagonalMayor) ||
            isNaN(diagonalMenor) ||
            diagonalMayor <= 0 ||
            diagonalMenor <= 0
        ) {
            alert("Ingresa diagonales válidas.");
            return;
        }

        const area = (diagonalMayor * diagonalMenor) / 2;

        mostrarResultado(formulario, area);
    });


// ==========================================
// TRAPECIO
// Fórmula: ((base mayor + base menor) × altura) / 2
// ==========================================

document.querySelector("#base-mayor")
    .closest("form")
    .querySelector("button")
    .addEventListener("click", function () {

        const formulario = this.closest("form");

        const baseMayor = parseFloat(
            document.querySelector("#base-mayor").value
        );

        const baseMenor = parseFloat(
            document.querySelector("#base-menor").value
        );

        const altura = parseFloat(
            document.querySelector("#altura-trapecio").value
        );

        if (
            isNaN(baseMayor) ||
            isNaN(baseMenor) ||
            isNaN(altura) ||
            baseMayor <= 0 ||
            baseMenor <= 0 ||
            altura <= 0
        ) {
            alert("Ingresa valores válidos.");
            return;
        }

        const area = ((baseMayor + baseMenor) * altura) / 2;

        mostrarResultado(formulario, area);
    });


// ==========================================
// PENTÁGONO
// Fórmula: (perímetro × apotema) / 2
// ==========================================

document.querySelector("#perimetro-pentagono")
    .closest("form")
    .querySelector("button")
    .addEventListener("click", function () {

        const formulario = this.closest("form");

        const perimetro = parseFloat(
            document.querySelector("#perimetro-pentagono").value
        );

        const apotema = parseFloat(
            document.querySelector("#apotema-pentagono").value
        );

        if (
            isNaN(perimetro) ||
            isNaN(apotema) ||
            perimetro <= 0 ||
            apotema <= 0
        ) {
            alert("Ingresa valores válidos.");
            return;
        }

        const area = (perimetro * apotema) / 2;

        mostrarResultado(formulario, area);
    });


// ==========================================
// ROMBOIDE
// Fórmula: base × altura
// ==========================================

document.querySelector("#base-romboide")
    .closest("form")
    .querySelector("button")
    .addEventListener("click", function () {

        const formulario = this.closest("form");

        const base = parseFloat(
            document.querySelector("#base-romboide").value
        );

        const altura = parseFloat(
            document.querySelector("#altura-romboide").value
        );

        if (
            isNaN(base) ||
            isNaN(altura) ||
            base <= 0 ||
            altura <= 0
        ) {
            alert("Ingresa valores válidos.");
            return;
        }

        const area = base * altura;

        mostrarResultado(formulario, area);
    });


// TRIANGULO EQUILATERO
const botonTriangulo = document.querySelector("#lado-triangulo")
    .parentElement.querySelector("button");

botonTriangulo.addEventListener("click", function () {

    const lado = parseFloat(document.querySelector("#lado-triangulo").value);

    if (lado <= 0 || isNaN(lado)) {
        alert("Ingresa un lado válido");
        return;
    }

    const area = (Math.sqrt(3) / 4) * lado * lado;

    document.querySelector("#lado-triangulo")
        .parentElement
        .querySelector(".resultado span")
        .textContent = area.toFixed(2);
});


// CUADRADO
const botonCuadrado = document.querySelector("#lado-cuadrado")
    .parentElement.querySelector("button");

botonCuadrado.addEventListener("click", function () {

    const lado = parseFloat(document.querySelector("#lado-cuadrado").value);

    if (lado <= 0 || isNaN(lado)) {
        alert("Ingresa un lado válido");
        return;
    }

    const area = lado * lado;

    document.querySelector("#lado-cuadrado")
        .parentElement
        .querySelector(".resultado span")
        .textContent = area.toFixed(2);
});


// RECTANGULO
const botonRectangulo = document.querySelector("#base-rectangulo")
    .parentElement.querySelector("button");

botonRectangulo.addEventListener("click", function () {

    const base = parseFloat(document.querySelector("#base-rectangulo").value);
    const altura = parseFloat(document.querySelector("#altura-rectangulo").value);

    if (base <= 0 || altura <= 0 || isNaN(base) || isNaN(altura)) {
        alert("Ingresa valores válidos");
        return;
    }

    const area = base * altura;

    document.querySelector("#base-rectangulo")
        .parentElement
        .querySelector(".resultado span")
        .textContent = area.toFixed(2);
});


// ROMBO
const botonRombo = document.querySelector("#diagonal-mayor")
    .parentElement.querySelector("button");

botonRombo.addEventListener("click", function () {

    const mayor = parseFloat(document.querySelector("#diagonal-mayor").value);
    const menor = parseFloat(document.querySelector("#diagonal-menor").value);

    if (mayor <= 0 || menor <= 0 || isNaN(mayor) || isNaN(menor)) {
        alert("Ingresa valores válidos");
        return;
    }

    const area = (mayor * menor) / 2;

    document.querySelector("#diagonal-mayor")
        .parentElement
        .querySelector(".resultado span")
        .textContent = area.toFixed(2);
});


// TRAPECIO
const botonTrapecio = document.querySelector("#base-mayor")
    .parentElement.querySelector("button");

botonTrapecio.addEventListener("click", function () {

    const mayor = parseFloat(document.querySelector("#base-mayor").value);
    const menor = parseFloat(document.querySelector("#base-menor").value);
    const altura = parseFloat(document.querySelector("#altura-trapecio").value);

    if (
        mayor <= 0 ||
        menor <= 0 ||
        altura <= 0 ||
        isNaN(mayor) ||
        isNaN(menor) ||
        isNaN(altura)
    ) {
        alert("Ingresa valores válidos");
        return;
    }

    const area = ((mayor + menor) * altura) / 2;

    document.querySelector("#base-mayor")
        .parentElement
        .querySelector(".resultado span")
        .textContent = area.toFixed(2);
});


// PENTAGONO
const botonPentagono = document.querySelector("#perimetro-pentagono")
    .parentElement.querySelector("button");

botonPentagono.addEventListener("click", function () {

    const perimetro = parseFloat(
        document.querySelector("#perimetro-pentagono").value
    );

    const apotema = parseFloat(
        document.querySelector("#apotema-pentagono").value
    );

    if (
        perimetro <= 0 ||
        apotema <= 0 ||
        isNaN(perimetro) ||
        isNaN(apotema)
    ) {
        alert("Ingresa valores válidos");
        return;
    }

    const area = (perimetro * apotema) / 2;

    document.querySelector("#perimetro-pentagono")
        .parentElement
        .querySelector(".resultado span")
        .textContent = area.toFixed(2);
});


// ROMBOIDE
const botonRomboide = document.querySelector("#base-romboide")
    .parentElement.querySelector("button");

botonRomboide.addEventListener("click", function () {

    const base = parseFloat(document.querySelector("#base-romboide").value);
    const altura = parseFloat(document.querySelector("#altura-romboide").value);

    if (base <= 0 || altura <= 0 || isNaN(base) || isNaN(altura)) {
        alert("Ingresa valores válidos");
        return;
    }

    const area = base * altura;

    document.querySelector("#base-romboide")
        .parentElement
        .querySelector(".resultado span")
        .textContent = area.toFixed(2);
});


// HEXAGONO
const botonHexagono = document.querySelector("#perimetro-hexagono")
    .parentElement.querySelector("button");

botonHexagono.addEventListener("click", function () {

    const perimetro = parseFloat(
        document.querySelector("#perimetro-hexagono").value
    );

    const apotema = parseFloat(
        document.querySelector("#apotema-hexagono").value
    );

    if (
        perimetro <= 0 ||
        apotema <= 0 ||
        isNaN(perimetro) ||
        isNaN(apotema)
    ) {
        alert("Ingresa valores válidos");
        return;
    }

    const area = (perimetro * apotema) / 2;

    document.querySelector("#perimetro-hexagono")
        .parentElement
        .querySelector(".resultado span")
        .textContent = area.toFixed(2);
});


// CIRCULO
const botonCirculo = document.querySelector("#radio-circulo")
    .parentElement.querySelector("button");

botonCirculo.addEventListener("click", function () {

    const radio = parseFloat(document.querySelector("#radio-circulo").value);

    if (radio <= 0 || isNaN(radio)) {
        alert("Ingresa un radio válido");
        return;
    }

    const area = Math.PI * radio * radio;

    document.querySelector("#radio-circulo")
        .parentElement
        .querySelector(".resultado span")
        .textContent = area.toFixed(2);
});
