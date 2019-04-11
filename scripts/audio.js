var yesTwoBtn = document.querySelector('.yes-two');
var innerOne = document.querySelector('.inner-one');
var gifs = innerOne.querySelectorAll('img');
var noTwoBtn = document.querySelector('.no-two');
var hellPopUp = document.querySelector('.what-a-hell');
var hellPopUpInner = hellPopUp.querySelector('.hell-pop-up');


// THIS CODE WORKS WHEN YOU PRESS NO IN SECTION ONE
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

// THIS CODE WORKS WHEN YOU PRESS YES AND ADS A PLAYER
yesTwoBtn.addEventListener('click', function () {
  // first check if player is already runing
  var audioPlayer = document.querySelector('audio');
  if (audioPlayer == null) {
    var audio = document.createElement('audio');
    audio.setAttribute("controls", "");
    audio.setAttribute("autoplay", "");
    var source = document.createElement('source');
    source.src = 'music/ignition.mp3'
    audio.appendChild(source);
    main.appendChild(audio);
    audio.style = 'visibility:hidden;';

    // Remove buttons and show gifs
    var questionButtons = document.querySelectorAll('.question-button');

    for (var j = 0; j < questionButtons.length; j++) {
      var questionButton = questionButtons[j];

      function funcTwo(button) {
        button.remove();
      };
      setTimeout(funcTwo, 2200, questionButton);
      questionButton.style = 'transform: scale(3);opacity:0;'
    }   
  }
  
  var buttonsContainer = document.querySelector('.section-one-buttons');

  var bang = document.createElement('img');
  bang.classList.add('bang');
  bang.src = 'img/bang.gif';
  buttonsContainer.appendChild(bang);


  function funcThree () {
    var toNextSectionButton = document.createElement('button');
    toNextSectionButton.classList.add('question-button');
    toNextSectionButton.textContent = 'NEXT';
    buttonsContainer.appendChild(toNextSectionButton);

    toNextSectionButton.addEventListener('click', function (){
      var sectionTwo = document.querySelector('.two');
      var sectionOne = document.querySelector('.one');
      var danceGirl = document.querySelector('.dancing-girl');
      var flyingStar = document.querySelector('.star');
      window.socials = document.querySelector('.socials');

      socials.style = 'display: none;'
      danceGirl.style = 'display: none;'
      flyingStar.style = 'display: none;'
      sectionOne.style = 'display: none;'
      sectionTwo.style = 'display:block;';

    });

    bang.style='opacity:0;';
  };
  setTimeout(funcThree, 2200);



  for (var i = 0; i < gifs.length; i++) {
    var gif = gifs[i];
    gif.style = 'opacity: 1;'
  }
});

// HELL

