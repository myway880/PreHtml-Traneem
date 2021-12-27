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
                "../../img/hSpirit/1.jpg",
                "../../img/hSpirit/2.jpg",
                "../../img/hSpirit/3.jpg",
                "../../img/hSpirit/4.jpg",
                "../../img/hSpirit/5.jpg",
                "../../img/hSpirit/6.jpg",
                "../../img/hSpirit/7.jpg",
                "../../img/hSpirit/8.jpg",
                "../../img/hSpirit/9.jpg",
                "../../img/hSpirit/10.jpg",
                "../../img/hSpirit/11.jpg",
                "../../img/hSpirit/12.jpg",
                "../../img/hSpirit/13.jpg",
                "../../img/hSpirit/14.jpg",
                "../../img/hSpirit/15.jpg",
                "../../img/hSpirit/16.jpg",
                "../../img/hSpirit/17.jpg",
                "../../img/hSpirit/18.jpg",
                "../../img/hSpirit/19.jpg",
                "../../img/hSpirit/20.jpg",
                "../../img/hSpirit/21.jpg",
                "../../img/hSpirit/22.jpg",
                "../../img/hSpirit/23.jpg",
                "../../img/hSpirit/24.jpg",
                "../../img/hSpirit/25.jpg",
                "../../img/hSpirit/26.jpg",
                "../../img/hSpirit/27.jpg",
                "../../img/hSpirit/28.jpg",
                "../../img/hSpirit/29.jpg",
                "../../img/hSpirit/30.jpg",
                "../../img/hSpirit/31.jpg",
                "../../img/hSpirit/32.jpg",
                "../../img/hSpirit/33.jpg",
                "../../img/hSpirit/34.jpg",
                "../../img/hSpirit/35.jpg",
                "../../img/hSpirit/36.jpg",
                "../../img/hSpirit/37.jpg",
                "../../img/hSpirit/38.jpg",
                "../../img/hSpirit/39.jpg",
                "../../img/hSpirit/40.jpg"
            ]
        })




    })