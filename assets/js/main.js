/* 

    Main JS Code Will Appear Here

*/


/* Home page start  */

// home video 

(function ($) {
    $(document).ready(function () {
        $diviVideo = $("#divi-video-container video");
        videoElement = $("#divi-video-container video")[0];
        $videoCta = $(".home-buy-button");
        $videoCta2 = $(".divi-delayed-button-2");

        $diviVideo.on("timeupdate", function (e) {
            if (e.target.currentTime >= 5) {
                $videoCta.addClass("show-button");
            }
            if (videoElement.paused || videoElement.ended) {
                $videoCta2.addClass("show-button");
            }
        });
    });
})(jQuery);

