
// Esperamos a que toda la página cargue
document.addEventListener("DOMContentLoaded", function () {

    // Buscamos el botón Enviar
    const boton = document.querySelector('button[type="submit"]');

    boton.addEventListener("click", function (evento) {

        // Evita que la página se recargue
        evento.preventDefault();

        // ==========================================
        // OBTENER DATOS
        // ==========================================

        const nombre = document.getElementById("nombre").value.trim();
        const direccion = document.getElementById("direccion").value.trim();
        const email = document.getElementById("email").value.trim();
        const edad = parseInt(document.getElementById("edad").value);

        const estatura = parseFloat(
            document.getElementById("estatura").value
        );

        const peso = parseFloat(
            document.getElementById("peso").value
        );


        // ==========================================
        // VALIDAR DATOS
        // ==========================================

        if (
            nombre === "" ||
            direccion === "" ||
            email === "" ||
            isNaN(edad) ||
            isNaN(estatura) ||
            isNaN(peso)
        ) {

            alert("Por favor, completa todos los campos.");
            return;
        }


        if (edad <= 0 || estatura <= 0 || peso <= 0) {

            alert("Ingresa valores mayores que cero.");
            return;
        }


        // ==========================================
        // CALCULAR IMC
        // IMC = peso / estatura²
        // ==========================================

        const imc = peso / (estatura * estatura);

        const imcRedondeado = imc.toFixed(2);


        // ==========================================
        // DETERMINAR RESULTADO
        // ==========================================

        let resultado;
        let mensaje;


        if (imc < 18.5) {

            resultado = "Bajo peso";
            mensaje = "Tu IMC está por debajo del rango considerado normal.";

        } else if (imc < 25) {

            resultado = "Peso normal";
            mensaje = "Tu IMC se encuentra dentro del rango considerado normal.";

        } else if (imc < 30) {

            resultado = "Sobrepeso";
            mensaje = "Tu IMC se encuentra en el rango de sobrepeso.";

        } else {

            resultado = "Obesidad";
            mensaje = "Tu IMC se encuentra en el rango de obesidad.";

        }


        // ==========================================
        // MOSTRAR RESULTADOS
        // ==========================================

        let resultadoHTML = document.getElementById("resultado-imc");


        // Si todavía no existe el cuadro de resultado,
        // lo creamos automáticamente.

        if (!resultadoHTML) {

            resultadoHTML = document.createElement("div");

            resultadoHTML.id = "resultado-imc";

            resultadoHTML.className = "resultado-imc";

            document.querySelector("fieldset").appendChild(resultadoHTML);
        }


        resultadoHTML.innerHTML = `
            <h2>💗 Resultado del cuestionario 💗</h2>

            <p><strong>Nombre:</strong> ${nombre}</p>

            <p><strong>Dirección:</strong> ${direccion}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Edad:</strong> ${edad} años</p>

            <hr>

            <p><strong>Estatura:</strong> ${estatura} m</p>

            <p><strong>Peso:</strong> ${peso} kg</p>

            <p><strong>IMC:</strong> ${imcRedondeado}</p>

            <h3>Resultado: ${resultado}</h3>

            <p>${mensaje}</p>
        `;

    });

});
