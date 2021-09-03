function pasres(max) {
    var num = 2;
    for (var i = 1; i <= max; i++) {
        var b = num * i;
        console.log(b);
    }
}

pares (12);
pares (3);
pares (100);


/*
function pares (max)  {
    var num = 2;
    for (var i = 1; i <= max; i++) {
        var b = num * i;

        console.log(b);
    }
}


/**
 * problema, crear un metodo que reciba nombre, edad y verifique si
 * puede solicitar permiso para conducir
 */

function permiso(edad, nombre) {
    if("edad >= 18"){
        alert (nombre + "ya puedes solicitar tu permiso"+ "" + edad)
    }else {
        alert (nombre + "no puedes solicitar tu permiso"+ "" + edad)

    }
}

permiso(15, "kikis")
permiso(36, "Roberto")