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
                "../../img/nature/1.jpg",
                "../../img/nature/2.jpg",
                "../../img/nature/3.jpg",
                "../../img/nature/4.jpg",
                "../../img/nature/5.jpg",
                "../../img/nature/6.jpg",
                "../../img/nature/7.jpg",
                "../../img/nature/8.jpg",
                "../../img/nature/9.jpg",
                "../../img/nature/10.jpg",
                "../../img/nature/11.jpg",
                "../../img/nature/12.jpg",
                "../../img/nature/13.jpg",
                "../../img/nature/14.jpg",
                "../../img/nature/15.jpg",
                "../../img/nature/16.jpg",
                "../../img/nature/17.jpg",
                "../../img/nature/18.jpg",
                "../../img/nature/19.jpg",
                "../../img/nature/20.jpg",
                "../../img/nature/21.jpg",
                "../../img/nature/22.jpg",
                "../../img/nature/23.jpg",
                "../../img/nature/24.jpg",
                "../../img/nature/25.jpg",
                "../../img/nature/26.jpg",
                "../../img/nature/27.jpg",
                "../../img/nature/28.jpg",
                "../../img/nature/29.jpg",
                "../../img/nature/30.jpg",
                "../../img/nature/31.jpg",
                "../../img/nature/32.jpg",
                "../../img/nature/33.jpg",
                "../../img/nature/34.jpg",
                "../../img/nature/35.jpg",
                "../../img/nature/36.jpg",
                "../../img/nature/37.jpg",
                "../../img/nature/38.jpg",
                "../../img/nature/39.jpg",
                "../../img/nature/40.jpg"
            ]
        })




    })