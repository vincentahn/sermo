let carouselIndex = 1;

export const setupCarousel = () => {
  showPage(carouselIndex);

  let leftArrows = document.getElementsByClassName('left-arrow-container');
  for(let i = 0; i < leftArrows.length; i++){
    leftArrows[i].addEventListener('click', e => plusPage(-1));
  }

  let rightArrows = document.getElementsByClassName('right-arrow-container');
  for(let i = 0; i < rightArrows.length; i++){
    rightArrows[i].addEventListener('click', e => plusPage(1));
  }
} 

export const plusPage = (n) => {
  showPage(carouselIndex += n);
}

export const showPage = (n) => {
  let pages = document.getElementsByClassName("about-info-text-container");
  if(n > pages.length) n = 1;
  else if(n < 1) n = pages.length;

  for(let i = 0; i < pages.length; i++){
    if(carouselIndex === i + 1){
      pages[i].style.display = "block";
    }else{
      pages[i].style.display = "none";
    }
  }
}
