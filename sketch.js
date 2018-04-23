var song; // declaring the audio file. (it's the bale rant)
var amp; // declaring the amplitude.
var vol; // declaring variable for constant amplitude level.
var voltrack; //declaring ampLevel scaled up for movement.
var voltrackmini; // declaring amplevel scaled down for smaller movement.
var baleface; // declaring movable image of bale's face minus the jaw and eyeballs.
var balejaw; // declaring a movable cutout jaw to be placed on image.
var eyetrackX;// declaring X axis mouse tracking, ajusted for bale's eye size.
var eyetrackY;// declaring X axis mouse tracking, ajusted for bale's eye size.
var mouselimitedX; // declaring limit to mouseX tracking, so you can't pull the eyes out an infinite distance away.
var mouselimitedY; // declaring limit to mouseY tracking, so you can't pull the eyes out an infinite distance away.

function preload(){
// the pre-setup commands
song = loadSound("sourceaudio/rant.mp3"); // finding and preloading an .mp3 of Christian Bale yelling at a crewmember who keeps stepping into frame during a movie shoot. (if you want to find it google "bale-istic" or "bale rant". it'll come up)
amp = new p5.Amplitude() //defining the function of the "amp" variable, so we have something to get the level from.

}

function setup() {
// the setup commands
createCanvas(500,500); //defining the canvas size.
baleface = loadImage("baleface/christianbalenoeyes.png"); // defining "baleface" to locate and load the .png of bale's face minus the jaw and eyeballs. 
balejaw = loadImage("baleface/christianbalejaw.png"); //defining "balejaw" to locate and load the cutout jaw .png to be placed overtop "baleface".
song.play(); // plays the previously loaded bale rant file

}
   function draw() {
  // the drawing code section  
    background ("#FFFFFF") // making a white background so there's whites in bale's eyes.
    
    vol = amp.getLevel(); // defining the "vol" variable as the current level of "amp". this may seem useless, but it's necessary  because the "amp" value doesn't seem to refresh on its own, and therefore normally stays at 0 the entire time.
    voltrack = vol * 100; // defining "voltrack" as "vol" x 100, so the jaw can move with the volume of the audio. Multiplying "vol" is nessecary because "vol" is always between 0 and 1, and would hardly show up if used on its own to translate amplification level to size or location.
    voltrackmini = vol * 30; // defining "voltrackmini" as "vol" x 30. This variable exists so i have a less drastic version of "voltrack".
    mouselimitedX = constrain(mouseX,0,500); // defining "mouselimitedX" as mouseX but constrained to the edge of the canvas.
    mouselimitedY = constrain(mouseY,0,500);// defining "mouselimitedY" as mouseY but constrained to the edge of the canvas.
    eyetrackX = mouselimitedX / 18; // defining "eyetrackX" as "mouselimitedX"/18. Cuts down the mouselimitedX value so the eyes move less quickly.
    eyetrackY = mouselimitedY / 41; // defining "eyetrackX" as "mouselimitedX"/18. Cuts down the mouselimitedX value so the eyes move less quickly.
    fill("#000000"); // setting the eye fill color. (makes the pupils black)
    stroke("#829b5b"); // setting the eye stroke color (makes the irises dark green)
    strokeWeight(3); // setting the stroke width. (making the iris width 3 pixels)
     
  ellipse (178 + eyetrackX,244 - voltrackmini + eyetrackY,11,11) // making the eye on the left     
  ellipse (289 + eyetrackX,244 - voltrackmini + eyetrackY,11,11) // making the eye on the right
  
  image(baleface,0,0 - voltrackmini) // making the head move slightly up and down with the volume of the audio clip
  
  image(balejaw,0,voltrack) // making the jaw move up and down with the volume of the audio clip
       
}





