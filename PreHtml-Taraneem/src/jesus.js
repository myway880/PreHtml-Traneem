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
                "../../img/jesus/1.jpg",
                "../../img/jesus/2.jpg",
                "../../img/jesus/3.jpg",
                "../../img/jesus/4.jpg",
                "../../img/jesus/5.jpg",
                "../../img/jesus/6.jpg",
                "../../img/jesus/7.jpg",
                 "../../img/jesus/8.jpg",
                 "../../img/jesus/9.jpg",
                 "../../img/jesus/10.jpg",
                 "../../img/jesus/11.jpg",
                 "../../img/jesus/12.jpg",
                 "../../img/jesus/13.jpg",
                 "../../img/jesus/14.jpg",
                 "../../img/jesus/15.jpg",
                 "../../img/jesus/16.jpg",
                 "../../img/jesus/17.jpg",
                 "../../img/jesus/18.jpg",
                 "../../img/jesus/19.jpg",
                 "../../img/jesus/20.jpg",
                 "../../img/jesus/21.jpg",
                 "../../img/jesus/22.jpg",
                 "../../img/jesus/23.jpg",
                 "../../img/jesus/24.jpg",
                 "../../img/jesus/25.jpg",
                 "../../img/jesus/26.jpg",
                 "../../img/jesus/27.jpg",
                 "../../img/jesus/28.jpg",
                 "../../img/jesus/29.jpg",
                 "../../img/jesus/30.jpg",
                 "../../img/jesus/31.jpg",
                 "../../img/jesus/32.jpg",
                 "../../img/jesus/33.jpg",
                 "../../img/jesus/34.jpg",
                 "../../img/jesus/35.jpg",
                 "../../img/jesus/36.jpg",
                 "../../img/jesus/37.jpg",
                 "../../img/jesus/38.jpg",
                 "../../img/jesus/39.jpg",
                 "../../img/jesus/40.jpg"
            ]
        })




    })