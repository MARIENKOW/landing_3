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

function scrollElement(element,position,speed = 0){
      const whereToScroll = toScroll(element,position);
      if(whereToScroll>window.scrollY){
            const scrolll = setInterval(()=>{
                  window.scrollTo(0,window.scrollY+30);
                  if(window.scrollY>=whereToScroll) clearInterval(scrolll)
            },speed)
      }else if(whereToScroll<window.scrollY){
            const scrolll = setInterval(()=>{
                  window.scrollTo(0,window.scrollY-30);
                  if(window.scrollY<=whereToScroll) clearInterval(scrolll)
            },speed)
      }

}

function toScroll(element,position){
      let elementPosition
      if(element === 'top'){
            elementPosition = 0
      }else if(element === 'bottom'){
            elementPosition = document.body.clientHeight  - window.innerHeight
      }else{
            const elementInfo = document.querySelector(element).getBoundingClientRect()
            if(position === 'top'){
                  elementPosition = window.scrollY + elementInfo.top
            }else if(position ==='bottom'){
                  elementPosition = window.scrollY + elementInfo.bottom - window.innerHeight;
            }else{
                  elementPosition = window.scrollY + elementInfo.top + elementInfo.height/2 -(window.innerHeight/2)
            }
      }
      return elementPosition;
}

const elementsToScroll = document.querySelectorAll('._elementsToScroll')
for(let element of elementsToScroll){
      element.addEventListener('click',(event)=>{
            event.preventDefault()
            document.body.classList.remove('_navigationActive')
            document.body.style.overflow =``
            if(event.target.textContent === 'Home'){
                  scrollElement('top')
            }else if(event.target.textContent === 'About'){
                  scrollElement('.info')
            }else if(event.target.textContent === 'Product'){
                  scrollElement('.product')
            }
      })
}