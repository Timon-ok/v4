let lastScrollPosition = 0
const navbar = document.querySelector(".navbar")
let isVisible = true
let isScrollingMode = false

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset

  if (currentScrollPosition > 100 && !isScrollingMode) {
    isScrollingMode = true
    navbar.classList.add("scrolling")
  }

  if (isScrollingMode) {
    if (currentScrollPosition < lastScrollPosition && !isVisible) {
      navbar.classList.add("visible")
      isVisible = true
    } else if (currentScrollPosition > lastScrollPosition && isVisible) {
      navbar.classList.remove("visible")
      isVisible = false
    }
  }

  if (currentScrollPosition <= 100) {
    isScrollingMode = false
    navbar.classList.remove("scrolling")
    navbar.classList.remove("visible")
    isVisible = true
  }

  lastScrollPosition = currentScrollPosition
})

document.addEventListener("DOMContentLoaded", () => {
  const contentWrapper = document.querySelector(".content-wrapper")
  contentWrapper.style.animation = "none"
  contentWrapper.offsetHeight 
  contentWrapper.style.animation = null
})

