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