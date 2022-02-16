// Se piden los datos de entrada de las veces que desea jugar
var jugadas = prompt("Cuántas veces desea jugar");
// Se realiza la conversión de valor texto a valor número
jugadas = parseInt(jugadas);
// Se agrega contador de rondas para que el usuario sepa en qué jugada va
var contador = 1;

// Se realiza el proceso dependiendo de las veces que el usuario haya decidido jugar (while, mientras que algo suceda), en este caso, las veces a jugar
while (jugadas > 0) {
    const jugadorMaquina = Math.floor(Math.random() * 3);
    var jugadorHumano = prompt("Ingrese su opción", "Por ejemplo: Piedra");
    // Tijera 0 | Piedra 1 | Papel 2
    // Si ingresa Tijera, hay que darle un valor número 0
    // Si ingresa Piedra, hay que darle un valor número 1
    // Si ingresa Papel, hay que dar un valor número 2
    if (jugadorHumano === "Tijera") {
        opcionU = 0;
    }
    else if (jugadorHumano === "Piedra") {
        opcionU = 1;
    }
    else if (jugadorHumano === "Papel") {
        opcionU = 2;
    }
        // Se realiza la comparación entre jugador humano y jugador máquina
        if ((opcionU === 0) && (jugadorMaquina === 0)) {
            alert(`RONDA N°${contador} \n¡Empate :O! Debido a que hiciste ${jugadorHumano} y el computador también hizo Tijera.`);
        }
        else if ((opcionU === 1) && (jugadorMaquina === 1)) {
            alert(`RONDA N°${contador} \n¡Empate :O! Debido a que hiciste ${jugadorHumano} y el computador también hizo Piedra`);
        }
        else if ((opcionU === 2) && (jugadorMaquina === 2)) {
            alert(`RONDA N°${contador} \n¡Empate :O! Debido a que hiciste ${jugadorHumano} y el computador también hizo Papel`);
        }
        else if ((opcionU === 0) && (jugadorMaquina === 1)) {
            alert(`RONDA N°${contador} \n¡Perdiste :(! Debido a que hiciste ${jugadorHumano} y el computador hizo Piedra`);
        }
        else if ((opcionU === 1) && (jugadorMaquina === 2)) {
            alert(`RONDA N°${contador} \n¡Perdiste :(! Debido a que hiciste ${jugadorHumano} y el computador hizo Papel`);
        }
        else if ((opcionU === 2) && (jugadorMaquina === 0)) {
            alert(`RONDA N°${contador} \n¡Perdiste :(! Debido a que hiciste ${jugadorHumano} y el computador hizo Tijera`);
        }
        else if ((opcionU === 1) && (jugadorMaquina === 0)) {
            alert(`RONDA N°${contador} \n¡Ganaste :)! Debido a que hiciste ${jugadorHumano} y el computador hizo Tijera`);
        }
        else if ((opcionU === 2) && (jugadorMaquina === 1)) {
            alert(`RONDA N°${contador} \n¡Ganaste :)! Debido a que hiciste ${jugadorHumano} y el computador hizo Piedra`);
        }
        else if ((opcionU === 0) && (jugadorMaquina === 2)) {
            alert(`RONDA N°${contador} \n¡Ganaste :)! Debido a que hiciste ${jugadorHumano} y el computador hizo Papel`);
        }
    jugadas--
    contador++
}