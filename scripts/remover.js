var header = document.querySelector('header');
var headerInner = header.querySelector('.header-inner');
var yes = document.querySelector('.yes');
var header = document.querySelector('.header');
var main = document.querySelector('.main');
var sectionOne = document.querySelector('.one');

yes.addEventListener('click', function () {
  headerInner.style = 'opacity: 0;transform:translateY(-500px);';
  function func() {
    // headerInner.style = 'display:none;';
    // header.style = 'height:0px;';
    main.style = 'visibility:visible;';
    sectionOne.style = 'transform: translateY(0px);'
  }
  
  setTimeout(func, 500);
});