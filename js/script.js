$(function(){
//back_to_top
$('.back_to_top').click(function(){
    $('html,body').animate({scrollTop:0},2000);
});

//animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 110
                }, 2000);
                return false;
            }
        }
    });    

//load
    
$(window).on('load',function(){
    $('.preloader').delay(500).fadeOut(500);
});
  
// $('.bars').on('click',function(){
//     $('.sidebar').toggleClass('ber-how');
//     $('.red').click(function(){
//         $('.para').css('color','red');
//     })
// })
        
    
// bg
$(window).scroll(function(){
    var scrolling =$(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('bg');
    }
    else{
       $('.navbar').removeClass('bg'); 
    }
    if(scrolling>200){
        $('.back_to_top').fadeIn(500);
    }
    else{
        $('.back_to_top').fadeOut(500);
    }
});
    
    
//autoplay
$('.banner_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,

});
    
$('.team-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
  ]

});

$('.quate_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,

});    
 //---Yt Player----//
    
     jQuery(".player").YTPlayer();
//---typed js---
    $(".typed").typed({
		strings: ["Awesome Creative Agency"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 2000,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    
    
    
});

$(function(){
  $(".mycolor").change(function(){
    var colorcode = $(".mycolor").val()
    $(".heading").css("color",colorcode)
    $(".para").css("color",colorcode)
    $(".divcolor").css("background",colorcode)
})
    
})
