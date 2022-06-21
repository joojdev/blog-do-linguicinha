const sideBarElement = document.querySelector('#sidebar')
const closeButtonElement = document.querySelector('#closeButton')
const sidebarOpenElement = document.querySelector('#sidebarOpen')
const blackScreenElement = document.querySelector('#blackScreen')

sidebarOpen.addEventListener('click', openSidebar)

closeButtonElement.addEventListener('click', closeSidebar)
blackScreenElement.addEventListener('click', closeSidebar)

function closeSidebar() {
  sideBarElement.style.width = '0'
  blackScreenElement.style.opacity = '0'
  blackScreenElement.style.pointerEvents = 'none'
}

function openSidebar() {
  sideBarElement.style.width = '230px'
  blackScreenElement.style.opacity = '.5'
  blackScreenElement.style.pointerEvents = 'auto'
}