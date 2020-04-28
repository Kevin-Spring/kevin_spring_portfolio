/* Copyright (c) 2020 by Louis Hoebregts (https://codepen.io/Mamboleoo/pen/xxbwqmz)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

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