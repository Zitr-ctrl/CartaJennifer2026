document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const dateElement = document.querySelector('.date');
    
    if (dateElement) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = today.toLocaleDateString('es-ES', options);
    }

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('flipped')) {
            card.style.transform = 'scale(1)';
        }
    });

    card.addEventListener('transitionend', () => {
        if (card.classList.contains('flipped')) {
            card.style.transform = 'scale(1)';
        }
    });
});