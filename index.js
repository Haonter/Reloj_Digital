function horaActual(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let milisegundos = fecha.getMilliseconds();

    horaReloj = document.getElementById("Hora");
    minutoReloj = document.getElementById("Minuto");
    segundoReloj = document.getElementById("Segundo");
    milesimaReloj = document.getElementById("Milisegundo");

    if(hora < 10){
        horaReloj.innerHTML = "0" + hora;
    }
    else{
        horaReloj.innerHTML = hora;
    }

    if(minutos < 10){
        minutoReloj.innerHTML = "0" + minutos;
    }
    else{
        minutoReloj.innerHTML = minutos;
    }

    if(segundos < 10){
        segundoReloj.innerHTML = "0" + segundos;
    }
    else{
        segundoReloj.innerHTML = segundos;
    }

    milesimaReloj.innerHTML = milisegundos;
}

setInterval(horaActual,1000);
