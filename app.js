var text = document.getElementById('app').textContent;
alert(text)

document.addEventListener("DOMContentLoaded", function() {
    const appDiv = document.getElementById("app");

    // Démarrer l'animation après 2 secondes
    setTimeout(function() {
        appDiv.style.animationPlayState = 'running';
    }, 2000);

    // Pour arrêter l'animation, utilisez :
    // appDiv.style.animationPlayState = 'paused';
});