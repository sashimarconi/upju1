// Simula contador de espectadores aumentando
let viewers = 14934;
setInterval(() => {
    viewers += Math.floor(Math.random() * 10) + 1;
    document.getElementById("viewerCount").textContent = viewers.toLocaleString();
}, 2000);

// Temporizador da live (5 minutos)
let timeLeft = 720
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        document.getElementById("timer").textContent = "🔥 Live encerrada!";
        document.getElementById("unlockButton").disabled = true;
    }
}
updateTimer();

