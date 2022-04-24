const menu = document.querySelector('#menu')
const openMenu = document.querySelector('#menu-open')
const closeMenu = document.querySelector('#menu-close')
const featureClick = document.querySelectorAll('#feature-click')
const companyClick = document.querySelectorAll('#company-click')

function toggleMenu() {
  menu.classList.toggle('translate-x-full')
  openMenu.classList.toggle('hidden')
  closeMenu.classList.toggle('hidden')
}

featureClick.forEach((item) =>
  item.addEventListener('click', () => {
    item.children[1].classList.toggle('hidden')
    item.children[2].classList.toggle('hidden')
    item.children[3].classList.toggle('hidden')

    item.nextElementSibling.children[1].classList.remove('hidden')
    item.nextElementSibling.children[2].classList.add('hidden')
    item.nextElementSibling.children[3].classList.add('hidden')
  })
)

companyClick.forEach((item) =>
  item.addEventListener('click', () => {
    item.children[1].classList.toggle('hidden')
    item.children[2].classList.toggle('hidden')
    item.children[3].classList.toggle('hidden')

    item.previousElementSibling.children[1].classList.remove('hidden')
    item.previousElementSibling.children[2].classList.add('hidden')
    item.previousElementSibling.children[3].classList.add('hidden')
  })
)
