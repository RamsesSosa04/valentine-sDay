document.addEventListener('DOMContentLoaded', function() {
    const siButton = document.getElementById('si');
    const noButton = document.getElementById('no');
    const mensaje = document.getElementById('mensaje');
    const container = document.querySelector('.container');

    // Función para mover el botón "No" de manera aleatoria
    noButton.addEventListener('mouseover', function() {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // Función para mostrar el mensaje cuando se hace clic en "Sí"
    siButton.addEventListener('click', function() {
        mensaje.classList.remove('hidden');
        container.style.backgroundColor = '#f8bbd0';
    });

    // Crear corazones que caen
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.querySelector('.hearts').appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    setInterval(createHeart, 300);
});