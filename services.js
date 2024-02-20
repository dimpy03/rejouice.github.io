// menus

ScrollReveal({
    reset: true,
    distance: "50px",
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.container h2', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page3 span', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page4-box3 h4', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page5-box1 h1', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page8 h4', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page8-text h3', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page8-img', { delay: 100, origin: 'bottom', interval: 30 });
ScrollReveal().reveal('.content5', { delay: 100, origin: 'bottom', interval: 30 });
ScrollReveal().reveal('.page8-last li a', { delay: 100, origin: 'bottom', interval: 30 });


// page4 height scroll animation


window.onscroll = function() {
    scrollFunction();
    changeBackgroundOnScroll();
};

function scrollFunction() {
    var box = document.getElementById("scrollingBox");
    var boxRect = box.getBoundingClientRect();

    var newHeight, newGap, displayValue;

    if (boxRect.top < 50 && boxRect.bottom > 50) {
        newHeight = '90px';
        newGap = '1px';
        displayValue = 'none';
    } else {
        newHeight = '350px';
        newGap = '18px';
        displayValue = 'block';
    }

    box.style.height = newHeight;
    box.style.gap = newGap;

    var endHeadings = document.querySelectorAll('.page4-end h4, .page4-end1 h4');
    for (var i = 0; i < endHeadings.length; i++) {
        endHeadings[i].style.display = displayValue;
    }
}


// footer

function footer() {
    let tl = gsap.timeline()
    tl.from(".page9-top",{
        y:-140,
        opacity:0,
        stagger:0.1,
        duration:1,
        delay:1,
        scrollTrigger: {
          trigger: "#foot",
          scroller: "body",
          start: "top 90%",
        //   end: "top 9%",
          // markers:true,
          scrub: 4,
        }
      })
        tl.from(".page10-content h1 span",{
            y:-100,
            opacity:0,
            stagger:0.1,
            duration:0.5,
            delay:-0.5,
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
