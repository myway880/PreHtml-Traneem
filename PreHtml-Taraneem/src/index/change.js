/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/jquery-background-slideshow/
 * License: MIT, see file 'LICENSE'
 */

    $(document).ready(function () {

/*
        $(".layer").backgroundSlideshow({
            delay: 3000,
            transitionDuration: 3000,
            images: [
                "assets/images/image3.jpeg",
                "assets/images/image4.jpeg"
            ]
        })
*/
        $("body").backgroundSlideshow({
            onBeforeTransition: function (index) {
                console.log("before transition", index)
            },
            onAfterTransition: function (index) {
                console.log("after transition", index)
            },
            transitionDuration: 3000,
            fixed: true,
            images: [
                "img/change/1.jpg",
                "img/change/2.jpg",
                "img/change/3.jpg",
                "img/change/4.jpg",
                "img/change/5.jpg",
                "img/change/6.jpg",
                "img/change/7.jpg",
                "img/change/8.jpg",
                "img/change/9.jpg",
                "img/change/10.jpg",
                "img/change/11.jpg",
                "img/change/12.jpg",
                "img/change/13.jpg",
                "img/change/14.jpg",
                "img/change/15.jpg",
                "img/change/16.jpg",
                "img/change/17.jpg",
                "img/change/18.jpg",
                "img/change/19.jpg",
                "img/change/20.jpg",
                "img/change/21.jpg",
                "img/change/22.jpg",
                "img/change/23.jpg",
                "img/change/24.jpg",
                "img/change/25.jpg",
                "img/change/26.jpg",
                "img/change/27.jpg",
                "img/change/28.jpg",
                "img/change/29.jpg",
                "img/change/30.jpg",
                "img/change/31.jpg",
                "img/change/32.jpg",
                "img/change/33.jpg",
                "img/change/34.jpg",
                "img/change/35.jpg",
                "img/change/36.jpg",
                "img/change/37.jpg",
                "img/change/38.jpg",
                "img/change/39.jpg",
                "img/change/40.jpg"
            ]
        })




    })