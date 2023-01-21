$(document).ready(function () {
      $('.slider__main').slick({
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            easing: 'ease-in-out',
            infinite: true,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 4000,
            touchTreshold: 5,
            centerMode: true,
            focusOnSelect:true,
            responsive: [
                  {
                  breakpoint: 768,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                  }
                  }
            ]
      });
});
function navigationOpen(){
      const body = document.querySelector("body")
      body.classList.toggle("_navigationActive")
      stopScroll(body,"_navigationActive")
}
function stopScroll(element,clas){
      const body = document.querySelector("body")
      if(element.classList.contains(clas)){
            body.style.overflow="hidden";
      }else{
            body.style.overflow="";
      }
}
const burger = document.querySelector(".header__burger");
burger.addEventListener("click",navigationOpen);
spoilerFlex();