import { Swiper, Navigation, Pagination, Mousewheel } from "swiper"
// import fullpage from "fullpage.js"
import AOS from "../../node_modules/aos/dist/aos"
Swiper.use([Navigation, Pagination, Mousewheel])

// const fullPageInstance = new fullpage("#fullpage", {
//     navigation: true,
//     autoScrolling: true,
//     scrollingSpeed: 1200,
//     responsiveWidth: 768,
//     onLeave: function () {
//         jQuery(".section [data-aos]").removeClass("aos-animate")
//     },
//     onSlideLeave: function () {
//         jQuery(".slide [data-aos]").removeClass("aos-animate")
//     },
//     afterSlideLoad: function () {
//         jQuery(".slide.active [data-aos]").addClass("aos-animate")
//     },
//     afterLoad: function () {
//         jQuery(".section.active [data-aos]").addClass("aos-animate")
//     },
// })

// //methods
// fullpage_api.setAllowScrolling(true)

// AOS.init({
//     duration: 700,
//     easing: "ease-out-quad",
//     once: !0,
//     startEvent: "load",
//     disable: window.innerWidth < 768,
// })

$(window).scroll(function () {
    if ($(window).scrollTop() >= 120) {
        $(`.universal-menu`).addClass(`sticky`)
    } else {
        $(`.universal-menu`).removeClass(`sticky`)
    }
})

$(function () {
    $(`.universal-menu__list-link`).click(function () {
        if (location.pathname.replace(/^\//, ``) == this.pathname.replace(/^\//, ``) && location.hostname == this.hostname) {
            var target = $(this.hash)
            target = target.length ? target : $(`[name=` + this.hash.slice(1) + `]`)
            if (target.length) {
                $(`html,body`).animate({
                    scrollTop: target.offset().top - 200
                }, 1000)
                return false
            }
        }
    })
})

document.addEventListener(`DOMContentLoaded`, () => {
    const homeSlider = new Swiper(`.home-slider .swiper-container`, {
        loop: false,
        speed: 2400,
        navigation: {
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`
        }
        // pagination: {
        //     el: `.swiper-pagination-main`,
        //     clickable: true,
        // },
        // on: {
        //     afterInit: function () {
        //         let totalNumber = this.pagination.bullets.length
        //         this.el.querySelector(".swiper-pagination-total").innerText =
        //             totalNumber < 10 ? `0${totalNumber}` : totalNumber
        //         let currentNumber = Number(this.activeIndex) + 1
        //         this.el.querySelector(".swiper-pagination-num").innerText =
        //             currentNumber < 10 ? `0${currentNumber}` : currentNumber
        //     },
        //     activeIndexChange: function () {
        //         let currentNumber = Number(this.activeIndex) + 1
        //         this.el.querySelector(".swiper-pagination-num").innerText =
        //             currentNumber < 10 ? `0${currentNumber}` : currentNumber
        //     },
        // },
    })

    const teamSlider = new Swiper(`.team-slider`, {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
            el: `.swiper-pagination-team`,
            clickable: true
        },
        slidesPerColumnFill: `row`,
        on: {
            afterInit: function () {
                const totalNumber = this.pagination.bullets.length
                const currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(`.swiper-pagination-total`).innerText =
                    totalNumber < 10 ? `0${totalNumber}` : totalNumber
                this.el.querySelector(`.swiper-pagination-num`).innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            },
            activeIndexChange: function () {
                const currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(`.swiper-pagination-num`).innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            }
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 4
            }
        }
    })

    const feedbackSlider = new Swiper(`.feedback-slider`, {
        // slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        // centeredSlides: true,
        pagination: {
            el: `.swiper-pagination-feedback`,
            clickable: true
        },
        slidesPerColumnFill: `row`,
        on: {
            afterInit: function () {
                const totalNumber = this.pagination.bullets.length
                const currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(`.swiper-pagination-total`).innerText =
                    totalNumber < 10 ? `0${totalNumber}` : totalNumber
                this.el.querySelector(`.swiper-pagination-num`).innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            },
            activeIndexChange: function () {
                const currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(`.swiper-pagination-num`).innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            }
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                loop: true,
                spaceBetween: 30,
                centeredSlides: true
            }
        }
    })

    const gallerySlider = new Swiper(`.gallery-slider`, {
        slidesPerView: 2,
        // loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: `.swiper-pagination-gallery`,
            clickable: true
        },
        slidesPerColumnFill: `row`,
        on: {
            afterInit: function () {
                const totalNumber = this.pagination.bullets.length
                const currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(`.swiper-pagination-total`).innerText =
                    totalNumber < 10 ? `0${totalNumber}` : totalNumber
                this.el.querySelector(`.swiper-pagination-num`).innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            },
            activeIndexChange: function () {
                const currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(`.swiper-pagination-num`).innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            }
        },
        breakpoints: {
            640: {
                spaceBetween: 40
            },
            768: {
                spaceBetween: 50
            },
            992: {
                spaceBetween: 50
            },
            1024: {
                spaceBetween: 120
            }
        }
    })

    const usefulSlider = new Swiper(`.useful-slider`, {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
            el: `.swiper-pagination-useful`,
            clickable: true
        },
        slidesPerColumnFill: `row`
    })

    // Карточка кампуса

    const campusBtn = document.querySelectorAll(`.camspus-item__btn`)

    campusBtn.forEach((el) => {
        el.addEventListener(`click`, toggleCampus)
    })

    function toggleCampus (e) {
        e.preventDefault()
        const toggleTarget = e.target.classList.contains(`camspus-item`)
            ? e.target.parentNode
            : e.target.classList.contains(`camspus-item`)
                ? e.target
                : e.target.closest(`.camspus-item`)

        if (toggleTarget.classList.contains(`is-active`)) {
            toggleTarget.classList.remove(`is-active`)
        } else {
            toggleTarget.classList.add(`is-active`)
        }
    }

    // Открытие по кнопке мобильного меню

    const mobileMenu = document.querySelector(`.mobile-menu`)
    const menuBtn = document.querySelector(`.header__mobile-btn`)
    const menuBtnHamburger = document.querySelector(
        `.header__mobile-btn .is_open`
    )
    const menuBtnClose = document.querySelector(`.mobile-menu__close`)
    const overlay = document.querySelector(`.overlay`)

    menuBtn.addEventListener(`click`, toggleMenu)

    menuBtnClose.addEventListener(`click`, closeMobileMenu)

    function toggleMenu () {
        if (mobileMenu.classList.contains(`_is-active`)) {
            mobileMenu.classList.remove(`_is-active`)
            menuBtnHamburger.style.display = `block`
            overlay.classList.remove(`_is-open`)
        } else {
            mobileMenu.classList.add(`_is-active`)
            overlay.classList.add(`_is-open`)
            menuBtnHamburger.style.display = `none`
        }
    }

    function closeMobileMenu () {
        mobileMenu.classList.remove(`_is-active`)
        overlay.classList.remove(`_is-open`)
    }

    // Открытие под меню

    const mobileLevelItem = document.querySelectorAll(
        `.mobile-menu__sub-item, .is-sub .mobile-menu__link`
    )

    mobileLevelItem.forEach((el) => {
        el.addEventListener(`click`, toggleLevelMenu)
    })

    function toggleLevelMenu (e) {
        e.preventDefault()
        const toggleTarget = e.target.classList.contains(`mobile-menu__link`)
            ? e.target.parentNode
            : e.target.classList.contains(`mobile-menu__sub-item`)
                ? e.target
                : e.target.closest(`.mobile-menu__sub-item`)
        if (toggleTarget.classList.contains(`is-open`)) {
            toggleTarget.classList.remove(`is-open`)
        } else {
            toggleTarget.classList.add(`is-open`)
        }
    }

    const scrollToTopBtn = document.querySelector(`.scroll-top__btn`)

    scrollToTopBtn.addEventListener(`click`, scrollToTop)

    function scrollToTop () {
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        })
    }

    // Price tabs

    if (document.getElementById(`price-block__tab-links`)) {
        (function () {
            function onTabClick (event) {
                event.preventDefault()
                const actives = document.querySelectorAll(`.active`)

                // deactivate existing active tab and panel
                for (let i = 0; i < actives.length; i++) {
                    actives[i].className = actives[i].className.replace(` active`, ``)
                    if (actives[i].closest(`.campuses__item`)) {
                        actives[i].closest(`.campuses__item`).classList.remove(`_show`)
                    };
                }

                // activate new tab and panel
                event.target.className += ` active`
                document.getElementById(event.target.href.split(`#`)[1]).className += ` active`
                event.target.closest(`.campuses__item`).classList.add(`_show`)
            }

            const el = document.getElementById(`price-block__tab-links`)

            el.addEventListener(`click`, onTabClick, false)
        })()
    }
})
