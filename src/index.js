
// imports Fremworks and libarary and more 

// File Bootstrap V4.5 RTL
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';

// Files scss
import './scss/style.scss';


// Files css 
import './css/style.css';
import './css/style_pages.css';
import './css/style-freelancer.css';
import './css/style-ux.css';
import './css/book-html.css';

// File Jquery
import 'jquery/src/jquery';

// File Fontawson latest version 
import '@fortawesome/fontawesome-free/js/all.min';

// File Bootstrap.js v4.5
import 'bootstrap/dist/js/bootstrap.min.js';

// File popper.js Latest version
import 'popper.js/dist/popper.min';





////// script JS and JQ   //////

  


$(document).ready(function () {

   $("a.scroll").on('click', function (event) {
      var hash = this.hash;
     $('html, body').animate({
      scrollTop: $(hash).offset().top}, 800, function(){});
   });
   
}); 

// تم إضافة المنتج للعربة

$('[data-add-to-cart]').click(function(e) {
   Swal.fire(
     ' تمّ إضافة الكتاب للعربة بنجاح',
     'تابع التسوُق',
     'success'
   )
     e.stopPropagation();
});






  