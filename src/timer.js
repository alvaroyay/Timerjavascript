let inputs, clock, hours, minutes, seconds, repeater;

window.addEventListener('load', () => {
    inputs = Array.from(document.getElementsByClassName('number')); // Obtiene los inputs
    clock = document.querySelector('.clock'); // Obtiene el contenedor del reloj
});

function startTimer() {
    parseTime(); // Obtiene los valores de los inputs
    setTimer();  // Actualiza el timer visualmente
    countdown(); // Inicia el contador
}

function setTimer() {
    // Actualiza los valores de los inputs
    inputs[0].value = hours > 9 ? hours : '0' + hours;
    inputs[1].value = minutes > 9 ? minutes : '0' + minutes;
    inputs[2].value = seconds > 9 ? seconds : '0' + seconds;

    // Actualiza el título de la pestaña
    document.title = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
}

function parseTime() {
    // Convierte los valores de los inputs a números
    hours = Number(inputs[0].value);
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);
}

function countdown() {
    repeater = setInterval(runner, 1000); // Inicia el contador
}

function runner() {
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            if (hours > 0) {
                seconds = 59;
                minutes = 59;
                hours--;
            } else {
                clearInterval(repeater); // Detiene el contador
                alert("Time's up!"); // Muestra una alerta cuando el tiempo termina
            }
        }
    }
    setTimer(); // Actualiza el timer visualmente
}

function stopTimer() {
    clearInterval(repeater); // Detiene el contador
    location.reload(); // Recarga la página
}