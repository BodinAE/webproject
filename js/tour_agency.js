let currentIndex = 0;

const carouselItems = document.getElementsByClassName('destination-item');
console.log(carouselItems)
function goToSlide(index) {
    if (index < 0) {    /*&lt;*/
        index = carouselItems.length - 1;
    }
    else if (index > carouselItems.length) {
        index = 0;
    }
    currentIndex = index;

    
    document.getElementsByClassName('destination-list').style.transform = 'translateX(-${currentIndex * 100}%)';
}
function goToNextSlide() {
    
    goToSlide(currentIndex + 1);

}

function goToPrevSlide() {
    goToSlide(currentIndex - 1)
}

setInterval(goToNextSlide, 10000)