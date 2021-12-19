function slidesPlugin(activeSlide=0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')
    
    //цикл для обхода массива
    for(const slide of slides){
        slide.addEventListener('click', () => { //прослушивание клика
            clearActiveClasses()
    
            slide.classList.add('active') //при клике добавляем класс active чтобы была анимации
        })
    }
    
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
    
}
slidesPlugin()