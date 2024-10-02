document.addEventListener('DOMContentLoaded', function () {
    // Voice Assistant
    const synth = window.speechSynthesis;
    const speech = new SpeechSynthesisUtterance();
    const voices = synth.getVoices();
    speech.voice = voices.find(voice => voice.name === 'Google US English'); // Set to desired voice
    speech.text = "Happy Birthday Diya! You are the most special person in my life. Wishing you all the happiness and love.";
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    // Trigger speech on reload
    synth.speak(speech);

    // Elements
    const cutCakeButton = document.getElementById('cut-cake');
    const wholeCake = document.getElementById('whole-cake');
    const cakeSlice = document.getElementById('cake-slice');
    const balloons = document.getElementById('balloons');
    const fireworks = document.getElementById('fireworks');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);
    
    // Change slides every 3 seconds (3000ms)
    setInterval(nextSlide, 3000);

    // Cake Cutting Animation
    cutCakeButton.addEventListener('click', function () {
        // Hide whole cake and show slice
        wholeCake.style.display = 'none';
        cakeSlice.style.display = 'block';
        cakeSlice.style.transform = 'scale(1.5)';

        // Show balloons
        balloons.style.display = 'flex';

        // Show Fireworks
        showFireworks();
        
        // Change speech text
        speech.text = "Yay! Let's celebrate with cake and balloons!";
        synth.speak(speech);
    });

    // Balloons Animation
    for (let i = 0; i < 1; i++) { // Increase number of balloons
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        balloons.appendChild(balloon);
    }

    // Fireworks Animation
    function showFireworks() {
        for (let i = 0; i < 4; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            fireworks.appendChild(firework);
        }
    }
});
