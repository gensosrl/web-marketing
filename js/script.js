console.log('jala o no')

const languagesMenu = document.querySelector('.menu-bar__langs')
const languageSelected = document.querySelector('.menu-bar__lang-item.selected')

languageSelected.addEventListener('click', e => {
  console.log('e', e)
  languagesMenu.classList.toggle('open');
})



console.log('languagesMenu', languagesMenu)
console.log('languageSelected', languageSelected)