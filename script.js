// Create a dictionary to store preloaded audio elements
const audioElements = {};

// Preload the audio files when the page loads
document.querySelectorAll('.sound-button').forEach(button => {
    const soundName = button.getAttribute('data-sound');
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audioElements[soundName] = audio;
});

// Add event listeners to play preloaded audio files on button click
document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', () => {
        const soundName = button.getAttribute('data-sound');
        const audio = audioElements[soundName];
        if (audio) {
            // Reset the audio to start from the beginning
            audio.currentTime = 0;
            audio.play();
        }
    });
});
