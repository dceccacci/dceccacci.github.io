var song;
var slider;
var button;
var jumpButton;

function setup() {
    createCanvas(400,300);
    song = loadSound("inossi-revive.mp3");
    buttonplay = createButton("play");
    buttonplay.mousePressed(togglePlaying);
    jumpButton = createButton("jump");
    jumpButton.mousePressed(jumpSong);
    sliderRate = createSlider(0, 2, 1, 0.01);
    sliderVolume = createSlider(0, 1, 0.3, 0.01);
    background(0);
}


function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.3);
        buttonplay.html("stop");
        setTimeout(changeBackground, 1290);
    } else {
        song.stop();
        buttonplay.html("play");
    }
}

function jumpSong() {
    let len = song.duration();
    song.jump(random(len));
}


function draw() {
    //background(song.currentTime(), 0, 255);
    song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());
}

function changeBackground() {
    if (song.isPlaying()){
        background(random(255), random(255), random(255));
        setTimeout(changeBackground, 1640);

    }
}