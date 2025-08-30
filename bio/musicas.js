document.addEventListener('DOMContentLoaded', function() {
    // Elementos do player de música
    const musicPlayer = document.getElementById('musicPlayer');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const musicTitle = document.getElementById('musicTitle');
    
    // Lista de músicas (simulando músicas na pasta "musicas")
    const musicList = [
        { title: "Rei dos demônios", file: "rei-dos-demônios.mp3" },
        { title: "Lágrimas no celular", file: "lágrimas-no-celular.mp3" },
        { title: "Oclin pra Chorar", file: "Oclin-pra-Chorar.mp3" },
        { title: "Outra Vadia", file: "Outra-Vadia.mp3" },
        { title: "O Samba Morreu", file: "O-Samba-Morreu.mp3" },
        { title: "A ultima danca", file: "a-ultima-danca.mp3" },
        { title: "Люди Надоели", file: "Люди-Надоели.mp3" },
        { title: "Тоска", file: "Тоска.mp3" }
    ];
    
    let currentMusicIndex = 0;
    let isPlaying = false;
    let audio = new Audio();
    
    // Função para carregar música
    function loadMusic(index) {
        // Em um cenário real, o src seria "musicas/" + musicList[index].file
        // audio.src = "musicas/" + musicList[index].file;
        
        // Para demonstração, usaremos um áudio online
        audio.src = "musicas/" + musicList[index].file;
        musicTitle.textContent = musicList[index].title;
        
        audio.load();
    }
    
    // Função para tocar música
    function playMusic() {
        audio.play();
        isPlaying = true;
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        musicPlayer.classList.add('show');
    }
    
    // Função para pausar música
    function pauseMusic() {
        audio.pause();
        isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
    
    // Função para tocar próxima música
    function nextMusic() {
        currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
        loadMusic(currentMusicIndex);
        if (isPlaying) playMusic();
    }
    
    // Função para tocar música anterior
    function prevMusic() {
        currentMusicIndex = (currentMusicIndex - 1 + musicList.length) % musicList.length;
        loadMusic(currentMusicIndex);
        if (isPlaying) playMusic();
    }
    
    // Event listeners para os botões
    playBtn.addEventListener('click', function() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
    
    nextBtn.addEventListener('click', nextMusic);
    prevBtn.addEventListener('click', prevMusic);
    
    // Quando a música terminar, tocar a próxima
    audio.addEventListener('ended', nextMusic);
    
    // Inicializar
    loadMusic(currentMusicIndex);
    
    // Mostrar o player em dispositivos grandes
    function checkWidth() {
        if (window.innerWidth >= 768) {
            musicPlayer.classList.add('show');
        } else {
            musicPlayer.classList.remove('show');
        }
    }
    
    window.addEventListener('resize', checkWidth);
    checkWidth();
});