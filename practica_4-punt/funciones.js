var reserva = {
    rfc: '',
    cliente: '',
    adultos: 0,
    ninos: 0,
    edadesNinos: [],
    habitacionesAgregadas: [],
    subTotal: 0,
    capacidadTotalHabitaciones: 0,
    personasExcedentes: 0,
    costoExtra: 0,
    totalPagar: 0,
    
    calcularTotales: function() {
        this.subTotal = 0;
        this.capacidadTotalHabitaciones = 0;

        
        for (let i = 0; i < this.habitacionesAgregadas.length; i++) {
            this.subTotal += this.habitacionesAgregadas[i].precio;
            this.capacidadTotalHabitaciones += this.habitacionesAgregadas[i].capacidad;
        }

        
        let ninosMenores12 = 0;
        let adultosAdicionales = 0;

        for (let i = 0; i < this.edadesNinos.length; i++) {
            if (this.edadesNinos[i] < 12) {
                ninosMenores12++;
            } else {
                adultosAdicionales++;
            }
        }

        this.ninosValidos = ninosMenores12;
        this.adultosTotalesCalculados = this.adultos + adultosAdicionales;
        
        this.numeroHuespedesTotal = this.adultosTotalesCalculados + this.ninosValidos;

        
        if (this.numeroHuespedesTotal > this.capacidadTotalHabitaciones) {
            this.personasExcedentes = this.numeroHuespedesTotal - this.capacidadTotalHabitaciones;
            this.costoExtra = this.personasExcedentes * 500;
        } else {
            this.personasExcedentes = 0;
            this.costoExtra = 0;
        }

        this.totalPagar = this.subTotal + this.costoExtra;
    }
};

function generarEdades() {
    var cantidadNinos = parseInt(document.getElementById("ninos").value);
    var contenedor = document.getElementById("contenedorEdades");
    contenedor.innerHTML = '';

    reserva.edadesNinos = [];

    for (let i = 0; i < cantidadNinos; i++) {
        var label = document.createElement("label");
        label.innerText = "Edad del niño"+(i+1)+": ";

        var input = document.createElement("input");
        input.id="edadNino"+i;

        var salto = document.createElement("br");

        contenedor.appendChild(label);
        contenedor.appendChild(input);
        contenedor.appendChild(salto);
    }
}


function agregarHabitacion() {
    var tipoSelect = document.getElementById("tipoHab").value;
    var precioHab = 0;
    var capacidadHab = 0;
    var descripcionHab = "";

    if (tipoSelect == "Sencilla") {
        precioHab = 1200;
        capacidadHab = 2;
        descripcionHab = "2 camas individuales";
    } else if (tipoSelect == "Doble") {
        precioHab = 1700;
        capacidadHab = 3;
        descripcionHab = "1 matrimonial, 1 individual";
    } else if (tipoSelect == "Familiar") {
        precioHab = 2500;
        capacidadHab = 4;
        descripcionHab = "2 matrimoniales";
    } else if (tipoSelect == "Suite") {
        precioHab = 2800;
        capacidadHab = 5;
        descripcionHab = "2 matrimoniales, 1 individual";
    }

    reserva.habitacionesAgregadas.push({
        nombre: tipoSelect,
        precio: precioHab,
        capacidad: capacidadHab,
        detalle: descripcionHab
    });

    actualizarListaHabitaciones();
}


function actualizarListaHabitaciones() {
    var lista = document.getElementById("listaHabitaciones");
    lista.innerHTML = '';

    for (let i = 0; i < reserva.habitacionesAgregadas.length; i++) {
        var hab = reserva.habitacionesAgregadas[i];

        var li = document.createElement("li");
        li.innerText =hab.nombre+ " ("+hab.detalle+") $" + hab.precio;
        lista.appendChild(li);
    }
}




function procesarEnviar() {
    reserva.cliente = document.getElementById("cliente").value;
    reserva.rfc = document.getElementById("rfc").value;
    reserva.adultos = parseInt(document.getElementById("adultos").value);
    reserva.ninos = parseInt(document.getElementById("ninos").value);


    reserva.edadesNinos = [];

    for (let i = 0; i<reserva.ninos; i++) {
        var inputEdad=document.getElementById("edadNino"+i);

        if (inputEdad) {
            reserva.edadesNinos.push(parseInt(inputEdad.value));
        }
    }


    reserva.calcularTotales();

    localStorage.setItem("datosReservaHotel", JSON.stringify(reserva));
    console.log(JSON.stringify(reserva));

    window.open("ticket.html", "_blank");
}
