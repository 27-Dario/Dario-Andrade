window.onload = function() {
    var datosGuardados = localStorage.getItem("datosReservaHotel");
    if (datosGuardados){
        var reservaRecuperada = JSON.parse(datosGuardados);

        document.getElementById("salidaCliente").innerText = reservaRecuperada.cliente;
        document.getElementById("salidaRfc").innerText = reservaRecuperada.rfc;
        document.getElementById("salidaPersonas").innerText = reservaRecuperada.adultosTotalesCalculados +"/" +reservaRecuperada.ninosValidos;
        document.getElementById("salidaExtra").innerText = "$" + reservaRecuperada.costoExtra;
        document.getElementById("salidaTotal").innerText = "$" + reservaRecuperada.totalPagar;

        var listaHabitacionesTicket = document.getElementById("salidaListaHabitaciones");
        listaHabitacionesTicket.innerHTML = '';

        for (let i = 0; i < reservaRecuperada.habitacionesAgregadas.length; i++) {
            var hab = reservaRecuperada.habitacionesAgregadas[i];
            var li = document.createElement("li");
            li.innerText = hab.nombre +" - $" + hab.precio;
            listaHabitacionesTicket.appendChild(li);
        }
    }
    
};