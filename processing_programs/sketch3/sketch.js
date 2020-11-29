var song;
var slider;
var buttonplay;
var jumpButton;
var sliderRate;
var sliderVolume;
var cnv;
var fft;
var w;

function preload(){
    song = loadSound("inossi-revive.mp3");
}

function setup() {
    cnv = createCanvas(400,300);
    colorMode(HSB);
    angleMode(DEGREES);
    buttonplay = createButton("play");
    buttonplay.mousePressed(togglePlaying);
    jumpButton = createButton("jump");
    jumpButton.mousePressed(jumpSong);
    sliderRate = createSlider(0, 2, 1, 0.01);
    sliderVolume = createSlider(0, 1, 0.3, 0.01);
    fft = new p5.FFT(0.9, 512);
    w = width / 512;
    background(0);
}


function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.3);
        buttonplay.html("stop");
        //setTimeout(changeBackground, 1290);
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
    song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());
    background(0);
    var spectrum = fft.analyze();
    //stroke(random(255),random(255),random(255));
    noStroke();
    translate(width/2, height/2);
    //beginShape();
    //console.log(spectrum.length)
    for (var i=0; i< spectrum.length; i++){
        var angle = map(i, 0, spectrum.length, 0, 360)
        var amp = spectrum[i] * 2;
        var r = map(amp, 0 , 256, 40, 200);
        var x = r * cos(angle);
        var y = r * sin(angle);
        stroke(i,random(255),random(255));
        line(0,0,x,y);
        vertex(x,y);
        //var y = map(amp, 0, 512, height, 0);
        fill(i ,random(255),random(255));
        rect(x, y, x , y);
    }
    //endShape();
}

//function changeBackground() {
    //if (song.isPlaying()){
        //background(random(255), random(255), random(255));
        //setTimeout(changeBackground, 1640);

    //}
//}