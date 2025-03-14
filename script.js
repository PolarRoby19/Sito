document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('song');
    const playButton = document.getElementById('playButton');
    const stopButton = document.getElementById('Stopbutton');
    const volumeControl = document.getElementById('volumeControl');

    playButton.addEventListener('click', () => {
        audioPlayer.play();
    });

    stopButton.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });
    
    volumeControl.addEventListener('input', () => {
        audioPlayer.volume = volumeControl.value;
    });
});

function cambiaPagina(url) {
    window.open(url, "_self");
}

const bottone = document.getElementById('mioBottone');

bottone.addEventListener('mouseover', () => {
    bottone.classList.add('illuminato');
});

bottone.addEventListener('mouseout', () => {
    bottone.classList.remove('illuminato');
});
