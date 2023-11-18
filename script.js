const tl = gsap.timeline();

tl.from("nav img, nav a, nav .right a, nav .right button", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
})
  .from("main h1", {
    y: 200,
    opacity: 0,
    stagger: 0.3,
  })
  .from(".hero img", {
    scale: 0,
    opacity: 0,
    stagger: 0.3,
  })
  .from(".hero .scroll-down", {
    scale: 0,
    opacity: 0,
  })
  .to(".hero .scroll-down", {
    y: 20,
    repeat: -1,
    duration: 0.7,
    yoyo: true,
  });
