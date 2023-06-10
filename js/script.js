/**
 * Titulo:juego la esaclera y serpientes
 * Autor: Jesus Fernando Carvajal Anacona
 * Fecha: 12 de septiembre de 2022 
 */


alert("Bienvenidos")

//jugadores
var Jugador1= 0;
var Jugador2= 0;
var Jugador3= 0;
var Jugador4= 0;

function dado(){
    // musica 
    
    
    //Dado
    var numeroRandom= Math.floor(Math.random()*6)+1;
    var fuente= "img/dado-" + numeroRandom+"."+ "png";
    document.getElementById('cara-1').setAttribute('src', fuente);

    // suma del numero del dado
    Jugador1+=numeroRandom;
    var puestoJugador1= Jugador1-numeroRandom;
    var retroseder= 0; 

    // para mover ficha
    
    document.getElementById('casilla-'+Jugador1).innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
    document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 

    //Condiciones de subida y bajada de las fichas 
    if (Jugador1 == 6){
        Jugador1= 50;
        document.getElementById('casilla-50').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=6;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 50;
        alert("sube a la casilla 50")
        audioSubida.play();
        
    }

    else if(Jugador1==31){
        Jugador1=7;
        document.getElementById('casilla-7').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=31;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 7;
        alert("bajo al 7 xd")
    }

    else if(Jugador1==43){
        Jugador1=18;
        document.getElementById('casilla-18').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=43;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 18;
        alert("bajo  al 18:(")
    }

   

    else if(Jugador1==46){
        Jugador1=64;
        document.getElementById('casilla-64').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=46;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 64;
        alert("Subio al 64:)");
    }

    else if(Jugador1==84){
        Jugador1=41;
        document.getElementById('casilla-41').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=84;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 41;
        alert("Bajo al 41:)");
    }

    else if(Jugador1==66){
        Jugador1=36;
        document.getElementById('casilla-36').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=66;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 36;
        alert("Bajo al 36:)");
    }

    else if (Jugador1==71){
        Jugador1=93;
        document.getElementById('casilla-93').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=71;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 93;
        alert("Subio al 93:)");
    }

    else if (Jugador1==99){
        Jugador1=1;
        document.getElementById('casilla-1').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=99;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 1;
        alert("Pailas Bajo al uno");
    }

    else if (Jugador1==80){
        Jugador1=1;
        document.getElementById('casilla-1').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=80;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 1;
        alert("Pailas Bajo al uno");
    }

    else if (Jugador1==48){
        Jugador1=1;
        document.getElementById('casilla-1').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=48;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 1;
        alert("Pailas Bajo al uno");
    }

    else if(Jugador1==3){
        Jugador1=13;
        document.getElementById('casilla-13').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=3;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 13;
        alert("Wuaa avanzas diez");
    }

    else if(Jugador1==22){
        Jugador1=27;
        document.getElementById('casilla-27').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=22;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 27;
        alert("Wuaa avanzas cinco");
    }

    else if(Jugador1==62){
        Jugador1=67;
        document.getElementById('casilla-67').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=62;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 67;
        alert("Wuaa avanzas cinco");
    }

    else if(Jugador1==77){
        Jugador1=82;
        document.getElementById('casilla-82').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=77;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 82;
        alert("Wuaa avanzas cinco");
    }

    
    else if(Jugador1==30){
        Jugador1=20;
        document.getElementById('casilla-20').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=30;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 20;
        alert("NOO, retrocesdes 10");
    }

    else if(Jugador1==20){
        Jugador1=40;
        document.getElementById('casilla-40').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=20;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 40;
        alert("Subio  al 40:)");
    }

    else if(Jugador1==68){
        Jugador1=58;
        document.getElementById('casilla-58').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=68;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 58;
        alert("NOO, retrocesdes 10");
    }

    else if(Jugador1==70){
        Jugador1=65;
        document.getElementById('casilla-65').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=70;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 65;
        alert("NOO, retrocesdes 5");
    }


    else if(Jugador1==92){
        Jugador1=87;
        document.getElementById('casilla-87').innerHTML="<img src='img/ficha1.png' alt='Ficha1' class='ficha1'>";
        puestoJugador1=92;
        document.getElementById('casilla-'+puestoJugador1).innerHTML= puestoJugador1; 
        Jugador1= 87;
        alert("NOO, retrocesdes 5");
    }



    else if(Jugador1>100){
        Jugador1= puestoJugador1;

    }

    else if (Jugador1== 100){
        alert("has ganado")
        window.location.href = window.location.href;  
    }

}

const musica= new Audio;
musica.src="music/gazing-at-the-stars-116104.mp3";
