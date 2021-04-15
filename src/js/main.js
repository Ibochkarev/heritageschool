import { Swiper, Navigation, Pagination, Mousewheel } from "swiper"
Swiper.use([Navigation, Pagination, Mousewheel])

document.addEventListener(`DOMContentLoaded`, () => {
    const homeSlider = new Swiper(`.home-slider .swiper-container`, {
        loop: false,
        speed: 2400,
        navigation: {
            nextEl: `.swiper-button-next-main`,
            prevEl: `.swiper-button-prev-main`,
        },
        pagination: {
            el: `.swiper-pagination-main`,
            clickable: true,
        },
        on: {
            afterInit: function () {
                let totalNumber = this.pagination.bullets.length
                this.el.querySelector(".swiper-pagination-total").innerText =
                    totalNumber < 10 ? `0${totalNumber}` : totalNumber
                let currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(".swiper-pagination-num").innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            },
            activeIndexChange: function () {
                let currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(".swiper-pagination-num").innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            },
        },
    })

    const teamSlider = new Swiper(".team-slider", {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination-team",
            clickable: true,
        },
        slidesPerColumnFill: "row",
        on: {
            afterInit: function () {
                let totalNumber = this.pagination.bullets.length
                let currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(".swiper-pagination-total").innerText =
                    totalNumber < 10 ? `0${totalNumber}` : totalNumber
                this.el.querySelector(".swiper-pagination-num").innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            },
            activeIndexChange: function () {
                let currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(".swiper-pagination-num").innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            },
        },
    })

    const feedbackSlider = new Swiper(".feedback-slider", {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination-feedback",
            clickable: true,
        },
        slidesPerColumnFill: "row",
        on: {
            afterInit: function () {
                let totalNumber = this.pagination.bullets.length
                let currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(".swiper-pagination-total").innerText =
                    totalNumber < 10 ? `0${totalNumber}` : totalNumber
                this.el.querySelector(".swiper-pagination-num").innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            },
            activeIndexChange: function () {
                let currentNumber = Number(this.activeIndex) + 1
                this.el.querySelector(".swiper-pagination-num").innerText =
                    currentNumber < 10 ? `0${currentNumber}` : currentNumber
            },
        },
    })

    // Карточка кампуса

    const campusBtn = document.querySelectorAll(`.camspus-item__btn`)

    campusBtn.forEach((el) => {
        el.addEventListener("click", toggleCampus)
    })

    function toggleCampus(e) {
        e.preventDefault()
        const toggleTarget = e.target.classList.contains("camspus-item")
            ? e.target.parentNode
            : e.target.classList.contains("camspus-item")
            ? e.target
            : e.target.closest(".camspus-item")

        if (toggleTarget.classList.contains("is-active")) {
            toggleTarget.classList.remove("is-active")
        } else {
            toggleTarget.classList.add("is-active")
        }
    }

    // Открытие по кнопке мобильного меню

    const mobileMenu = document.querySelector(`.mobile-menu`)
    const menuBtn = document.querySelector(`.header__mobile-btn`)
    const menuBtnHamburger = document.querySelector(
        `.header__mobile-btn .is_open`
    )
    const menuBtnClose = document.querySelector(`.mobile-menu__close`)

    menuBtn.addEventListener(`click`, toggleMenu)

    menuBtnClose.addEventListener(`click`, closeMobileMenu)

    function toggleMenu() {
        if (mobileMenu.classList.contains(`_is-active`)) {
            mobileMenu.classList.remove(`_is-active`)
            menuBtnHamburger.style.display = `block`
        } else {
            mobileMenu.classList.add(`_is-active`)
            menuBtnHamburger.style.display = `none`
        }
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove(`_is-active`)
    }

    // Открытие под меню

    const mobileLevelItem = document.querySelectorAll(
        `.mobile-menu__sub-item, .is-sub .mobile-menu__link`
    )

    mobileLevelItem.forEach((el) => {
        el.addEventListener(`click`, toggleLevelMenu)
    })

    function toggleLevelMenu(e) {
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
})
