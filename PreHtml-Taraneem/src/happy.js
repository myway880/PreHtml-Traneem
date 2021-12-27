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
                "../../img/happy/1.jpg",
                "../../img/happy/2.jpg",
                "../../img/happy/3.jpg",
                "../../img/happy/4.jpg",
                "../../img/happy/5.jpg",
                "../../img/happy/6.jpg",
                "../../img/happy/7.jpg",
                "../../img/happy/8.jpg",
                "../../img/happy/9.jpg",
                "../../img/happy/10.jpg",
                "../../img/happy/11.jpg",
                "../../img/happy/12.jpg",
                "../../img/happy/13.jpg",
                "../../img/happy/14.jpg",
                "../../img/happy/15.jpg",
                "../../img/happy/16.jpg",
                "../../img/happy/17.jpg",
                "../../img/happy/18.jpg",
                "../../img/happy/19.jpg",
                "../../img/happy/20.jpg",
                "../../img/happy/21.jpg",
                "../../img/happy/22.jpg",
                "../../img/happy/23.jpg",
                "../../img/happy/24.jpg",
                "../../img/happy/25.jpg",
                "../../img/happy/26.jpg",
                "../../img/happy/27.jpg",
                "../../img/happy/28.jpg",
                "../../img/happy/29.jpg",
                "../../img/happy/30.jpg",
                "../../img/happy/31.jpg",
                "../../img/happy/32.jpg",
                "../../img/happy/33.jpg",
                "../../img/happy/34.jpg",
                "../../img/happy/35.jpg",
                "../../img/happy/36.jpg",
                "../../img/happy/37.jpg",
                "../../img/happy/38.jpg",
                "../../img/happy/39.jpg",
                "../../img/happy/40.jpg"
            ]
        })




    })