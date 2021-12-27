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
                "img/repent/1.jpg",
                "img/repent/2.jpg",
                "img/repent/3.jpg",
                "img/repent/4.jpg",
                "img/repent/5.jpg",
                "img/repent/6.jpg",
                "img/repent/7.jpg",
                "img/repent/8.jpg",
                "img/repent/9.jpg",
                "img/repent/10.jpg",
                "img/repent/11.jpg",
                "img/repent/12.jpg",
                "img/repent/13.jpg",
                "img/repent/14.jpg",
                "img/repent/15.jpg",
                "img/repent/16.jpg",
                "img/repent/17.jpg",
                "img/repent/18.jpg",
                "img/repent/19.jpg",
                "img/repent/20.jpg",
                "img/repent/21.jpg",
                "img/repent/22.jpg",
                "img/repent/23.jpg",
                "img/repent/24.jpg",
                "img/repent/25.jpg",
                "img/repent/26.jpg",
                "img/repent/27.jpg",
                "img/repent/28.jpg",
                "img/repent/29.jpg",
                "img/repent/30.jpg",
                "img/repent/31.jpg",
                "img/repent/32.jpg",
                "img/repent/33.jpg",
                "img/repent/34.jpg",
                "img/repent/35.jpg",
                "img/repent/36.jpg",
                "img/repent/37.jpg",
                "img/repent/38.jpg",
                "img/repent/39.jpg",
                "img/repent/40.jpg"
            ]
        })




    })