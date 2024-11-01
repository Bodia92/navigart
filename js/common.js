document.addEventListener('DOMContentLoaded', function () {
    const blockquoteText = document.getElementById('quoteText')
    if (blockquoteText) {
        const text = blockquoteText.textContent
        blockquoteText.innerHTML = ''

        // Розбиття тексту на окремі літери
        text.split('').forEach((char) => {
            const span = document.createElement('span')
            span.textContent = char
            blockquoteText.appendChild(span)
        })

        // Додавання класу active при скролі
        window.addEventListener('scroll', () => {
            const topOffset = blockquoteText.getBoundingClientRect().top
            const windowHeight = window.innerHeight

            if (topOffset < windowHeight && topOffset > 0) {
                Array.from(blockquoteText.children).forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.add('active')
                    }, index * 30) // Можете налаштувати затримку
                })
            }
        })
    }

    //sliders

    const heroImages = new Swiper('[data-hero-slider-img]', {
        spaceBetween: 0,
        speed: 800,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    })
    const heroThumbs = new Swiper('[data-hero-slider-trumbs]', {
        speed: 800,
        fadeEffect: { crossFade: true },
        virtualTranslate: true,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    heroImages.controller.control = heroThumbs
    heroThumbs.controller.control = heroImages

    // const sliderMade = new Swiper('[data-made-slider]', {
    //     spaceBetween: 32,
    //     speed: 800,
    //     slidesPerView: 2,
    //     observer: true,
    //     observeParents: true,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    //     breakpoints: {
    //         0: {
    //             slidesPerView: 16,
    //             spaceBetween: 1,
    //         },
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 32,
    //         },
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    // })
    document.querySelectorAll('[data-made-slider]').forEach((sliderElement) => {
        new Swiper(sliderElement, {
            spaceBetween: 32,
            speed: 800,
            slidesPerView: 2,
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    spaceBetween: 32,
                    slidesPerView: 2,
                },
            },
            navigation: {
                nextEl: sliderElement.parentElement.querySelector(
                    '.swiper-button-next'
                ),
                prevEl: sliderElement.parentElement.querySelector(
                    '.swiper-button-prev'
                ),
            },
        })
    })
    //sliders###
})
