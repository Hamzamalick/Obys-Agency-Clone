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

  tl.from(
    ".hero1",
    {
      opacity: 0,
    },
    "-=1"
  );
}

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      x: dets.x,
      y: dets.y,
    });
  });
}

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
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function videoAnimation() {
  let videoContainer = document.querySelector(".video-container");
  let videoCursor = document.querySelector(".video-cursor");
  let video = document.querySelector(".video-container video");
  let film = 0;

  // Move video-cursor with mouse
  videoContainer.addEventListener("mousemove", function (e) {
    const rect = videoContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(videoCursor, {
      x: x - 600, // center offset
      y: y - 150,
      duration: 0.2,
      ease: "power2.out",
    });

    gsap.to(".cursor", { opacity: 0 });
  });

  // On mouse leave
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(".cursor", { opacity: 1 });
    gsap.to(videoCursor, {
      x: "-10%",
      y: "0%",
      duration: 0.4,
      ease: "power2.out",
    });
  });

  // Play / Pause video on click
  videoContainer.addEventListener("click", function () {
    if (film === 0) {
      video.play();
      video.style.opacity = 1;
      videoCursor.innerHTML = `<i class="ri-pause-line"></i>`;
      document.querySelector(".video-container img").style.opacity = 0;

      gsap.to(videoCursor, { scale: 0.5, duration: 0.3 });
      film = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      videoCursor.innerHTML = `<i class="ri-play-fill"></i>`;
      document.querySelector(".video-container img").style.opacity = 1;

      gsap.to(videoCursor, { scale: 1, duration: 0.3 });
      film = 0;
    }
  });
}

function flagAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".flag", {
      x: dets.x,
      y: dets.y,
    });
  });

  document.querySelector("#hero3").addEventListener("mousemove", function () {
    gsap.to(".flag", {
      opacity: 1,
    });
    gsap.to(".cursor", {
      opacity: 0,
    });
  });
  document.querySelector("#hero3").addEventListener("mouseleave", function () {
    gsap.to(".flag", {
      opacity: 0,
    });
    gsap.to(".cursor", {
      opacity: 1,
    });
  });
}

function gooeyAnimation() {
  Shery.imageEffect(".img-div", {
    style: 5,
    gooey: true,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.7, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7575832123347138 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.27, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 1.3, range: [0, 10] },
      metaball: { value: 0.43, range: [0, 2] },
      discard_threshold: { value: 0.53, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 13.74, range: [0, 100] },
    },
  });
}

loadingAnimation();
cursorAnimation();
scrollAnimation();
videoAnimation();
flagAnimation();
