var sad
var happy

//var slider;

var playcount = 0
var mixValue = mixVal()



function setup() {
  var cnv = createCanvas(500, 150);
  cnv.parent("main")
  sad = loadSound("audio/sad.mp3");
  happy = loadSound("audio/happy.mp3");
  //slider = createSlider(1, 255, 1, 1)
  //slider.size(500)
}

function draw() {
  //mixValue = slider.value()
  background(74, 70, 96, mixValue)
  textSize(50)
    fill(255)
    text(Math.floor(mixValue/255*100) + " % ", 190, 30, 300,)
  if (mouseIsPressed && sad.isLoaded() && playcount === 0){
    sad.loop()
    happy.loop()
    playcount++;
  }
  sad.setVolume((255-mixValue)*.01) 
  happy.setVolume((Math.abs(mixValue-1))*.01)

  fill(245, 247, 73)
  rect(120, 100, mixValue, 30)
  stroke(0, 0, 0)
  fill(0, 0, 0, 0)
  rect(120, 100, 255, 30)
    

  
}
