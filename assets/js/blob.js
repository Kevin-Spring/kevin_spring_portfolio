/* Copyright (c) 2020 by Louis Hoebregts (https://codepen.io/Mamboleoo/pen/QWbmPGZ)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

const _noise = noise;
_noise.seed(Math.random() * 100);
const anim = {t: 0};
let ctx;
console.clear();

let frames = 0;


function Blob () {
  clear();
  let r = min(width, height) * 0.35;
  const rings = 70;
  for (let j = 0; j < rings; j++) {
    let rad = (r / rings) * (rings - j);
    beginShape();
    for (let i = 0; i <= 100; i++) {
      let x = cos(i / 100 * TWO_PI);
      let y = sin(i / 100 * TWO_PI);
      const offset = _noise.simplex3(x, y + (j * 0.03), frames * 0.003) * (rad / 5);
      x *= rad + offset;
      y *= rad + offset;
      x += width / 2;
      y += height / 2;
      vertex(x, y);
    }
    stroke(j / rings * 175 + 80);
    stroke(255);
    noFill();
    endShape();
  }
  frames++;
}

function setup () {
  const canvas = createCanvas(windowWidth, windowHeight);
  ctx = canvas.drawingContext;
}
function windowResized () {
    
  resizeCanvas(windowWidth, windowHeight);
  noiseSeed(random(100));
  draw();
}

function draw () {
  Blob();
}


