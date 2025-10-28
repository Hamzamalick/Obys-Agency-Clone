Shery.makeMagnet("nav ul li");
window.scrollTo(0, 0);

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

  // tl.from(".hero", {
  //   y: 1600,
  //   delay: 0.2,
  //   duration: 0.5,
  //   opacity: 0,
  //   ease: Power4,
  // });

  tl.from(".hero-heading h1", {
    y: 150,
    stagger: 0.2,
  });

  tl.from(".hero1", {
    opacity:0
  }, "-=1");
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

function scrollAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

scrollAnimation();