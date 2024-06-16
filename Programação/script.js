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
    updateCarrosel();
});

document.querySelector('.forward').addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarrosel();
});

function updateCarrosel() {
    const offset = -currentIndex * 100;
    carrosel.style.transform = `translateX(${offset}%)`;
}

function startAutoSlide() {
    setInterval(() => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarrosel();
    }, 3000); // Muda de imagem a cada 3 segundos
}

startAutoSlide();
