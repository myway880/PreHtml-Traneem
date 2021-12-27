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
                "../../img/holly/1.jpg",
                "../../img/holly/2.jpg",
                "../../img/holly/3.jpg",
                "../../img/holly/4.jpg",
                "../../img/holly/5.jpg",
                "../../img/holly/6.jpg",
                "../../img/holly/7.jpg",
                "../../img/holly/8.jpg",
                "../../img/holly/9.jpg",
                "../../img/holly/10.jpg",
                "../../img/holly/11.jpg",
                "../../img/holly/12.jpg",
                "../../img/holly/13.jpg",
                "../../img/holly/14.jpg",
                "../../img/holly/15.jpg",
                "../../img/holly/16.jpg",
                "../../img/holly/17.jpg",
                "../../img/holly/18.jpg",
                "../../img/holly/19.jpg",
                "../../img/holly/20.jpg",
                "../../img/holly/21.jpg",
                "../../img/holly/22.jpg",
                "../../img/holly/23.jpg",
                "../../img/holly/24.jpg",
                "../../img/holly/25.jpg",
                "../../img/holly/26.jpg",
                "../../img/holly/27.jpg",
                "../../img/holly/28.jpg",
                "../../img/holly/29.jpg",
                "../../img/holly/30.jpg",
                "../../img/holly/31.jpg",
                "../../img/holly/32.jpg",
                "../../img/holly/33.jpg",
                "../../img/holly/34.jpg",
                "../../img/holly/35.jpg",
                "../../img/holly/36.jpg",
                "../../img/holly/37.jpg",
                "../../img/holly/38.jpg",
                "../../img/holly/39.jpg",
                "../../img/holly/40.jpg"
            ]
        })




    })