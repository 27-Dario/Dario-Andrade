agenda = new Array(7);
    for (let i = 0; i <= 6; i++) {
        agenda[i] = new Array(3);
        
        agenda[i][0] = " "; // Hora
        agenda[i][1] = " "; // Evento
        agenda[i][2] = " "; // Descripcion
    }

function guardarAgenda() {

    let dias = parseInt(document.getElementById("dia").value); 
    let hora = document.getElementById("hora").value;
    let evento = document.getElementById("evento").value;
    let descripcion = document.getElementById("desc").value;

    agenda[dias][0] = hora;
    agenda[dias][1] = evento;
    agenda[dias][2] = descripcion;

    for (let i = 0; i < agenda.length; i++) {
        document.getElementById("hora_"+i).innerHTML = agenda[i][0];
        document.getElementById("evento_"+i).innerHTML = agenda[i][1];
        document.getElementById("desc_"+i).innerHTML = agenda[i][2];
    }
}