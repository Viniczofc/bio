function typeTitle(text, speed = 100) {
    let i = 0;
    let isDeleting = false;
    let currentText = '';
    
    function type() {
        if (!isDeleting && i < text.length) {
            // Digitando
            currentText = text.substring(0, i + 1);
            document.title = currentText + '|';
            i++;
            setTimeout(type, speed);
        } 
        else if (!isDeleting && i === text.length) {
            // Texto completo - espera 3 segundos
            document.title = currentText;
            setTimeout(() => {
                isDeleting = true;
                setTimeout(type, speed);
            }, 3000);
        } 
        else if (isDeleting && i > 0) {
            // Apagando
            currentText = text.substring(0, i - 1);
            document.title = currentText + '|';
            i--;
            setTimeout(type, speed / 2); // Apaga mais rápido
        } 
        else if (isDeleting && i === 0) {
            // Texto completamente apagado - recomeça
            isDeleting = false;
            setTimeout(type, 500);
        }
    }
    
    type();
}

// Inicia o efeito quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    typeTitle("Bio por Vz Modder", 100);
});