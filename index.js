function horaActual(){
    /*Obtener Fecha y Hora completa*/
    let fecha = new Date();
    /*Seccionar Informacion de Hora*/
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    /*let milisegundos = fecha.getMilliseconds();*/

    /*Obtener Elementos HTML*/
    let horaReloj = document.getElementById("Hora");
    let minutoReloj = document.getElementById("Minuto");
    let segundoReloj = document.getElementById("Segundo");
    /*milesimaReloj = document.getElementById("Milisegundo");*/
    let fechaReloj = document.getElementById("Fecha");

    /*Mostrar Hora: Formato 12h */
    if(hora == 0){
        horaReloj.innerHTML = hora + 12;
    }
    else if(hora > 0 && hora < 10){
        horaReloj.innerHTML = "0" + hora;
    }
    else if(hora == 11 && hora == 12){
        horaReloj.innerHTML = hora;
    }
    else if (hora > 12){
        horaReloj.innerHTML = "0" + (hora - 12);
    }

    /*Mostrar Minutos*/
    if(minutos < 10){
        minutoReloj.innerHTML = "0" + minutos;
    }
    else{
        minutoReloj.innerHTML = minutos;
    }

    /*Mostras Segundos y asignar Tiempo horario*/
    if(segundos < 10 && hora <= 12){
        segundoReloj.innerHTML = "0" + segundos + " AM";
    }
    else if(segundos < 10 && hora > 12){
        segundoReloj.innerHTML = "0" + segundos + " PM";
    }
    else if(hora <= 12){
        segundoReloj.innerHTML = segundos + " AM";
    }
    else if(hora>12){
        segundoReloj.innerHTML = segundos + " PM";
    }

    /*milesimaReloj.innerHTML = milisegundos;*/

    /*Mostrar Fecha*/
    fechaReloj.innerHTML = fecha.toLocaleDateString();
}

setInterval(horaActual,1000);
