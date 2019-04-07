var yesTwoBtn = document.querySelector('.yes-two');
var innerOne = document.querySelector('.inner-one');
var gifs = innerOne.querySelectorAll('img');
var noTwoBtn = document.querySelector('.no-two');
var hellPopUp = document.querySelector('.what-a-hell');
var hellPopUpInner = hellPopUp.querySelector('.hell-pop-up');

var clooseBtn = document.querySelector('.cloose');
noTwoBtn.addEventListener('click', function () {
  hellPopUp.classList.remove('invisible');
});

clooseBtn.addEventListener('click', function () {
  hellPopUp.classList.add('invisible');
});

hellPopUpInner.addEventListener('click', function (evt) {
  evt.stopPropagation();
});

hellPopUp.addEventListener('click', function (evt) {
  if (evt.target == hellPopUp) {
    hellPopUp.classList.add('invisible');
  }
});


yesTwoBtn.addEventListener('click', function () {
  var audio = document.createElement('audio');
  audio.setAttribute("controls", "");
  audio.setAttribute("autoplay", "");
  var source = document.createElement('source');
  source.src = 'music/ignition.mp3'
  audio.appendChild(source);
  main.appendChild(audio);
  
    for (var i = 0; i < gifs.length; i++) {
      var gif = gifs[i];
      gif.style = 'opacity: 1;'
    }
});

// HELL

