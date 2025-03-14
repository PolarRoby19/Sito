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
