let ac = document.getElementById('ac');
let nasMenos = document.getElementById('masMenos');
let porciento = document.getElementById('porciento');
let division = document.getElementById('division');
let por = document.getElementById('por');
let siete = document.getElementById('siete');
let ocho = document.getElementById('ocho');
let nueve = document.getElementById('nueve');
let menos = document.getElementById('menos');
let cuatro = document.getElementById('cuatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');
let mas = document.getElementById('mas');
let cero = document.getElementById('cero');
let punto = document.getElementById('punto');
let igual = document.getElementById('igual');
let contenedor = document.getElementById("mostrar");

let num1 = 0;
let num2 = 0;
let operacion = null;
/**
 * EVENTOS
 */
let actualizarPantalla = () => {
    contenedor.innerHTML = operacion ? num2 : num1;
};

let calcular = () => {
    if (operacion == null) {
        return;
    }

    switch (operacion) {
        case "+":
            num1 = num1 + num2;
            break;
        case "-":
            num1 = num1 - num2;
            break;
        case "*":
            num1 = num1 * num2;
            break;
        case "/":
            num1 = num1 / num2;
            break;
        case "%":
            num1 = num1 / 100;
            break;

        default:
            break;
    }

    operacion = null;
    num2 = 0;
    actualizarPantalla();
};

let insertarNumero = numero => {
    if (operacion) {
        num2 = (num2 * 10) + numero;
    } else {
        num1 = (num1 * 10) + numero;
    }
    actualizarPantalla();
};

let agregarOperador = operador => {
    if (operacion) {
        calcular();
    }

    operacion = operador;

    actualizarPantalla();
};


ac.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    operacion = null;
    actualizarPantalla();
});

cero.addEventListener('click', () => {
    insertarNumero(0);
});
uno.addEventListener('click', () => {
    insertarNumero(1);
});
dos.addEventListener('click', () => {
    insertarNumero(2);
});
tres.addEventListener('click', () => {
    insertarNumero(3);
});
cuatro.addEventListener('click', () => {
    insertarNumero(4);
});
cinco.addEventListener('click', () => {
    insertarNumero(5);
});
seis.addEventListener('click', () => {
    insertarNumero(6);
});
siete.addEventListener('click', () => {
    insertarNumero(7);
});
ocho.addEventListener('click', () => {
    insertarNumero(8);
});
nueve.addEventListener('click', () => {
    insertarNumero(9);
});



punto.addEventListener('click', () => {
    insertarNumero(".");
});

/* */
mas.addEventListener('click', () => {
    agregarOperador('+');
});
menos.addEventListener('click', () => {
    agregarOperador('-');
})
por.addEventListener('click', () => {
    agregarOperador('*');
})
division.addEventListener('click', () => {
    agregarOperador('/');
})
porciento.addEventListener('click', () => {
    agregarOperador('%');
})
igual.addEventListener('click', () => {
    calcular();
});

masMenos.addEventListener('click', () => {
    if (operacion) {
        num2 *= -1;
    } else {
        num1 *= -1;
    }
    actualizarPantalla();
})

actualizarPantalla();