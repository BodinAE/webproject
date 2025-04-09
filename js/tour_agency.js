let currentIndex = 0;

const carouselItems = document.getElementsByClassName('destination-item');
console.log(carouselItems)
function goToSlide(index) {
    if (index < 0) {    /*&lt;*/
        index = carouselItems.length - 1;
    }
    else if (index >= carouselItems.length) {
        index = 0;
    }
    currentIndex = index;

    // console.log(index)
    var list = document.getElementsByClassName('destination-list')
    list[0].style.transform = 'translateX(-'+ currentIndex * (100/carouselItems.length) +'%)';
    console.log(list[0].style.transform)
}
function goToNextSlide() {
    // console.log(currentIndex + 1)
    goToSlide(currentIndex + 1);

}

function goToPrevSlide() {
    goToSlide(currentIndex - 1)
}


setInterval(goToNextSlide, 5000)

