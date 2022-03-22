// var menutoggle = document.querySelector('.menu-toggle input'); //deklarasikan
// var nav = document.querySelector('.navigasi ul');

// menutoggle.addEventListener('click', function(){
//     nav.classList.toggle('slide');
// }); //ketika menu toggle di klik, jalankan fungsi slide

var menutoggle = document.querySelector('.menu-toggle input'); //deklasrsikan menu toggle yang nanti mo tindis
var nav = document.querySelector('.container ul'); //deklarasikan yang mo kse muncul. kalo di css tadi torang kse ilang dpe ul
menutoggle.addEventListener('click', function(){ 
    nav.classList.toggle('slide');
}) // di sini torang kase muncul. jadi pangge itu variabel menutoogle kong kse addEventList spaya pas klik, torang jalankan itu function slide yang torang da bking di css tadi