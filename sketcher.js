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
    p.textAlign("left");
  };

  p.draw = function () {
    p.clear(0);
    p.translate(-p.width / 2, -p.height / 2);

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
    const myPosePoints = [0,3,6,7,8,9,11,12,13,14,15,16,23,25,26,27,28];

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

        case 0: // crown chak, center skull
          p.ellipse(0,0,5,5);
          p.fill(111, 0, 255);
          p.textSize(12);
          p.text("gintang buko",0,-16);
          p.image(img, 0, 0, 30, 30);
          //p.textAlign(CENTER);
          p.text("Ulo•\nhouse of the soul\nintelligence•wisdom•spiritual power\nconnection to divine & ancestral spirits.\n",0,-100);

        break;

        case 3: //right eye
          p.fill(0, 255, 0);
          p.ellipse(0,0,8,8);
          p.fill(115, 147, 255);
          p.text("kanang mata",0,0,);
          p.fill(172, 130, 255);
          p.textSize(8);
          p.text("Mata (Eyes)\n ability to see beyond physical\nworld symbolize awareness, intuition\n spiritual insight, perceive spirits\n &supernatural entities.",-190,0);
          p.image(righteye, 0, 0, 18, 18);
        break;

        case 6: //left eye
          p.fill(0, 255, 0);
          p.ellipse(0,0,8,8);
          p.fill(115, 147, 255);
          p.text("kaliwang mata",0,0);
          p.fill(203, 186, 255);
          p.textSize(5);
          p.text("•use of eye amulets mata\nas protective charms against\n evil spirits & negative energy\n pagtatawas, divination using the lines and marks\n around the eyes to diagnose\n illnesses or spiritual afflictions\nritual of panawagan, where the babaylan (shaman) communicate\n with spirits & ancestors\nusing  eyes to convey or receive visions.",90,0);
          p.image(lefteye,0,0,18,18);
        break;

        case 7: //right temple
          p.fill(0, 255, 0);
          p.ellipse(0,0,5,5);
          p.fill(255, 0, 0);
          p.text("kanang templo",0,0);
          p.image(righttemple,0,0,20,20);

        break;

        case 8: //left temple
          p.fill(0, 255, 0);
          p.ellipse(0,0,5,5);
          p.fill(255, 0, 0);
          p.text("kaliwang templo",0,0);
          p.image(lefttemple,0,0,20,20);
        break;

        
        case 9: // chest
          p.fill(0, 255, 0);
          p.ellipse(0,0,10,10);
          p.textSize(8);
          p.ellipse(30,100,15,15);
          p.fill(18, 166, 141);
          p.image(lefttemple,0,0,20,20);
          p.text("Dughan(Chest)\ncenter of emotions\nseat of innermost being\ndwelling place of the spirit\n",30,100);  
        break;

        case 11:
          p.fill(0, 255, 0);
          p.ellipse(0,0,5,5);
          p.fill(245, 160, 115);
          p.text("kanang balikat",0,0);
          p.image(rightshoulder,0,0,35,35);
          p.text("Dinhi sa da\npit nato\nMga lumad nga magahapon",-100,-150);
          p.image(lullaby,-50,-100,40,40);
        break;

        case 12:
          p.fill(0, 255, 0);
          p.ellipse(0,0,5,5);
          p.fill(255, 187, 0);
          p.text("kaliwang balikat",0,0);
          p.image(leftshoulder,0,0,35,35);
        break;

        case 15: //right hand
          p.fill(0, 255, 0);
          p.ellipse(0,0,7,7);
          p.fill(0, 255, 0)
          p.text("kanang kamay",0,-10);
          p.textSize(8);
          p.image(img,0,0,35,35);
          p.text("Kamao(Hands)\ninstruments of power & action\nsymbolize creativity &skill\n portal to connect w/spiritual realm",0,0);
        break;

        case 16: //left hand
          p.fill(0, 255, 0);
          p.ellipse(0,0,7,7);
          p.fill(255, 0, 255);
          p.text("kaliwa kamay",0,-10);
          p.textSize(8);
          p.image(righteye,0,0,35,35);
          p.text("Pagkamao(hand movements)\n hand gestures/movements in dance\n invoke spirits, conveys blessings",0,0);
          
        break;

        case 25: //feet
          p.fill(0, 255, 0);
          p.ellipse(0,0,9,9);
          p.fill(255, 0, 13);
          p.text("kanang paa",0,0);
          p.image(rightknee,0,0,20,20);
          p.textSize(6);
          p.text("Pagsuay\n babaylan (shaman) use their feet to massage\n & manipulate body ofthe patient\nto relieve pain\nremove blockages\n restore energy balance.",0,35);


        break;

        case 26: //feet
          p.fill(0, 255, 0);
          p.ellipse(0,0,9,9);
          p.fill(255, 0, 13);
          p.text("kaliwang paa",0,0);
          p.image(rightknee,0,0,20,20);
          p.textSize(6);
          p.text("Pag-alay sa Lupa\noffering to the land\nfarmers make offerings to ground\nbefore planting crops\ntouch ground barefoot\nexpress gratitude & seek blessings for fruitful harvest.",0,35);

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