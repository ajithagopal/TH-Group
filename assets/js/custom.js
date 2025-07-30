/** Load HTML */
$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = $(this).data('include')
      $(this).load(file)
    });
  });

  $(document).ready(function(){
    var offset1 = $(".header-end").offset().top;
        var offset2 = $(".header").outerHeight();
        var offset3 = $(".header").offset().top;

        if($( window ).width() > 999){
            $(this).scroll(function() {
            if ($(window).scrollTop() > offset1) {
                $(".header").addClass("on-scroll");
            }
            else if ($(window).scrollTop() < offset2){
                $(".header").removeClass("on-scroll");
            }

        });

        }
        else{
            $(this).scroll(function() {
            if ($(window).scrollTop() > offset1) {
                $(".header").addClass("on-scroll");
            }
            else if ($(window).scrollTop() < offset2){
                $(".header").removeClass("on-scroll");
            }

        });
        }
        
        
        
});
