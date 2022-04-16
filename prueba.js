const app = document.getElementById('content');
const select = document.getElementById('select');

select.addEventListener('change', función);

function función() {
var N = select.value;
    switch (N) {
        case "1":
        app.innerHTML = `a mi me toca la silla ${Yo.silla}, junto ${Yo.junto}
        <br> a mi me tocaria hacer ${Yo.aciones[0]} y ${Yo.aciones[1]}`;
        break;
        case "2":
        app.innerHTML = `a ${silbana.nombre} le toca la silla ${silbana.silla}, junto ${silbana.junto}
        <br> a ${silbana.nombre} le tocaria hacer ${silbana.aciones[0]} y ${silbana.aciones[1]}`;
        break;
        case "3":
        app.innerHTML = `a ${alicia.nombre} le toca la silla ${alicia.silla}, junto ${alicia.junto}
        <br> a ${alicia.nombre} le tocaria hacer ${alicia.aciones[0]} y ${alicia.aciones[1]}`;
        break;
        case "4":
        app.innerHTML = `a ${maria_isabel.nombre} le toca la silla ${maria_isabel.silla}, junto ${maria_isabel.junto}
        <br> a ${maria_isabel.nombre} le tocaria hacer ${maria_isabel.aciones[0]} y ${maria_isabel.aciones[1]}`;
        break;
        case "5":
        app.innerHTML = `a ${francisco.nombre} le toca la silla ${francisco.silla}, junto ${francisco.junto}
        <br> a ${francisco.nombre} le tocaria hacer ${francisco.aciones[0]} y ${francisco.aciones[1]}`;
        break;
        case "6":
        app.innerHTML = `a ${Federico.nombre} le toca la silla ${Federico.silla}, junto ${Federico.junto}
        <br> a ${Federico.nombre} le tocaria hacer ${Federico.aciones[0]} y ${Federico.aciones[1]}`;
        break;
        case "7":
        app.innerHTML = `a ${Juan_Diego.nombre} le toca la silla ${Juan_Diego.silla}, junto ${Juan_Diego.junto}
        <br> a ${Juan_Diego.nombre} le tocaria hacer ${Juan_Diego.aciones[0]} y ${Juan_Diego.aciones[1]}`;
        break;
        case "8":
        app.innerHTML = `a ${Juan.nombre} le toca la silla ${Juan.silla}, junto ${Juan.junto}
        <br> a ${Juan.nombre} le tocaria hacer ${Juan.aciones[0]} y ${Juan.aciones[1]}`;
        break;
        case "9":
        app.innerHTML = `a ${Jeronimo.nombre} le toca la silla ${Jeronimo.silla}, junto ${Jeronimo.junto}
        <br> a ${Jeronimo.nombre} le tocaria hacer ${Jeronimo.aciones[0]} y ${Jeronimo.aciones[1]}`;
        break;
        case "1":
        app.innerHTML = `a ${Juan_Pablo.nombre} le toca la silla ${Juan_Pablo.silla}, junto ${Juan_Pablo.junto}
        <br> a ${Juan_Pablo.nombre} le tocaria hacer ${Juan_Pablo.aciones[0]} y ${Juan_Pablo.aciones[1]}`;
        break;
        default:
        app.innerHTML = "no se encontro el valor";
        break;
    }
}


const Yo = {
    nombre: "Yo",
    silla: "1",
    aciones: ["caliz y asitente de patena"],
    junto: "a el diacono(pedro) y Silbana",
}

const silbana = {
    nombre: "Silbana",
    silla: "2",
    aciones : ["sirial", "asistente de patena general"],
    junto: "a mi(Adrián) y alicia"
};

const alicia = {
    nombre: "Alicia",
    silla: "3",
    aciones: ["vinajeras", "agua"], 
    junto: "a mi(Adrián) y silbana"
};

const maria_isabel = {
    nombre: "Maria Isabel",
    silla: "4",
    aciones: ["sirial", "asistente de patena de federico"],
    junto: "al padre y francisco",
};

const francisco = {
    nombre: "Francisco",
    silla: "5",
    aciones: ["cupon","recoger 2 patenas"],
    junto: "al padre y maria isabel"
};

const Federico = {
    nombre: "Federico",
    silla: "6",
    aciones: ["lavado", "patena"],
    junto: "a Juan Digo y Juan"
};

const Juan_Diego = {
    nombre: "Juan Diego",
    silla: "7",
    aciones: ["lavado", "patena o asitente de patena do Juan pablo (si asiste)"], 
    junto: "a Federico y Juan"
};

const Juan = { 
    nombre: "Juan Martin",
    silla: "8",
    aciones: ["lavado", "patena"],
    junto: "a Federico y Juan Diego"
};

const Jeronimo = {
    nombre: "Jeronimo",
    silla: "9",
    aciones: ["patena","recoger 2 patenas"],
    junto: "a Juan Pablo"
};

const Juan_Pablo = {
    nombre: "Juan Pablo",
    silla: "9",
    aciones: ["patena","recoger cupon"],
    junto: "a Jeronimo"
}


