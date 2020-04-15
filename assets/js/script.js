/* 3D effect for header */

const text = document.querySelectorAll('.text');
const halfX = window.innerWidth / 2;
const halfY = window.innerHeight / 2;

text.forEach((el, i) => {
  TweenMax.to(el, 1, {
    z: 1 * (i + 8)
  });
});

document.addEventListener('mousemove', (e) => {
  text.forEach((el, i) => {
    TweenMax.to(el, 0.5, {
      x: (e.clientX - halfX) * (i + 1) * 0.01,
      y: (e.clientY - halfY) * (i + 1) * 0.01
    });
  });
});


/* Animation for the links */
gsap.from(".header", {duration: 1, opacity: 0, y:150, stagger: 0.25});


/* GSAP Scrollamgic for the links */
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".section__links-item", 1.25, {
  duration: 1, opacity: 0, stagger: 0.25
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#stage"
})

  .setTween(tl)
  .addTo(controller);


/* ------------- WAVES ------------ */
/* function waves (phase, amplitude) {
  const linesAmount = 20;
  
  for(var k = 0; k < linesAmount; k++) {
    stroke(255, 255, 255, (k / (linesAmount - 1) * 255));
    const offset = (1 - k / linesAmount) * 4;
    beginShape();
    for (var i = 0; i < (width + 4); i+=4) {
      let y = height * 0.5;
      y += sin(i * 0.01 - phase + offset) * amplitude;
      y += sin(i * 0.02 - phase + offset) * amplitude;
      const lastSineNoise = noise(phase * 0.1 + (i / width) * 5) * 10;
      y += sin(i * 0.04 - phase + offset + lastSineNoise) * amplitude;
      vertex(i, y);
    }
    endShape();
  }
}

function setup () {
  let size = min(windowWidth, windowHeight) * 0.96;
  size = floor(size);
  createCanvas(windowWidth, windowHeight);
  noiseSeed(random(100));
  mouseY = height / 2;
  noFill();
}

//To make it responsive
function windowResized () {
  let size = min(windowWidth, windowHeight) * 0.96;
  size = floor(size);
  resizeCanvas(windowWidth, windowHeight);
  noiseSeed(random(100));
  draw();
}

function draw () {
  clear();
  const phase = millis() * 0.001;
  const amplitude = height * 0.1;
  
  waves(phase, amplitude);
  
} */
