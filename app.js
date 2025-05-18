// get the next button
const nextbutton = document.querySelector('.next-btn');

// get the video element
const video = document.querySelector('.hero-video');

// list of all videos
const movieList = [ 'video/hero 1.1.mp4', 'video/hero 1.mp4', 'video/hero 2.mp4', 'video/hero 3.mp4', 'video/hero 4.mp4'];

// start from first video
let index = 0;

// when user clicks next button
nextbutton.addEventListener('click', function() {
    // move to next video
    index += 1;

    // show new video
    video.src = movieList[index];

    // if it's the last video, go back to before first
    if (index === 3) {
        index = -1;
    }
});

// get all game cards
const cards = document.querySelectorAll('.game-card');

// for each card, add hover effect
cards.forEach(card => {

    // when mouse moves on card
    card.addEventListener('mousemove', (e) => {
        // get card size and position
        const rect = card.getBoundingClientRect();

        // get x position inside card
        const x = e.clientX - rect.left;

        // find center of card
        const centerX = rect.width / 2;

        // calculate rotation
        const rotateY = (x - centerX) / 20;

        // rotate card left or right
        card.style.transform = `rotateY(${rotateY}deg)`;
    });

    // when mouse leaves card
    card.addEventListener('mouseleave', () => {
        // reset card back to normal
        card.style.transform = `rotateY(0deg)`;
    });
});

function toggleMusic() {
    const music = document.getElementById("bgMusic");

    if (music.muted) {
        music.muted = false;
        music.play(); // Ensure it plays after unmuting
    } else {
        music.muted = true;
    }
}

