let song;
let slider;

function preload() {
    song = loadSound('twofeet.mp3');
}

function setup() {
    createCanvas(200,200);
    song = loadSound("twofeet.mp3", loaded);
    slider = createSlider(0, 1, 0, 0.01);
    song.play();
}

function loaded() {
    song.play();
}

function draw() {
    background(0);
    song.setVolume(slider.value());
}