import {Swiper, Navigation, Pagination, Mousewheel} from "swiper"
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
            type: `bullets`,
            clickable: true,
        },
    })

    // Открытие по кнопке мобильного меню

    const mobileMenu = document.querySelector(`.mobile-menu`)
    const menuBtn = document.querySelector(`.header__mobile-btn`)
    const menuBtnHamburger = document.querySelector(
        `.header__mobile-btn .is_open`
    )
    const menuBtnClose = document.querySelector(`.header__mobile-btn .is_close`)

    menuBtn.addEventListener(`click`, toggleMenu)

    function toggleMenu() {
        if (mobileMenu.classList.contains(`_is-active`)) {
            mobileMenu.classList.remove(`_is-active`)
            menuBtnClose.style.display = `none`
            menuBtnHamburger.style.display = `block`
        } else {
            mobileMenu.classList.add(`_is-active`)
            menuBtnHamburger.style.display = `none`
            menuBtnClose.style.display = `block`
        }
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

    // Вызов формы поиска
    const BtnSearchClose = document.querySelector(`.search-overlay__close-icon`)
    const BtnSearchOpen = document.querySelector(`.header__search`)
    const searchForm = document.querySelector(`.search-overlay`)

    BtnSearchOpen.addEventListener(`click`, () => {
        searchForm.classList.add(`active`)
    })

    BtnSearchClose.addEventListener(`click`, () => {
        searchForm.classList.remove(`active`)
    })
})
