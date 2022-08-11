var sad
var happy

var slider;

var playcount = 0
var mixValue; //= mixVal()



function setup() {
  var cnv = createCanvas(500, 150);
  cnv.parent("main")
  sad = loadSound("audio/sad.mp3");
  happy = loadSound("audio/happy.mp3");
  slider = createSlider(1, 255, 1, 1)
  slider.size(500)
}

function draw() {
  mixValue = slider.value()
  background(72, 61, 139, 255 - mixValue)
  textSize(50)
    fill(255)
    text(mixValue + ' / 255', 150, 50, 300,)
  if (mouseIsPressed && sad.isLoaded() && playcount === 0){
    sad.loop()
    happy.loop()
    playcount++;

    
    
  }
  sad.setVolume((255-mixValue)*.01) 
  happy.setVolume((Math.abs(mixValue-1))*.01)
  
}
