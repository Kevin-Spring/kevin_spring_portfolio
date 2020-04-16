//Copyright (c) 2020 by Louis Hoebregts (https://codepen.io/Mamboleoo/pen/xxbwqmz)

/* ------------- WAVES ------------ */
function waves (phase, amplitude) {
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
  
 /*  function draw () {
    createCanvas(2800, 200);
    noFill();
    clear();
    const phase = millis() * 0.001;
    const amplitude = height * 0.1;
    waves(phase, amplitude);  
  }

  function windowResized () {
    let size = min(windowWidth, windowHeight) * 0.96;
    size = floor(size);
    resizeCanvas(windowWidth, windowHeight);
    noiseSeed(random(100));
    draw();
  } */

  function setup () {
    
    createCanvas(windowWidth, windowHeight);
    noiseSeed(random(100));
    mouseY = height / 2;
    noFill();
  }
  function windowResized () {
    
    resizeCanvas(windowWidth, windowHeight);
    noiseSeed(random(100));
    draw();
  }

  function draw () {
    clear();
    const phase = millis() * 0.001;
    const amplitude = height * 0.1;
    
    waves(phase, amplitude);
  }