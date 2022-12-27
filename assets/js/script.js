$(document).ready(function(){
 Slider('.month_slider',false,3,1,true,false,true,1024);
  Slider('.date_slider',false,9,1,true,false,true,1024);
function Slider($sliderName,$dots,$slideslow,$slidescroll,$arrows,$autoplay,$infinite,$breakpoint){
  var slider =  $($sliderName);  
  return slider.slick({
            infinite: $infinite,
            slidesToShow: $slideslow,
            slidesToScroll: $slidescroll,
            arrows: $arrows,
            dots: $dots,
            autoplay: $autoplay,
            autoplaySpeed: 2000,
            responsive: [
                {
                  breakpoint: $breakpoint,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    
                    
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    arrows: true
                  }
                }
              ]
        } );
} ;
  $.ajax({
    type: 'get',
    url: '/assets/js/script.js',
    dataType: 'script',
    data: data_send,
      success: function() {
        Slider();
      }
   });
});

$(document).ready(function(){
  $(".month_slider li a").click(function(){
    $(".month_slider li a").removeClass("active")
    $(this).addClass("active")
  })
});

$('a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
  $('.date_slider').slick('setPosition');
})