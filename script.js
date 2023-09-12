var circle=document.querySelector(".circle")
var full=document.querySelector("#full")
full.addEventListener("mousemove",function(dets){
circle.style.left=dets.x+"px"
circle.style.top=dets.y+"px"

})

var h1=document.querySelectorAll("h1")
h1.forEach(function(hii){
    hii.addEventListener("mouseenter",function(){
        circle.style.height="80px"
        circle.style.width="80px"
    })
    hii.addEventListener("mouseleave",function(){
        circle.style.height="15px"
        circle.style.width="15px"
    })
    
})

var tl=gsap.timeline()

tl.from( ".nav h3",{
    y:-30,
    opacity:0,
    duration:0.8,
    delay:0.3,
    stagger:0.3

}

)


tl.from( "h1",{
    x:-300,
    opacity:0,
    duration:0.9,
    delay:0.3,
    stagger:0.4

}

)


tl.from( "img",{
   rotate:100,
   x:400,
    duration:1,
    
    stagger:0.8,
    opacity:0

}

)
tl.from( ".bottom h3",{
    y:30,
    opacity:0,
    duration:0.8,
    delay:0.3,
    stagger:0.3

})
tl.from( "i",{
    y:30,
    opacity:0,
    duration:0.8,
    delay:0.3,
    stagger:0.3

})