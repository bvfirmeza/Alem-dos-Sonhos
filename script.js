document.addEventListener('DOMContentLoaded', function() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentTestimonial = 0;

    // Mostrar o primeiro depoimento
    testimonialCards[currentTestimonial].classList.add('active');

    // Função para mostrar o próximo depoimento
    function showNextTestimonial() {
        testimonialCards[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        testimonialCards[currentTestimonial].classList.add('active');
    }

    // Função para mostrar o depoimento anterior
    function showPrevTestimonial() {
        testimonialCards[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        testimonialCards[currentTestimonial].classList.add('active');
    }

    // Adicionar eventos aos botões
    nextButton.addEventListener('click', showNextTestimonial);
    prevButton.addEventListener('click', showPrevTestimonial);
});