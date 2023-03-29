$('.owl-carousel').owlCarousel({
    loop:true,
    margin:90,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$(".bar").click(function(){
    $(".phonediv").fadeToggle();
 })
 $(".closingbar").click(function(){
     $(".phonediv").fadeToggle();
  })
  gsap.registerPlugin(ScrollTrigger);
  var tl=gsap.timeline();
  
  
  tl.from(".mainbannerfirstcontent1",{
    opacity:0,y:30,duration:0.5,stagger:0.25

  })
  tl.from(".mainbannerfirstcontent2",{
    opacity:0,y:40,duration:0.5,stagger:0.25
    
  })
  tl.from(".mainbannerfirstcontent3",{
    opacity:0,y:40,duration:0.5,stagger:0.25
    
  })
  tl.from(".mainbannerfirstcontent4",{
    opacity:0,y:40,duration:0.5,stagger:0.25
    
  })
  gsap.from(".socialmedia *",{
    scrollTrigger:{
      trigger:".mainbannerfirstcontent3",
      start:"top center",
      markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
    duration:0.2,opacity:0,x:20,stagger:0.25
  })
  gsap.from(".secondcontainer",{
    scrollTrigger:{
      trigger:".secondbanner",
      start:"top center",
      markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
    duration:1.5,opacity:0,y:50,stagger:0.25
  })
  gsap.from(".thirdbannercontent",{
    scrollTrigger:{
      trigger:".thirdbanner",
      start:"top center",
      markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
    duration:0.5,opacity:0,y:50
  })
  gsap.from(".sweets1",{
    scrollTrigger:{
      trigger:".thirdbanner",
      start:"top center",
      markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
    duration:0.5,opacity:0,y:50,stagger:0.25
  })
  gsap.from(".fourthcontainer",{
    scrollTrigger:{
      trigger:".fourthbanner",
      start:"top center",
      markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
    duration:1.5,opacity:0,y:50,stagger:0.25
  })
  gsap.from(".aboutsecondcontent",{
    scrollTrigger:{
      trigger:".aboutsecondbanner",
      start:"top center",
      markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
    duration:0.5,opacity:0,y:50
  })
  gsap.from(".textbox",{
    scrollTrigger:{
      trigger:".aboutsecondbanner",
      start:"top center",
      markers:true,
      // toggleActions:"restart none none reverse"

      
      
      },
   
    duration:1,opacity:0, y:50,stagger:0.25
  })
  gsap.from(".aboutthirdbannercontent",{
    scrollTrigger:{
      trigger:".aboutthirdbanner",
      start:"top center",
      markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
    duration:0.5,opacity:0,y:50
  })
  gsap.from(".chef1",{
    scrollTrigger:{
      trigger:".aboutthirdbanner",
      start:"top center",
      markers:true,
      // toggleActions:"restart none none reverse"

      
      
      },
   
    duration:1,opacity:0, y:50,stagger:0.25
  })
  gsap.from(".thirdbannercontent",{
    scrollTrigger:{
      trigger:".thirdbanner",
      start:"top center",
      markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
    duration:0.5,opacity:0,y:50
  })

