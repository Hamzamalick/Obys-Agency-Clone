Shery.makeMagnet("nav ul li");

function loadingAnimation() {
  let grow = 0;
  setInterval(() => {
    if (grow < 101) {
      document.querySelector(".increas").innerHTML = grow;
      grow++;
    } else {
      grow;
    }
  }, 25);

  let tl = gsap.timeline();

  tl.from(".row h1", {
    y: 150,
    delay: 0.5,
    duration: 0.7,
  });
  tl.from(".row h3", {
    opacity: 0,
  });

  tl.to("#loader", {
    opacity: 0,
    delay: 2,
    display: "none",
  });

  tl.from(".hero", {
    y: 1600,
    delay: 0.2,
    duration: 0.5,
    opacity: 0,
    ease: Power4,
  });

  tl.from(".hero-heading h1", {
    y: 150,
    stagger: 0.2,
  });
}
loadingAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    console.log(dets.x);
    gsap.to(".cursor", {
      x: dets.x,
      y: dets.y,
    });
  });
}
cursorAnimation();
