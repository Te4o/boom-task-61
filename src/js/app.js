import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  var priceElements = document.querySelectorAll('.price');
  for(var i=0; i<=priceElements.length; i++){
    if(priceElements[i].classList.contains("hot")){
      priceElements[i].innerHTML+= '🔥';
    }
  }
});
