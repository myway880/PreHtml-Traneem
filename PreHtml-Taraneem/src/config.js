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
                "../../img/1.jpg",
                "../../img/2.jpg",
                "../../img/3.jpg",
                "../../img/4.jpg",
                "../../img/5.jpg",
                "../../img/6.jpg",
                "../../img/7.jpg",
                "../../img/8.jpg",
                "../../img/9.jpg",
                "../../img/10.jpg",
                "../../img/11.jpg",
                "../../img/12.jpg",
                "../../img/13.jpg",
                "../../img/14.jpg",
                "../../img/15.jpg",
                "../../img/16.jpg",
                "../../img/17.jpg",
                "../../img/18.jpg",
                "../../img/19.jpg",
                "../../img/20.jpg",
                "../../img/21.jpg",
                "../../img/22.jpg",
                "../../img/23.jpg",
                "../../img/24.jpg",
                "../../img/25.jpg",
                "../../img/26.jpg",
                "../../img/27.jpg",
                "../../img/28.jpg",
                "../../img/29.jpg",
                "../../img/30.jpg",
                "../../img/31.jpg",
                "../../img/32.jpg",
                "../../img/33.jpg",
                "../../img/34.jpg",
                "../../img/35.jpg",
                "../../img/36.jpg",
                "../../img/37.jpg",
                "../../img/38.jpg",
                "../../img/39.jpg",
                "../../img/40.jpg"
            ]
        })




    })