const items = document.querySelectorAll('.carousel-item');
let currentIndex = 2; // Começa com a terceira imagem como o foco

function updateCarousel() {
  // Remove a classe "middle" de todos os itens
  items.forEach(item => item.classList.remove('middle'));
  // Adiciona a classe "middle" ao item atual
  items[currentIndex].classList.add('middle');
}

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});