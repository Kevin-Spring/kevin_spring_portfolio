//Copyright (c) 2020 by Louis Hoebregts (https://codepen.io/Mamboleoo/pen/QWbmPGZ)

const _noise = noise;
_noise.seed(Math.random() * 100);
const anim = {t: 0};
let ctx;
console.clear();

/* ====== STEP 6 ====== */
let frames = 0;
function goToStep6 () {
  loop();
  ctx.fillStyle = 'black';
  frames = 0;
}

function step6 () {
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

function draw () {
  window['step' + 6]();
}


