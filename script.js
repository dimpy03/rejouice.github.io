//menu link

document.getElementById('btn1').addEventListener('click', function() {
  document.getElementById('navbar').classList.toggle('open');
});
document.getElementById('btn2').addEventListener('click', function() {
  document.getElementById('navbar').classList.remove('open');
});

// page5 link

    document.addEventListener("DOMContentLoaded", function () {
        function updateCountdown(count) {
            document.getElementById("countdown").textContent = count + " seats";
        }

        function startCountdown() {
            let count = 8;
            const countdownInterval = setInterval(function () {
                if (count >= 4) {
                    updateCountdown(count);
                    count--;
                } else {
                    clearInterval(countdownInterval);
                }
            }, 300);
        }

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        startCountdown();
                    }
                });
            },
            { threshold: 0 }
        );

        const page5Element = document.getElementById("page5");
        if (page5Element) {
            observer.observe(page5Element);
        }
    });

    //cursor link
  
  function cursorEffect() {
    let page1Content = document.querySelector(".page1-content")
    let cursor = document.querySelector(".cursor")
  
    page1Content.addEventListener("mousemove", function (dets) {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y
      })
    })
  
    page1Content.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1
      })
    })
  
    page1Content.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      })
    })
  }
  cursorEffect()

//page2 link

  ScrollReveal({
    reset: true,
    distance: "50px",
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.page2-heading', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page2-content h2', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page3-top h2', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page4-heading', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page4-content h4', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page6-heading', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page6-content h4', { delay: 100, origin: 'bottom', interval: 50 });
ScrollReveal().reveal('.page8-top li', { delay: 100, origin: 'bottom', interval: 50 });

  
  //page7 link

  function page7Animation() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      freemode:true,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
      autoplay: {
    delay: 850,
    disableOnInteraction: true,
    },
    });
  }
  page7Animation()

  //loader
  
  function loader() {
    let tl = gsap.timeline()
  
  tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
  })
  
  tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
  })
  
  tl.to("#loader",{
    opacity:0
  })
  
  tl.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
  })
  
  tl.to("#loader",{
    display:"none"
  })
  }
  loader()
  
  //footer

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