/*function cargarM() {
    muertesDia=new Array(7);
    suma=0;
    cadena='';
    for(let i=0;i<muertesDia.length;i++){
        let valor=parseInt(prompt("Captura numero muertes"));
        muertesDia[i]=parseInt(valor);
        suma+=valor;
        console.log(muertesDia[i]);
    }

    for(let indice in muertesDia){
        cadena+='<div style="background-color:blue; color:white; width:20%; text-align:center;border:black 2px solid;">Valor: '+muertesDia[indice]+'</div>';
    }
    let promedio=suma/7;
    
    let minimo=Math.min(...muertesDia);
    let maximo=Math.max(...muertesDia);

    document.getElementById("impMuertes").innerHTML=cadena;
    document.getElementById("impR").innerHTML="Promedio: "+promedio+ "<br>Minimo: "+minimo+"<br>Maximo: "+maximo;

}*/

function ponerE(){
    let letraE=[
        ['<div>X</div>','<div>X</div>','<div>X</div>','<div>X</div>'],
        ['<div>X</div>','<div style="color:white;">X</div>','<div style="color:white">X</div>','<div style="color:white">X</div>'],
        ['<div>X</div>','<div>X</div>','<div>X</div>','<div>X</div>'],
        ['<div>X</div>','<div style="color:white">X</div>','<div style="color:white">X</div>','<div style="color:white">X</div>'],
        ['<div>X</div>','<div>X</div>','<div>X</div>','<div>X</div>']
    ];

    cadenaE='';
    
    for (let i = 0; i < letraE.length; i++) {
        cadenaE+='<div style="display:flex";>';
        for(let j=0; j < letraE[i].length; j++ ){
            cadenaE+=letraE[i][j];
        }
        cadenaE += '</div>';
    }

    document.getElementById("impE").innerHTML=cadenaE;
}
ponerE();




    

