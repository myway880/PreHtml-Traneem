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
                "img/war/1.jpg",
                "img/war/2.jpg",
                "img/war/3.jpg",
                "img/war/4.jpg",
                "img/war/5.jpg",
                "img/war/6.jpg",
                "img/war/7.jpg",
                "img/war/8.jpg",
                "img/war/9.jpg",
                "img/war/10.jpg",
                "img/war/11.jpg",
                "img/war/12.jpg",
                "img/war/13.jpg",
                "img/war/14.jpg",
                "img/war/15.jpg",
                "img/war/16.jpg",
                "img/war/17.jpg",
                "img/war/18.jpg",
                "img/war/19.jpg",
                "img/war/20.jpg",
                "img/war/21.jpg",
                "img/war/22.jpg",
                "img/war/23.jpg",
                "img/war/24.jpg",
                "img/war/25.jpg",
                "img/war/26.jpg",
                "img/war/27.jpg",
                "img/war/28.jpg",
                "img/war/29.jpg",
                "img/war/30.jpg",
                "img/war/31.jpg",
                "img/war/32.jpg",
                "img/war/33.jpg",
                "img/war/34.jpg",
                "img/war/35.jpg",
                "img/war/36.jpg",
                "img/war/37.jpg",
                "img/war/38.jpg",
                "img/war/39.jpg",
                "img/war/40.jpg"
            ]
        })




    })