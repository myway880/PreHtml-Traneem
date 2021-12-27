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
                "img/kids/1.jpg",
                "img/kids/2.jpg",
                "img/kids/3.jpg",
                "img/kids/4.jpg",
                "img/kids/5.jpg",
                "img/kids/6.jpg",
                "img/kids/7.jpg",
                "img/kids/8.jpg",
                "img/kids/9.jpg",
                "img/kids/10.jpg",
                "img/kids/11.jpg",
                "img/kids/12.jpg",
                "img/kids/13.jpg",
                "img/kids/14.jpg",
                "img/kids/15.jpg",
                "img/kids/16.jpg",
                "img/kids/17.jpg",
                "img/kids/18.jpg",
                "img/kids/19.jpg",
                "img/kids/20.jpg",
                "img/kids/21.jpg",
                "img/kids/22.jpg",
                "img/kids/23.jpg",
                "img/kids/24.jpg",
                "img/kids/25.jpg",
                "img/kids/26.jpg",
                "img/kids/27.jpg",
                "img/kids/28.jpg",
                "img/kids/29.jpg",
                "img/kids/30.jpg",
                "img/kids/31.jpg",
                "img/kids/32.jpg",
                "img/kids/33.jpg",
                "img/kids/34.jpg",
                "img/kids/35.jpg",
                "img/kids/36.jpg",
                "img/kids/37.jpg",
                "img/kids/38.jpg",
                "img/kids/39.jpg",
                "img/kids/40.jpg"
            ]
        })




    })