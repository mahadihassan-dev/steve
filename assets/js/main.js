/* 

    Main JS Code Will Appear Here

*/


/* Home page start  */

// home video

new YouTubeToHtml5({ withAudio: true });

// home video button

(function ($) {
    $(document).ready(function () {
        $diviVideo = $("#home-video video");
        videoElement = $("#home-video video")[0];
        $videoCta = $(".home-buy-button");

        $diviVideo.on("timeupdate", function (e) {
            if (e.target.currentTime >= 5) {
                $videoCta.addClass("show-button");
            }

        });
    });
})(jQuery);




$('.btn-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });