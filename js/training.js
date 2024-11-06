// SE DEFINEN LAS VARIABLES DE JS
let esDeportista;
let usuario;
let datosUsuario;
let rutinaElegida;


// SE DEFINEN LAS CLASES DEL SIMULADOR: GENERADOR DE RUTINAS
// SE DEFINEN LAS CLASES DEL SIMULADOR: GENERADOR DE RUTINAS
// SE DEFINEN LAS CLASES DEL SIMULADOR: GENERADOR DE RUTINAS


// SE DEFINEN LOS DATOS QUE SE VAN A ADQUIRIR DEL USUARIO
class Usuario {
    constructor(nombre, edad, altura, peso, esDeportista, intensidadEntrenamiento, tipoEntrenamiento) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.altura = parseFloat(altura);
        this.peso = parseInt(peso);
        this.esDeportista = (esDeportista === "si") ? true : false;
        this.intensidadEntrenamiento = intensidadEntrenamiento;
        this.tipoEntrenamiento = tipoEntrenamiento;
    }

    calcularIndiceMasa() {
        return (this.peso / (this.altura ** 2));
    }
}

// SE DEFINE LA ESTRUCTURA DE LAS RUTINAS
class PlanillaRutina {
    constructor(usuario, jornadas) {
        this.usuario = usuario;
        this.jornadas = jornadas;
    }
}

// SE DEFINE LA ESTRUCTURA DE LAS JORNADAS
class Jornada {
    constructor(nombreJornada, tipoJornada, listaDeEjercicios) {
        this.nombreJornada = nombreJornada;
        this.tipoJornada = tipoJornada;
        this.listaDeEjercicios = listaDeEjercicios;
    }
}

// SE DEFINEN LOS EJERCICIOS
class Ejercicio {
    constructor(nombreEjercicio, cantSeries, cantRepeticiones) {
        this.nombreEjercicio = nombreEjercicio;
        this.cantSeries = cantSeries;
        this.cantRepeticiones = cantRepeticiones;
    }
}

// LISTA DE LOS EJERCICIOS QUE FORMARÁN LAS JORNADAS
// LISTA DE LOS EJERCICIOS QUE FORMARÁN LAS JORNADAS
// LISTA DE LOS EJERCICIOS QUE FORMARÁN LAS JORNADAS

let ejercicioRunning = new Ejercicio("Indoor Running", "1 sesión", "10 minutos de calentamiento y 40 minutos trote");

let ejercicioSpinning = new Ejercicio("Spinning", "1 clase", "45 minutos");

let ejercicioFuncional = new Ejercicio("Funcional", "1 clase", "1 hora");


let ejercicio1 = new Ejercicio("Jumping Jack", "3 series", "40");

let ejercicio2 = new Ejercicio("Burpees", "3 series", "10");

let ejercicio3 = new Ejercicio("Mountain Climber", "3 series", "30");

let ejercicio4 = new Ejercicio("Salto con rodillas al pecho", "3 series", "40");

let ejercicio5 = new Ejercicio("Talón al Gluteo", "3 series", "40");

let ejercicio6 = new Ejercicio("Bicho Bolita", "3 series", "15");


let ejercicio7 = new Ejercicio("Plancha", "3 series", "45 seg.");

let ejercicio8 = new Ejercicio("Planchas Laterales", "3 series", "30 seg. de cada lado");

let ejercicio9 = new Ejercicio("Abdominales con ruedita", "3 series", "5");

let ejercicio10 = new Ejercicio("Sit Up", "3 series", "20");

let ejercicio11 = new Ejercicio("Biceps Concentrado", "3 series", "10");

let ejercicio12 = new Ejercicio("Press Francés", "3 series", "15");


let ejercicio13 = new Ejercicio("Sentadillas", "3 series", "15");

let ejercicio14 = new Ejercicio("Aductores en máquina", "3 series", "10");

let ejercicio15 = new Ejercicio("Piernas en Prensa a 45º", "3 series", "15");

let ejercicio16 = new Ejercicio("Gemelos en Prensa a 45º", "3 series", "20");

let ejercicio17 = new Ejercicio("Abdominales en Banco Inclinado c/peso", "3 series", "10");

let ejercicio18 = new Ejercicio("Abdominales en Maquina de Suspensión", "3 series", "10");



// LISTA DE LAS JORNADAS QUE FORMARÁN LAS RUTINAS
// LISTA DE LAS JORNADAS QUE FORMARÁN LAS RUTINAS
// LISTA DE LAS JORNADAS QUE FORMARÁN LAS RUTINAS

// Jornadas Generales Cardio (Running, Spinning, Musculación)
let listaEjerGeneral1 = [ejercicioRunning];
let jornada1 = new Jornada("Running", "Cardio", listaEjerGeneral1);

let listaEjerGeneral2 = [ejercicioSpinning];
let jornada2 = new Jornada("Spinning", "Cardio", listaEjerGeneral2);

let listaEjerGeneral3 = [ejercicioFuncional];
let jornada3 = new Jornada("Funcional", "Cardio", listaEjerGeneral3);

// Jornadas para Bajar de Peso
let listaBajar1 = [ejercicio1, ejercicio2, ejercicio3];
let jornada4 = new Jornada("Integral", "Musculación/Tonificación", listaBajar1);

let listaBajar2 = [ejercicio4, ejercicio5, ejercicio6];
let jornada5 = new Jornada("Integral", "Musculación/Tonificación", listaBajar2);

// Jornadas para Tonificar/Definir
let listaDefinir1 = [ejercicio7, ejercicio8, ejercicio9];
let jornada6 = new Jornada("Integral", "Musculación/Tonificación", listaDefinir1);

let listaDefinir2 = [ejercicio10, ejercicio11, ejercicio12];
let jornada7 = new Jornada("Integral", "Musculación/Tonificación", listaDefinir2);

// Jornadas para Muscular
let listaMuscular1 = [ejercicio13, ejercicio14, ejercicio15];
let jornada8 = new Jornada("Integral", "Musculación/Tonificación", listaMuscular1);

let listaMuscular2 = [ejercicio16, ejercicio17, ejercicio18];
let jornada9 = new Jornada("Integral", "Musculación/Tonificación", listaMuscular2);


// SE DEFINEN LAS RUTINAS POR DÍAS
// SE DEFINEN LAS RUTINAS POR DÍAS
// SE DEFINEN LAS RUTINAS POR DÍAS

// LISTA RUTINAS 2 DÍAS SEMANALES (INTENSIDAD BAJA)

// Lista de Rutinas para 2 días a la semana para BAJAR DE PESO
let rutina1 = new PlanillaRutina(usuario, [jornada1, jornada2]);
// Lista de Rutinas para 2 días a la semana para DEFINIR/TONIFICAR
let rutina2 = new PlanillaRutina(usuario, [jornada6, jornada7]);
// Lista de Rutinas para 2 días a la semana para MUSCULAR
let rutina3 = new PlanillaRutina(usuario, [jornada8, jornada9]);


// LISTA RUTINAS 4 DÍAS SEMANALES (INTENSIDAD MODERADA)

// Lista de Rutinas para 4 días a la semana para BAJAR DE PESO
let rutina4 = new PlanillaRutina(usuario, [jornada2, jornada4, jornada3, jornada5]);
// Lista de Rutinas para 4 días a la semana para DEFINIR/TONIFICAR
let rutina5 = new PlanillaRutina(usuario, [jornada3, jornada6, jornada3, jornada7]);
// Lista de Rutinas para 4 días a la semana para MUSCULAR
let rutina6 = new PlanillaRutina(usuario, [jornada3, jornada8, jornada3, jornada9]);


// LISTA RUTINAS 6 DÍAS SEMANALES (INTENSIDAD ALTA)

// Lista de Rutinas para 6 días a la semana para BAJAR DE PESO
let rutina7 = new PlanillaRutina(usuario, [jornada1, jornada4, jornada2, jornada5, jornada1, jornada3]);
// Lista de Rutinas para 6 días a la semana para DEFINIR/TONIFICAR
let rutina8 = new PlanillaRutina(usuario, [jornada3, jornada6, jornada2, jornada3, jornada7, jornada3]);
// Lista de Rutinas para 6 días a la semana para MUSCULAR
let rutina9 = new PlanillaRutina(usuario, [jornada2, jornada8, jornada9, jornada1, jornada8, jornada9]);


// SE DEFINEN LAS FUNCIONES DEL SIMULADOR
// SE DEFINEN LAS FUNCIONES DEL SIMULADOR
// SE DEFINEN LAS FUNCIONES DEL SIMULADOR

// CÁLCULO IMC PARA QUIEN NO ES DEPORTISTA
function mostrarResultadoIMC(resultadoIMC) {
    if (resultadoIMC < 18.5) {
        return "Tu IMC es: " + resultadoIMC + "<br>Te encontrás dentro del rango de peso insuficiente; visitá a tu médico o nutricionista.";
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
        return "Tu IMC es: " + resultadoIMC + "<br>Te encontrás en el rango de peso saludable; te recomendamos una rutina de mantenimiento de al menos 2 días a la semana.";
    } else {
        return "Tu IMC es: " + resultadoIMC + "<br>Te encontrás dentro del rango de sobrepeso, te recomendamos consultar con un médico y realizar una rutina de al menos 5 días a la semana.";
    }
}

// IMPRIMIR RUTINA
function imprimirRutina() {

    const rutinaImpresa = document.createElement("article");

    const divRutina = document.createElement("div");



    const contenido = {
        titulo: "Esta es tu rutina generada en Fitnes|Vega",
        texto: "Usuario: " + usuario.nombre + " <br>" + "Edad: " + usuario.edad + " años" + "<br>" + "Altura: " + usuario.altura + " metros" + "<br>" + "Peso: " + usuario.peso + " kilos" + "<br>" + "Intensidad de Entrenamiento: " + usuario.intensidadEntrenamiento + "<br>" + "Objetivo de entrenamiento: " + usuario.tipoEntrenamiento + "<br>" + "deportista: " + ((usuario.esDeportista) ? "Si" : "No") + "<br>" + ((!usuario.esDeportista) ? mostrarResultadoIMC(usuario.calcularIndiceMasa()) : "") + "<br><br>" + "Cada jornada es un día de entrenamiento y estará compuesta por uno o más ejercicios." + "<br>",
    };

    rutinaImpresa.innerHTML = `
                    <div>
                    <h3 class= "text-center" style="color: #000000)">${contenido.titulo}</h3>
                    <p style="text-align: left">${contenido.texto}</p>
                    </div>
                `;

    rutinaElegida.jornadas.forEach(element => {
        const divJornada = document.createElement("div");
        divJornada.innerHTML = `
                                <div>
                                <p>__________________________</p>
                                <h6>Nombre de la Jornada: ${element.nombreJornada}</h6>
                                <p>En este tipo de jornada se trabaja: ${element.tipoJornada}</p>
                                </div>
                                `;
        divRutina.appendChild(divJornada);


        element.listaDeEjercicios.forEach(element => {
            const divEjercicio = document.createElement("div");
            divEjercicio.innerHTML = `
                                    <div style="text-align: left">
                                    <h6>Nombre del ejercicio: ${element.nombreEjercicio}</h6>
                                    <p>Cantidad de Series o duración: ${element.cantSeries}</p>
                                    <p>Cantidad de Repeticiones o duración: ${element.cantRepeticiones}</p>
                                    </div>
                                    `;
            divRutina.appendChild(divEjercicio);


        });

        mostrarResultadoIMC();
        modalConRutinaElegida.appendChild(rutinaImpresa);
        modalConRutinaElegida.appendChild(divRutina);
        
    })
}
// FUNCIÓN QUE LE DEVOLVERÁ AL USUARIO LA RUTINA CREADA POR EL SIMULADOR
function obtenerRutina(intensidadEntrenamiento, tipoEntrenamiento) {

    if (intensidadEntrenamiento === "Baja" && tipoEntrenamiento === "Bajar de Peso") {
        return rutina1;
    } else if (intensidadEntrenamiento === "Baja" && tipoEntrenamiento === "Tonificar/Definir") {
        return rutina2;
    } else if (intensidadEntrenamiento === "Baja" && tipoEntrenamiento === "Muscularse") {
        return rutina3;
    } else if (intensidadEntrenamiento === "Moderada" && tipoEntrenamiento === "Bajar de Peso") {
        return rutina4;
    } else if (intensidadEntrenamiento === "Moderada" && tipoEntrenamiento === "Tonificar/Definir") {
        return rutina5;
    } else if (intensidadEntrenamiento === "Moderada" && tipoEntrenamiento === "Muscularse") {
        return rutina6;
    } else if (intensidadEntrenamiento === "Intensa" && tipoEntrenamiento === "Bajar de Peso") {
        return rutina7;
    } else if (intensidadEntrenamiento === "Intensa" && tipoEntrenamiento === "Tonificar/Definir") {
        return rutina8;
    } else if (intensidadEntrenamiento === "Intensa" && tipoEntrenamiento === "Muscularse") {
        return rutina9;
    }
}

// HTML de la página de Training a partir de JS (DOM)

const contenedorrutinasTraining = document.getElementById("rutinasTraining");
const generadorRutinas = document.createElement("article");

// titulo ingresado por js

const contenidoSuperior = {
    titulo: "Generador de Rutinas",
    texto: "Complete el formulario y genere una rutina personalizada de acuerdo a sus necesidades"
};

generadorRutinas.innerHTML = `
                    <div class= "text-center">
                    <h1>${contenidoSuperior.titulo}</h1>
                    <p class="m-1">${contenidoSuperior.texto}</p>
                    </div>
                `;

contenedorrutinasTraining.appendChild(generadorRutinas);

//modal con la rutina

const abrirModalDeRutina = document.getElementById("generarRutina")
const cerrarRutina = document.getElementById("cerrarRutina")
const modalContainerRutinas = document.getElementsByClassName("modalContainerRutinas")[0]
const modalConRutinaElegida = document.getElementById("rutinaElegidaImpresa");

function crearUsuario() {
    // Obtengo el usuario
    usuario = new Usuario(
        document.getElementById("nombreUsuario").value,
        document.getElementById("edadUsuario").value,
        document.getElementById("alturaUsuario").value,
        document.getElementById("pesoUsuario").value,
        document.querySelector("input[name='esDeportista']:checked").value,
        document.getElementById("intensidadEntrenamiento").value,
        document.getElementById("tipoEntrenamiento").value
    );
}

// Acá empieza la validación del formulario

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textareas = document.querySelectorAll('#formulario textarea');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    edad: /^\d{1,2}$/,
    peso: /^[0-9.]{1,4}$/,
    altura: /^[0-9.]{1,4}$/,
}

const campos = {
    nombre: false,
    edad: false,
    peso: false,
    altura: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre')
            break;
        case "edad":
            validarCampo(expresiones.edad, e.target, 'edad')
            break;
        case "peso":
            validarCampo(expresiones.peso, e.target, 'peso')
            break;
        case "altura":
            validarCampo(expresiones.altura, e.target, 'altura')
            break;
    }
}

// Validación del formulario con iconos
const validarCampo = (expresion, input, campo, ) => {
    if (expresion.test(input.value)) { //comprueba la expresion regular de usuario en el campo de usuario.
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;

    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); //hace la comprobación cada vez que levanta la tecla.
    input.addEventListener('blur', validarFormulario); //hace la comprobación cuando sale del campo.
});

textareas.forEach((textarea) => {
    textarea.addEventListener('keyup', validarFormulario); //hace la comprobación cada vez que levanta la tecla.
    textarea.addEventListener('blur', validarFormulario); //hace la comprobación cuando sale del campo.
});


// Generar la rutina
document.getElementById("generarRutina").addEventListener("click", (e) =>{
    e.preventDefault();
    crearUsuario();

    if ((campos.nombre && campos.edad && campos.altura && campos.peso)){
        formulario.reset();

        //Devolución al usuario de rutina elegida de acuerdo a objetivo e intensidad y guardado de datos en storage
        rutinaElegida = obtenerRutina(usuario.intensidadEntrenamiento, usuario.tipoEntrenamiento);
        localStorage.setItem("rutinaElegida", JSON.stringify(rutinaElegida));
        localStorage.setItem("usuario", JSON.stringify(usuario));
        imprimirRutina();
        modalContainerRutinas.classList.toggle("modalRutinasActive")
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 5000);
    }
});

// Cerrar rutina y resetear el false de los campos para pedir validación nuevamente

cerrarRutina.addEventListener("click", () => {
    modalContainerRutinas.classList.toggle("modalRutinasActive")
    formulario.reset();
    campos.nombre = false;
    campos.edad = false;
    campos.altura = false;
    campos.peso = false;
})

// Recuperación de la rutina si el usuario ya la había pedido con el botón de reload

const recuperarRutina = document.getElementById("recuperarRutina");

recuperarRutina.addEventListener("click", (e) => {
    e.preventDefault();
    const usuarioRecuperado = JSON.parse(localStorage.getItem("usuario"));
    usuario = new Usuario(usuarioRecuperado.nombre, usuarioRecuperado.edad, usuarioRecuperado.altura, usuarioRecuperado.peso, ((usuarioRecuperado.esDeportista) ? "si" : "no"), usuarioRecuperado.intensidadEntrenamiento, usuarioRecuperado.tipoEntrenamiento);

    rutinaElegida = JSON.parse(localStorage.getItem("rutinaElegida"));
    imprimirRutina();
    modalContainerRutinas.classList.toggle("modalRutinasActive")

})
// Si no hay rutina guardada no aparece el boton de reload
if (localStorage.getItem("rutinaElegida") == null || localStorage.getItem("usuario") == null) {
    document.getElementById("recuperarRutina").style.display = "none";
}

//Agrego un botón para info IMC con jQuery
$("#infoIMC").append('<button id="btnIMC" class="btnGym" style="margin-bottom: 1rem">Haga clic para ver la Informacion Importante🛑</button>');

const btnInfoIMC = $("#btnIMC");

$("#infoIMC").append(`<div id="div1" class="m-2">
                    <h6 id="titIMC"></h6>
                    <p class="m-1" id="pIMC"></p>
                    </div>`);

btnInfoIMC.click(() => {
            const titIMC = "La siguiente información calcula además el Índice de Masa Corporal (IMC)"
            const pIMC = "Si usted es deportista, no le arrojará un resultado del mismo, ya que no aplica"
            const titIMCSelector = $("#titIMC")
            const pIMCSelector = $("#pIMC")
            titIMCSelector.text(titIMC)
            pIMCSelector.text(pIMC)
});
