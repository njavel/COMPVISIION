// Hand detection with mediapipe
// https://google.github.io/mediapipe/solutions/hands.html
// Adapted from "Multiple Hands Detection in p5.js" by Kazuki Umeda (https://www.youtube.com/watch?v=BX8ibqq0MJU)

let sketch = function (p) {
  let font;
  let img;
 // let centerskull;
  let righteye;
  let lefteye;
  let righttemple;
  let lefttemple;
  let rightshoulder;
  let leftshoulder;
  let rightknee;
  let lullaby;

  p.preload = function () {
    font = p.loadFont("Poppins-Medium.ttf");
    img = p.loadImage('scooby.jpg');
    //centerskull = p.loadImage('centerskull.jpg');
    righteye = p.loadImage('riighteye.jpg');
    lefteye = p.loadImage('lefteye.jpg');
    righttemple = p.loadImage('righttemple.jpg');
    lefttemple = p.loadImage('lefttemple.jpg');
    rightshoulder = p.loadImage('rightshoulder.jpg');
    leftshoulder = p.loadImage('leftshoulder.jpg');
    rightknee = p.loadImage('rightknee.jpg');
    lullaby = p.loadImage('lullaby.jpg');

  };

  p.setup = function () {
    p.createCanvas(cam_w, cam_h, p.WEBGL);
    p.setAttributes({ alpha: true });
    p.textFont(font);
  };

  p.draw = function () {
    p.clear(0);
    p.translate(-p.width / 2, -p.height / 2);

    const cam_w = 640;
const cam_h = 360;
let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(cam_w, cam_h);
  capture.hide();
}

function draw() {
  clear();

  capture.loadPixels();
//dont proceed until there is camera feed
  if (capture.pixels.length > 0) {
    push();
    scale(width/cam_w, width/cam_w);
    mirror();
    pop();
  }
}

// ADD YOUR OWN VERSION OF THE MIRROR DOWN BELOW
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  
}
  function mirror() {
  
  p.background(0,0,0);
  const stepSize = 40;
  
  for (let y = 0; y < cam_h; y += stepSize) {
    for (let x = 0; x < cam_w; x += stepSize) {
      const index = ((cam_w - x) + y * cam_w) * 4;

      const r = capture.pixels[index];
      const g = capture.pixels[index + 1];
      const b = capture.pixels[index + 2];
      const brightness = (r + g + b) / 3;

      // USE THE x, y, r, g, or b values to draw things to the screen
      
      
      const size = map(brightness, 0, 255, stepSize/4, stepSize);
      //noStroke();
      stroke(r, g, b, 255);    
      strokeWeight(10);
      fill(r*2, brightness, 255);
      
      //ellipse(x, y, size, size)
     rect(x, y, size*3, size*2);
      textSize(brightness/2);
      fill(180,brightness,200);
      text("nikita", x, y);
    blendMode(HARD_LIGHT);
     // blendMode(REPLACE);

    }
  }
}

    if (detections != undefined) {
      // console.log(detections);

      // check right hand
      // check left hand
      // check poses


      if (detections.poseLandmarks != undefined) {
        p.drawPose(detections.poseLandmarks);
      }
    }
  };

  p.drawPose = function (pose) {
    // const nose = p.createVector(pose[0].x, pose[0].y);

    // p.push();
    // p.translate(p.width - nose.x * p.width, nose.y * p.height, 0);
    // p.scale(5);
    // p.normalMaterial();
    // p.model(TEETH);
    // p.pop();

    // add points to this array for each poseKeypoint you want to draw something on.
    const myPosePoints = [0,3,6,7,8,9,11,12,13,14,23,25,26,27,28];

    for (let i = 0; i < myPosePoints.length; i++) {
      const curPoint = myPosePoints[i];
      const poseFeature = pose[curPoint];
      p.push();
      p.translate(p.width - poseFeature.x * p.width, poseFeature.y * p.height, 0);
      p.scale(2);
      p.normalMaterial();
     // p.textSize(1);

      // a more efficient if/else thingy (https://www.w3schools.com/js/js_switch.asp)

      switch (curPoint) {

        case 0:
          p.ellipse(0,0,5,5);
          p.fill(255, 187, 0);
          p.textSize(12);
          p.text("center skull",0,0);
          p.image(img, 0, 0, 30, 30);
          //p.textAlign(CENTER);
          p.text("The heart holds significant spiritual symbolism in Arnis\nit represents one's innermost essence, integrity, and dedication to the practice\n Arnis practitioners strive to cultivate virtues such as compassion, respect, and love in their hearts\n",80,150);

        break;

        case 3: //right eye
          p.ellipse(0,0,5,5);
          p.fill(255, 187, 0);
          p.text("right eye",0,0);
          p.fill(255,0,255);
          p.textSize(10);
          p.image(righteye, 0, 0, 15, 15);
        break;

        case 6:
          p.ellipse(0,0,5,5);
          p.fill(255, 187, 0);
          p.text("left eye",0,0);
          p.image(lefteye,0,0,15,15);
        break;

        case 7:
          p.ellipse(0,0,5,5);
          p.fill(255, 187, 0);
          p.text("right temple",0,0);
          p.image(righttemple,0,0,20,20);

        break;

        case 8:
          p.ellipse(0,0,5,5);
          p.fill(255, 187, 0);
          p.text("left temple",0,0);
          p.image(lefttemple,0,0,20,20);
        break;

        case 11:
          p.ellipse(0,0,5,5);
          p.fill(255, 187, 0);
          p.text("right shoulder",0,0);
          p.image(rightshoulder,0,0,35,35);
          p.text("Dinhi sa da\npit nato\nMga lumad nga magahapon",-80,-130);
          p.image(lullaby,-50,-100,40,40);
        break;

        case 12:
          p.ellipse(0,0,5,5);
          p.fill(255, 187, 0);
          p.text("left shoulder",0,0);
          p.image(leftshoulder,0,0,35,35);
        break;

        case 25:
          p.ellipse(0,0,5,5);
          p.fill(255, 187, 0);
          p.text("right knee",0,0);
          p.image(rightknee,0,0,20,20);

        break;

        case 26:
          p.ellipse(0,0,5,5);
          p.fill(255, 187, 0);
          p.text("left knee",0,0);
          p.image(rightknee,0,0,20,20);
        break;


      }
      p.pop();
    }
  };

  };

//p.background(255,0,255);
let myp5 = new p5(sketch);

// uncomment this stuff below if you want the page to auto-refresh after a certain amount of time

setTimeout(function() {

//   // refresh the page by setting the URL to what the URL already is.
window.location.href = window.location.href;

 //num milliseconds between page refreshes
 }, 900000);