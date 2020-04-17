/* Copyright (c) 2020 by Vadym (https://codepen.io/vadimhimself/pen/vwgKqO)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

/* ---------3D effect for header ------------*/

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

/* ------------ END OF 3D TEXT ------------ */


/* GSAP ANIMATIONS */
/* Animation for the links */
gsap.from(".stagger-animation", {autoAlpha:0, duration: 1, stagger: 0.25});
gsap.to(".main-animation", { duration: 2, ease: "elastic.out(1, 0.3)", y: -100 });


/* GSAP Scrollamgic for the links */

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".bounce", 1.25, {
  scale: 0,
  cycle: {
    y: [-10, 10]
  },
  ease: Elastic.easeOut,
  stagger: {
    from: "center",
    amount: 0.25
  }
});

var scene = new ScrollMagic.Scene({
   triggerElement: "#stage",
    triggerHook: 0, 
    offset: 400
})
  /* .addIndicators({
    colorTrigger: "white",
    colorStart: "red",
    colorEnd: "white",
    indent: 5
  }) */
  .setTween(tl)
  .addTo(controller);


  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();
  tl.staggerFrom(".spotify", 0.25, {
  duration: 1, opacity: 0, stagger: 0.25,
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#stage",
  triggerHook: 0, 
    offset: 700
})
/* .addIndicators({
  colorTrigger: "white",
  colorStart: "red",
  colorEnd: "white",
  indent: 5
}) */
  .setTween(tl)
  .addTo(controller);
