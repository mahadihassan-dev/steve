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

        $diviVideo.on("timeupdate", function (e) {
            if (e.target.currentTime >= 5) {
                $videoCta.addClass("show-button");
            }

        });
    });
})(jQuery);

