//footer link


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


//loader link


function loader() {
  let tl = gsap.timeline()


tl.to("#loader",{
  opacity:0
})

tl.from(".nav-top",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:-0.5
})
tl.from(".page1-content span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.7,
  delay:0.5
})
tl.to("#loader",{
  display:"none"
})
}
loader()



//menu link


document.getElementById('btn4').addEventListener('click', function() {
  document.getElementById('navbar').classList.toggle('open');
});
document.getElementById('btn3').addEventListener('click', function() {
  document.getElementById('navbar').classList.remove('open');
});


  