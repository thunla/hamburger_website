gsap.fromTo(
    ".frenchfries__img",
    {y: -20},
    {y: 0, duration: 1.5, repeat: -1, yoyo: true}
)
gsap.fromTo(
    ".frenchfries__img",
    {scale: 0},
    {scale: 1, duration: 1.5}
)
gsap.fromTo(
    ".hamburger__img",
    {y: -10},
    {y: 0, duration: 1, repeat: -1, yoyo: true, delay: 0.5}
)
gsap.fromTo(
    ".hamburger__img",
    {scale: 0},
    {scale: 1, duration: 1.5}
)
gsap.fromTo(
    ".drink__img",
    {y: -10},
    {y: 0, duration: 1, repeat: -1, yoyo: true}
)
gsap.fromTo(
    ".drink__img",
    {scale: 0},
    {scale: 1, duration: 1.5}
)
gsap.fromTo(
  ".header__bottom__right__price",
  {rotate: 360, scale: 0},
  {rotate: 0, scale: 1, duration: 1.5}
)
function animateFrom(element, direction) {
    direction = direction || 1;
    var x = 0,
        y = 0,
        scale = 0;
    if(element.classList.contains("fromLeft")) {
      x = -100;
      y = 0;
      scale = 1;
    } else if (element.classList.contains("fromRight")) {
      x = 100;
      y = 0;
      scale = 1;
    }
    else if(element.classList.contains("fromTop")){
        x = 0;
        y = 100;
    }
    else if(element.classList.contains("fromBottom")){
        x = 0;
        y = -100;
    }

    element.style.transform = "translate(" + x + "px, " + y + "px)";
    element.style.opacity = "0";
    gsap.fromTo(element, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.5, 
      x: 0,
      y: 0,
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(element) {
    gsap.set(element, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".reveal").forEach(function(element) {
      hide(element); 
      
      ScrollTrigger.create({
        trigger: element,
        onEnter: function() { animateFrom(element) }, 
        onEnterBack: function() { animateFrom(element, -1) },
        onLeave: function() { hide(element) }
      });
    });
  });
  