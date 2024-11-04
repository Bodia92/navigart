document.addEventListener('DOMContentLoaded', function () {
    const headerLinks = document.querySelectorAll('.header__link')
    const offset = 0

    headerLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault()

            const targetId = link.getAttribute('data-id')
            const targetSection = document.getElementById(targetId)

            if (targetSection) {
                const sectionPosition =
                    targetSection.getBoundingClientRect().top +
                    window.scrollY -
                    offset

                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth',
                })
            }
        })
    })
    const blockquoteText = document.getElementById('quoteText')
    if (blockquoteText) {
        const text = blockquoteText.textContent
        blockquoteText.innerHTML = ''

        text.split('').forEach((char) => {
            const span = document.createElement('span')
            span.textContent = char
            blockquoteText.appendChild(span)
        })

        window.addEventListener('scroll', () => {
            const topOffset = blockquoteText.getBoundingClientRect().top
            const windowHeight = window.innerHeight

            if (topOffset < windowHeight && topOffset > 0) {
                Array.from(blockquoteText.children).forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.add('active')
                    }, index * 30)
                })
            }
        })
    }

    const arrowIcons = document.querySelectorAll('.arrow-icon')
    let currentIndex = 0

    function updateClasses() {
        arrowIcons.forEach((icon) => {
            icon.classList.remove('active', 'prev', 'next')
        })

        const prevIndex =
            (currentIndex - 1 + arrowIcons.length) % arrowIcons.length
        const nextIndex = (currentIndex + 1) % arrowIcons.length

        arrowIcons[prevIndex].classList.add('prev')
        arrowIcons[currentIndex].classList.add('active')
        arrowIcons[nextIndex].classList.add('next')

        currentIndex = nextIndex
    }

    setInterval(updateClasses, 400)

    const menuTrigger = document.querySelector('.js-menu-trigger')
    const body = document.body

    menuTrigger.addEventListener('click', () => {
        body.classList.toggle('menu-open')
    })

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
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    heroImages.controller.control = heroThumbs
    heroThumbs.controller.control = heroImages

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
