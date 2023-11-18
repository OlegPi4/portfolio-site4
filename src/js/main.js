document.addEventListener('DOMContentLoaded', function() {

  /*Блок инициализации элементов Materialize*/
  /*инициализация интерактивного меню*/
   var sidenav = document.querySelectorAll('.sidenav');
   var instancesSidenav = M.Sidenav.init(sidenav);
   /*инициализация модального окна*/
   var modal = document.querySelectorAll('.modal');
   var instancesModal = M.Modal.init(modal);
   /*инициализация галереи*/   
   var boxed = document.querySelectorAll('.materialboxed');
   var instancesBoxed = M.Materialbox.init(boxed);
   

   /*Другие элементы и события сайта*/
   /*обработка нажатия иконки search*/
   const searchMenu = document.querySelector('.search-menu')
   const searchSide = document.querySelector('.search-side')
   const searchBox = document.querySelector('.search-box')
   const searchSBox = document.querySelector('.searchS-box')
   const closeSearch = document.querySelector('.close-icon')
   const closeSSearch = document.querySelector('.closeS-icon')
   const liSearch = document.querySelector('.li-search')
   const headerMenu = document.querySelector('.header__menu')
   const burger = document.querySelector('.burger')
   searchMenu.addEventListener('click', () => {
      searchBox.style.cssText += `
      display: flex;
      `     
      headerMenu.style.cssText += `
      display: none;
      `
    }) 
   closeSearch.addEventListener('click', () => {
    const docWidth = document.documentElement.clientWidth
    searchBox.style.cssText += `
      display: none;
      `  
    if (docWidth>676) {
      headerMenu.style.cssText += `
        display: flex;
        `
    } else {
      burger.style.cssText += `
      display: block;
      `
    }  
   }) 
  searchSide.addEventListener('click', () => {
      searchSBox.style.cssText += `
      display: flex;
      `  
      liSearch.style.cssText += `
      display: none;
      `
    })

  closeSSearch.addEventListener('click', () => {
      searchSBox.style.cssText += `
      display: none;
      `
      liSearch.style.cssText += `
      display: block;
      `     
     }) 
 


}, false);
/*отображение меню или бургера в зависимомти от изменения ширины екрана*/
window.addEventListener('resize', () => {
  const width = document.documentElement.clientWidth
  const headerMenu = document.querySelector('.header__menu')
  const burger = document.querySelector('.burger')
  const imgBurger = document.querySelector('.img-burger') 
  if (width > 676) {
    headerMenu.style.cssText += `
      display: flex;
    `
    burger.style.cssText += `
      display: none;
    `
    imgBurger.style.cssText += `
      display: none;
    `
    imgBurger
  } else if (width < 676){
    headerMenu.style.cssText += `
      display: none;
    `
    burger.style.cssText += `
      display: block;
    `
    imgBurger.style.cssText += `
      display: block;
    `
  }  
})


 