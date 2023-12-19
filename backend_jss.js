// Function to play music
function playMusic() {
    let music = document.getElementById('music');
    music.play();
}

// Function to pause music
function pauseMusic() {
    let music = document.getElementById('music');
    music.pause();
}

// Function to stop music
function stopMusic() {
    let music = document.getElementById('music');
    music.pause();
    music.currentTime = 0;
}

// Function to load music
function loadMusic() {
    let music = document.getElementById('music');
    let fileInput = document.getElementById('fileInput');
    let file = fileInput.files[0];

    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            music.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a file.');
    }
}