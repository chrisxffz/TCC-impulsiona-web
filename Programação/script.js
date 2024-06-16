let currentIndex = 0;
const carrosel = document.querySelector('.carrosel');
const images = document.querySelectorAll('.imagem');
const totalImages = images.length;

document.querySelector('.back').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updatecarrosel();
});

document.querySelector('.forward').addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updatecarrosel();
});

function updatecarrosel() {
    const offset = -currentIndex * 300;
    carrosel.style.transform = `translateX(${offset}%)`;
}

function startAutoSlide() {
    setInterval(() => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updatecarrosel();
    }, 1800); // Muda de imagem a cada 3 segundos
}

startAutoSlide();

// Adiciona eventos de pausa no hover
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);