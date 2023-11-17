document.addEventListener('DOMContentLoaded', function() {
   /*инициализация интерактивного меню*/
   var sidenav = document.querySelectorAll('.sidenav');
   var instancesSidenav = M.Sidenav.init(sidenav);
   /*инициализация модального окна*/
   var modal = document.querySelectorAll('.modal');
   var instancesModal = M.Modal.init(modal);
   /*инициализация галереи*/   
   var boxed = document.querySelectorAll('.materialboxed');
   var instancesBoxed = M.Materialbox.init(boxed);
 });



 