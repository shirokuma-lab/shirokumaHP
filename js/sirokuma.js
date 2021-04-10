$(function(){
    var tscroll = $('#t-scroll');
    tscroll.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            tscroll.fadeIn();
       } else {
            tscroll.fadeOut();
       }
    });
    tscroll.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });

//アンダーラインのアニメーション
$(window).on('scroll',function(){

   $(".JS_ScrollAnimationItem").each(function(){
     var position = $(this).offset().top;
     var scroll = $(window).scrollTop();
     var windowHeight = $(window).height();
     if (scroll > position - windowHeight){
       $(this).addClass('isActive');
     }
   });
   
  });
//ハンバーガーメニュー
(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);


