// footer

function footer() {
    let tl = gsap.timeline()
    tl.from(".page9-top", {
        y: -90,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
            trigger: "#foot",
            scroller: "body",
            start: "top 90%",
              end: "top 9%",
            // markers:true,
            scrub: 4,
        }
    })
    tl.from(".page10-content h1 span", {
        y: -100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: -0.5,
        scrollTrigger: {
            trigger: "#page10",
            scroller: "body",
            start: "top 80%",
            end: "top 79%",
            // markers:true,
            scrub: 4,
        }
    })

}
footer()



// reveal


ScrollReveal({
    reset: true,
    distance: "50px",
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.first span h3', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page2-img', { delay: 100, origin: 'bottom', interval: 50 });



// menu-link

document.getElementById('btn4').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('open');
  });
  document.getElementById('btn3').addEventListener('click', function() {
    document.getElementById('navbar').classList.remove('open');
  });