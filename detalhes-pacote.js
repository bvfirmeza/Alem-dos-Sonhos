document.addEventListener('DOMContentLoaded', function() {
    const imagemPrincipal = document.querySelector('.imagem-principal');
    const miniaturas = document.querySelectorAll('.galeria-miniaturas img');

    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', function() {
            // Guarda a URL da imagem principal atual
            const urlAnterior = imagemPrincipal.src;
            
            // Atualiza a imagem principal com a URL da miniatura clicada
            imagemPrincipal.src = this.src;
            
            // Atualiza a miniatura com a URL anterior
            this.src = urlAnterior;

            // Adiciona efeito de transição suave
            imagemPrincipal.style.opacity = '0';
            setTimeout(() => {
                imagemPrincipal.style.opacity = '1';
            }, 50);
        });
    });
});