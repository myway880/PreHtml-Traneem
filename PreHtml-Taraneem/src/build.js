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
                "../../img/build/1.jpg",
                "../../img/build/2.jpg",
                "../../img/build/3.jpg",
                "../../img/build/4.jpg",
                "../../img/build/5.jpg",
                "../../img/build/6.jpg",
                "../../img/build/7.jpg",
                "../../img/build/8.jpg",
                "../../img/build/9.jpg",
                "../../img/build/10.jpg",
                "../../img/build/11.jpg",
                "../../img/build/12.jpg",
                "../../img/build/13.jpg",
                "../../img/build/14.jpg",
                "../../img/build/15.jpg",
                "../../img/build/16.jpg",
                "../../img/build/17.jpg",
                "../../img/build/18.jpg",
                "../../img/build/19.jpg",
                "../../img/build/20.jpg",
                "../../img/build/21.jpg",
                "../../img/build/22.jpg",
                "../../img/build/23.jpg",
                "../../img/build/24.jpg",
                "../../img/build/25.jpg",
                "../../img/build/26.jpg",
                "../../img/build/27.jpg",
                "../../img/build/28.jpg",
                "../../img/build/29.jpg",
                "../../img/build/30.jpg",
                "../../img/build/31.jpg",
                "../../img/build/32.jpg",
                "../../img/build/33.jpg",
                "../../img/build/34.jpg",
                "../../img/build/35.jpg",
                "../../img/build/36.jpg",
                "../../img/build/37.jpg",
                "../../img/build/38.jpg",
                "../../img/build/39.jpg",
                "../../img/build/40.jpg"
            ]
        })




    })