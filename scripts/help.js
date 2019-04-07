// HELP
var help = document.querySelector('.help');
var idkButton = document.querySelector('.idk');

idkButton.addEventListener('click', function () {
  help.style = 'display: block'
});

// BOO
var closeBtn = document.querySelector('.close');
var booPopUp = document.querySelector('.boo-pop-up');
var noBtn = document.querySelector('.no');

noBtn.addEventListener('click', function () {
  booPopUp.classList.remove('invisible');
});

closeBtn.addEventListener('click', function () {
  booPopUp.classList.add('invisible');
});

var popUpInner = document.querySelector('.pop-up-inner');
popUpInner.addEventListener('click', function (evt) {
  evt.stopPropagation();
});

booPopUp.addEventListener('click', function (evt) {
  if (evt.target == booPopUp) {
    booPopUp.classList.add('invisible');
  }
});

