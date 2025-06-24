// Script.js

// Toggle menu hambúrguer
const btnMobile = document.getElementById('btnMobile');
const navUl = document.querySelector('nav ul');

btnMobile.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Carrossel de imagens
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const carousel = document.querySelector('.galeria .carousel');

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -carousel.offsetWidth,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: carousel.offsetWidth,
    behavior: 'smooth'
  });
});

// Validação simples do formulário e confirmação de envio
const form = document.getElementById('formContato');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
  form.reset();
});
