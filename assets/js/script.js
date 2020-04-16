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
gsap.from(".section__links-item", {autoAlpha:0, duration: 1, stagger: 0.25});


/* GSAP Scrollamgic for the links */
/* var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".section__links-item", 1.25, {
  duration: 1, opacity: 0, stagger: 0.25
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#stage"
})

  .setTween(tl)
  .addTo(controller);
 */