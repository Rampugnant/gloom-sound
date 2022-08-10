var sad
var happy
var slider;
var playcount = 0
//var sadVol = 1;
//var happyVol = 0;
var mixValue = mixVal()

function onSoundLoadSuccess(e){
  console.log("load sound success",e);
}
function onSoundLoadError(e){
  console.log("load sound error",e);
}
function onSoundLoadProgress(e){
  console.log("load sound progress",e);
}


function setup() {
  createCanvas(200, 200);
  sad = loadSound("audio/sad.mp3", onSoundLoadSuccess,onSoundLoadError,onSoundLoadProgress);
  happy = loadSound("audio/happy.mp3")
  
}

function draw() {
  console.log(mixValue)
  let val = slider.value()
  background(mixValue)
  if (mouseIsPressed && sad.isLoaded() && playcount === 0){
    sad.loop()
    happy.loop()
    playcount++;
  }
  sad.setVolume((255-mixValue)*.01) // add a function that calls for values
  happy.setVolume((Math.abs(mixValue-1))*.01)
  
  rect(30, 20, val, 20)

  //console.log(val)
  
}
