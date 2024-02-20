ScrollReveal({
    reset: true,
    distance: "50px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.page-img', { delay: 100, origin: 'left'});
ScrollReveal().reveal('.page-img1', { delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.page-img2', { delay: 100, origin: 'top'});
ScrollReveal().reveal('.page-img3', { delay: 100, origin: 'right'});
ScrollReveal().reveal('.page2 p ', { delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.page5 p ', { delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.page6-top h2 ', { delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.page6-top1 h2 ', { delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.page7 li ', { delay: 100, origin: 'bottom'});

//footer link

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

//menu link


document.getElementById('btn4').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('open');
  });
  document.getElementById('btn3').addEventListener('click', function() {
    document.getElementById('navbar').classList.remove('open');
  });