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
                "../../img/sad/1.jpg",
                "../../img/sad/2.jpg",
                "../../img/sad/3.jpg",
                "../../img/sad/4.jpg",
                "../../img/sad/5.jpg",
                "../../img/sad/6.jpg",
                "../../img/sad/7.jpg",
                "../../img/sad/8.jpg",
                "../../img/sad/9.jpg",
                "../../img/sad/10.jpg",
                "../../img/sad/11.jpg",
                "../../img/sad/12.jpg",
                "../../img/sad/13.jpg",
                "../../img/sad/14.jpg",
                "../../img/sad/15.jpg",
                "../../img/sad/16.jpg",
                "../../img/sad/17.jpg",
                "../../img/sad/18.jpg",
                "../../img/sad/19.jpg",
                "../../img/sad/20.jpg",
                "../../img/sad/21.jpg",
                "../../img/sad/22.jpg",
                "../../img/sad/23.jpg",
                "../../img/sad/24.jpg",
                "../../img/sad/25.jpg",
                "../../img/sad/26.jpg",
                "../../img/sad/27.jpg",
                "../../img/sad/28.jpg",
                "../../img/sad/29.jpg",
                "../../img/sad/30.jpg",
                "../../img/sad/31.jpg",
                "../../img/sad/32.jpg",
                "../../img/sad/33.jpg",
                "../../img/sad/34.jpg",
                "../../img/sad/35.jpg",
                "../../img/sad/36.jpg",
                "../../img/sad/37.jpg",
                "../../img/sad/38.jpg",
                "../../img/sad/39.jpg",
                "../../img/sad/40.jpg"
            ]
        })




    })