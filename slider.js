// Slider

    let offset = 0;
    let slideIndex = 0;
    

    const slides = document.querySelectorAll('.slide'),
        slidesWrapper = document.querySelector('.slider-wrapper'),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector('.slider-inner');
    let circles = document.querySelectorAll('.v-circle-p6');
    circles = Array.from(circles);
    
    slidesField.style.width = 1300  + 'px';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });
    window.addEventListener("load",function(){
        offset = localStorage.getItem('Offset');
        slideIndex = localStorage.getItem('Index');
        slidesField.style.transform = `translateX(-${offset}px)`;
        circles[slideIndex].classList.add('active');
        if(offset > 800) {
            offset = 0;
        }
    });
    
    setInterval(() => {
        offset = Number(offset);
        if (offset == (Number(width.slice(0, width.length - 2) * (slides.length - 1)))) {
            offset = 0;
        } else {
            offset += Number(width.slice(0, width.length - 2));
        }
        localStorage.setItem('Offset', offset);
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == (slides.length - 1)) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        for (i = 0; i < circles.length; i++) {
            circles[i].className = circles[i].className.replace(" active", "");
        }
        circles[slideIndex].className += " active";
        localStorage.setItem('Index', slideIndex);
    }, 5000);

    