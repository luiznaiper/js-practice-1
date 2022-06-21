
const sidebarBtn = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar')
})


/*
navToggle.addEventListener('click', () => {
  if(links.classList.contains('show-links')){
    links.classList.remove('show-links')
  } else{
    links.classList.add('show-links')
  }
})

*/