function calcularTotal() {
    let puesto = document.getElementById("puesto").value;
    let nivel = document.getElementById("nivel").value;
    let horas = parseInt(document.getElementById("horas").value);

    sueldos=new Array(3);
    for (let i = 0; i <=2; i++) {
        sueldos[i]=new Array(3);
    }

    sueldos[0][0]=120;
    sueldos[0][1]=180;
    sueldos[0][2]=280;
    sueldos[1][0]=120;
    sueldos[1][1]=280;
    sueldos[1][2]=340;
    sueldos[2][0]=240;
    sueldos[2][1]=520;
    sueldos[2][2]=890;

    let pagoPorHora = sueldos[parseInt(puesto)][parseInt(nivel)];
    let total = pagoPorHora * horas;
 
    document.getElementById("total").value = "$" + total;
}