/**script dibawah ini untuk menjalankan fungsi menu toggle pada ukuran mobile **/

//untuk menyeleksi class menu-toggle
const menu = document.querySelector('.menu-toggle');

//untuk menyeleksi class nav ul
const navMenu = document.querySelector('nav ul');


// pada saat di klik, menu nav bar(nav ul) akan muncul. untuk menghilangkannya, klik kembali menu toggle tersebut
menu.addEventListener('click', function(){
  //pada saat di klik, class menu-toggle akan memunculkan class baru yaitu class active dan tampilan berubah menjadi tanda silang
  menu.classList.toggle('active');
  //pada saat di klik, class menu-toggle akan memunculkan class baru yaitu class actived
  navMenu.classList.toggle('actived')
});