let slideIndex = 1
const next = (n) => {
    showSlides(slideIndex += n)
}

const prev = (n) => {
    showSlides(slideIndex -= n)
}

const showSlides = (n) => {
    let i
    let slides = document.getElementsByClassName("slide")
    if(n > slides.length) slideIndex = 1
    if (n < 1) slideIndex = slides.length
    for (let index = 0; index < slides.length; index++) {
        slides[index].className = slides[index].className.replace("active", "")  
    }
    slides[slideIndex-1].className += " active"
}

// showSlides(slideIndex)
