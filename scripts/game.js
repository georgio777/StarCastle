var playGround = document.querySelector('.playground');

var playerName = ['Starkiller'];

playGround.style = 'display:none;';

var nameInput = document.getElementById('name');
var submitButton = document.querySelector('.submit-name');
var nameSection = document.querySelector('.chooseName');

function startTheGame() {
  var ufo = document.querySelector('.ufo'); 

  var borders = playGround.getBoundingClientRect();

  var blackHole = document.querySelector('.black-hole').getBoundingClientRect();
  var earth = document.querySelector('.earth').getBoundingClientRect();
  var mars = document.querySelector('.mars').getBoundingClientRect();
  var venus = document.querySelector('.venus').getBoundingClientRect();




  function init(){
    ufo.style.position='absolute';
    ufo.style.left='0px';
    ufo.style.top='0px';
  }
          
  var direction = 'right';

  // move player functions
  function moveLeft(){
    ufo.style.transform = 'rotate(-180deg)'
    ufo.style.left = parseInt(ufo.style.left)-5 +'px';
    direction = 'left';
  }
  function moveUp(){
    ufo.style.transform = 'rotate(-90deg)'
    ufo.style.top = parseInt(ufo.style.top)-5 +'px';
    direction = 'up';
  }
  function moveRight(){
    ufo.style.transform = 'rotate(0deg)'
    ufo.style.left = parseInt(ufo.style.left)+5 +'px';
    direction = 'right';
  }
  function moveDown(){
    ufo.style.transform = 'rotate(90deg)'
    ufo.style.top = parseInt(ufo.style.top)+5 +'px';
    direction = 'down';
  }

  var items = {
    boxKey: false,
    box: false,
    princess: false,
    message: false
  };

  var messageWindow = document.querySelector('.message');
  var pictureArea = document.querySelector('.left');
  var textArea = document.querySelector('.right');

  // building pop-up message while game progress function;

  function showMessage(imgSrc, messageForPlayer) {
    messageWindow.style = 'display: flex;justify-content: space-between;align-items: center;';
    var picture = document.createElement('img');
    picture.src = imgSrc;
    picture.style = 'height:400px;'
    pictureArea.appendChild(picture);

    var text = document.createElement('p');
    text.textContent = messageForPlayer;
    textArea.appendChild(text);

    var buttonSkip = document.createElement('button');
    buttonSkip.textContent = 'Skip';
    buttonSkip.classList.add('button-skip');
    buttonSkip.classList.add('button-style');
    textArea.appendChild(buttonSkip);

    buttonSkip.addEventListener('click', function() {
      messageWindow.style = 'display: none;'
      pictureArea.removeChild(picture);
      textArea.removeChild(text);
      textArea.removeChild(buttonSkip);
    });
  };

  function createNewWorld() {
    var blackHole = document.querySelector('.black-hole');
    var earth = document.querySelector('.earth');
    var mars = document.querySelector('.mars');
    var venus = document.querySelector('.venus');
    var buttonSkip = document.querySelector('.button-skip');
    buttonSkip.addEventListener('click', function() {
      earth.style = 'animation-name:reach-the-sun;animation-duration:5s;animation-timing-function:ease;animation-fill-mode:forwards;'
      mars.style = 'animation-name:reach-the-sun;animation-duration:5s;animation-timing-function:ease;animation-fill-mode:forwards;'
      venus.style = 'animation-name:reach-the-sun;animation-duration:5s;animation-timing-function:ease;animation-fill-mode:forwards;'


      function turnToABlackHole() {
        blackHole.style='transform: scale(0);'
        function makeHoleBlack() {
          blackHole.style='transform: scale(0.8);background:black;border:10px solid white;'
          var lastMessage = document.querySelector('.last-message');
          lastMessage.style = 'display:flex;';

          var buttonSkipTwo = document.querySelector('.skip-two');
          buttonSkipTwo.addEventListener('click', function() {
            var curtains = document.querySelector('.curtains')
            curtains.style = 'opacity:1;display:block;z-index: 100;';

            function showGalaxy() {
              curtains.style = 'opacity:0;';
              lastMessage.remove();
              blackHole.remove();
              document.querySelector('.galaxy').style = 'display:block';
              window.socials.style='display:flex;';
              var listenOnSoundcloud = document.createElement('a');
              listenOnSoundcloud.href = 'https://soundcloud.com/bountytweex/satellite';
              listenOnSoundcloud.textContent = 'Listen on Souncloud';
              listenOnSoundcloud.classList.add('listen-on-soundcloud');
              listenOnSoundcloud.classList.add('click');
              playGround.appendChild(listenOnSoundcloud);
              function createAudioPlayer(){
                var audioPlayer = document.querySelector('audio');
                if (audioPlayer == null) {
                } else {
                  audioPlayer.remove();
                }              
                var audioTwo = document.createElement('audio');
                audioTwo.setAttribute("controls", "");
                audioTwo.setAttribute("autoplay", "");
                var sourceTwo = document.createElement('source');
                sourceTwo.src = 'music/8bit.mp3'
                audioTwo.appendChild(sourceTwo);
                playGround.appendChild(audioTwo);
              }
              createAudioPlayer();
            }
            setTimeout(showGalaxy, 3000);          
          });
        };
        setTimeout(makeHoleBlack, 3000);
      };
      setTimeout(turnToABlackHole, 5000)
    })
  }

  // check coords if we reach any planet
  function reachPlanetHandler(ufoBundle, sun, earthCoords, marsCoords, venusCoords) {

    if (ufoBundle.right+15 > sun.left && ufoBundle.left-15 < sun.right && ufoBundle.top-15 < sun.bottom && ufoBundle.bottom+15 > sun.top){
      var attention = document.querySelector('.attention');
      if (attention == null) {
        var hurts = document.createElement('p');
        hurts.classList.add('attention');
        hurts.textContent = 'Hidden behind the Star';
        hurts.style = 'color:red;position:absolute;';
        hurts.style.left = ufoBundle.right + 'px';
        hurts.style.top = ufoBundle.bottom + 'px';
        playGround.appendChild(hurts);
        function deleteAttention(){
          var attention = document.querySelector('.attention');
          attention.remove();
        };
        setTimeout(deleteAttention, 3000);
      }
    }
    // earth
    if (ufoBundle.right > earthCoords.left && ufoBundle.left < earthCoords.right && ufoBundle.top < earthCoords.bottom && ufoBundle.bottom > earthCoords.top){
      if (items.box == false && items.boxKey == true) {
        showMessage('img/skipitr.gif', 'The Key opend the box! Congratulations, human. This skipiter will free the princess. Hurry, the star has already begun its transformation.');
      } else if (items.box == false) {
          showMessage('img/skeleton.gif', 'You found the box! Hmm.. its locked.. The Dark Lord was born on Mars. He must be keeping the key somewhere there. Try to find it.');
      }  
      items.box = true;
    }
    // mars
    if (ufoBundle.right > marsCoords.left && ufoBundle.left < marsCoords.right && ufoBundle.top < marsCoords.bottom && ufoBundle.bottom > marsCoords.top){
      if (items.boxKey == false && items.box == true) {
        showMessage('img/skipitr.gif', 'Finally! Rescue her! Nothing will save your world. Free her and escape..');
      } else if (items.boxKey == false) {
        showMessage('img/skeleton.gif', 'You found the key.. It may be useful. Take it with you.');
      }
      items.boxKey = true;
    }
    // venus
    if (ufoBundle.right > venusCoords.left && ufoBundle.left < venusCoords.right && ufoBundle.top < venusCoords.bottom && ufoBundle.bottom > venusCoords.top){
      if (items.box == false || items.boxKey == false) {
        if(items.message == false) {
          showMessage('img/princess.gif', 'Princess is here. But she is under the energy dome. Only a scepter can destroy it.');
        }
        items.message = true;
      }
      if (items.box == true && items.boxKey == true && items.princess == false) {
        enemy.remove();
        var shootSpaceButton = document.querySelector('.shoot');
        shootSpaceButton.remove();
        clearInterval(shootHeroInterval);
        showMessage('img/princess2.gif', 'Princess: - You are a little short to be the villain. ' + playerName[0] + ': - What? Oh... Im ' + playerName[0] +'. Im here to rescue you. Time to escape and find a new world. This Star will now swallow the neighboring planets and turn into a black hole.');
        items.princess=true;
        createNewWorld();    
      }
    }
  };

  // MOVE ENEMY
  var enemy = document.querySelector('.enemy');
  enemy.style.left = '90%';
  enemy.style.top = '-90px';
  function moveEnemy() {
    if (enemy.getBoundingClientRect().bottom < playGround.getBoundingClientRect().bottom) {
    enemy.style.top = enemy.getBoundingClientRect().bottom + 1 + 'px';
    } else {
      enemy.style.top =  - 90 + 'px';
    }
  };
  setInterval(moveEnemy, 1500);
  function enemyCoords(){
    window.currentEnemyCoords = enemy.getBoundingClientRect();
  }

  function shootHero() {
    var audio = new Audio('music/pew.mp3');
    audio.play();
    var enemyBlaster = document.createElement('img');
    enemyBlaster.src = 'ico/blast.png';
    enemyBlaster.style = 'position:absolute;';
    enemyBlaster.style.left = window.currentEnemyCoords.left - 20 + 'px';
    enemyBlaster.style.top = (window.currentEnemyCoords.top + window.currentEnemyCoords.bottom)/2 - 10 + 'px';
    playGround.appendChild(enemyBlaster);
    function moveBlaster() {
      enemyBlaster.style.left = enemyBlaster.getBoundingClientRect().left -21 + 'px';
    };
    setInterval(moveBlaster, 100);
    setTimeout(function(){enemyBlaster.remove();}, 5000);
    var enemyBlasterIntervalCoords = setInterval(function(){window.enemyBlasterCoords = enemyBlaster.getBoundingClientRect();
    },50);
    setTimeout(function(){clearInterval(enemyBlasterIntervalCoords)}, 5000);
  };
  var shootHeroInterval = setInterval(shootHero, 2500);

  setInterval(enemyCoords, 500);

  // MOVE ENEMY END

  var enableShooter = false;

  // listen to keydowns to call move functions
  document.addEventListener('keydown', function(evt){
    var ufoBundles = ufo.getBoundingClientRect();


    if (evt.keyCode == 38) {
      if (ufoBundles.top > 0) {
      moveUp();
      }
    } else if (evt.keyCode == 40) {
      if (ufoBundles.bottom < borders.bottom) {
      moveDown();
      }
    }

    if (evt.keyCode == 37) {
      if (ufoBundles.left > 0) {
      moveLeft();
      }
    } else if (evt.keyCode == 39) {
      if (ufoBundles.right < (borders.right-5)) {
      moveRight();
      }
    }
    reachPlanetHandler(ufoBundles, blackHole, earth, mars, venus);

    // BLAST
    if(evt.keyCode == 32) {
      var audio = new Audio('music/pew.mp3');
      audio.play();
      enableShooter = true;
      if(direction=='right') {
        var blaster = document.createElement('img');
        blaster.src = 'ico/blast.png';
        blaster.style = 'position:absolute;';
        blaster.style.left = ufoBundles.right + 'px';
        blaster.style.top = (ufoBundles.top + ufoBundles.bottom)/2 - 10 + 'px';
        playGround.appendChild(blaster);
        function moveBlaster() {
          blaster.style.left = blaster.getBoundingClientRect().right + 1 + 'px';
        };
        setInterval(moveBlaster, 100);
        setTimeout(function(){blaster.remove();}, 5000);
      }
      if(direction=='down') {
        var blaster = document.createElement('img');
        blaster.src = 'ico/blast.png';
        blaster.style = 'position:absolute;';
        blaster.style.top = ufoBundles.bottom + 'px';
        blaster.style.left = (ufoBundles.left + ufoBundles.right)/2 - 10 + 'px';
        playGround.appendChild(blaster);
        function moveBlaster() {
          blaster.style.top = blaster.getBoundingClientRect().bottom + 1 + 'px';
        };
        setInterval(moveBlaster, 100);
        setTimeout(function(){blaster.remove();}, 5000);
      }
      if(direction=='left') {
        var blaster = document.createElement('img');
        blaster.src = 'ico/blast.png';
        blaster.style = 'position:absolute;';
        blaster.style.left = ufoBundles.left - 20 + 'px';
        blaster.style.top = (ufoBundles.top + ufoBundles.bottom)/2 - 10 + 'px';
        playGround.appendChild(blaster);
        function moveBlaster() {
          blaster.style.left = blaster.getBoundingClientRect().left -21 + 'px';
        };
        setInterval(moveBlaster, 100);
        setTimeout(function(){blaster.remove();}, 5000);
      }
      if(direction=='up') {
        var blaster = document.createElement('img');
        blaster.src = 'ico/blast.png';
        blaster.style = 'position:absolute;';
        blaster.style.top = ufoBundles.top - 20 + 'px';
        blaster.style.left = (ufoBundles.left + ufoBundles.right)/2 - 10 + 'px';
        playGround.appendChild(blaster);
        function moveBlaster() {
          blaster.style.top = blaster.getBoundingClientRect().top - 21 + 'px';
        };
        setInterval(moveBlaster, 100);
        setTimeout(function(){blaster.remove();}, 5000);
      }
      var getBlastCoords = setInterval(function(){
        window.blastCoords = blaster.getBoundingClientRect();
      }, 100);
      function removeGetBlastCoords() {
        clearInterval(getBlastCoords);
      };
      setTimeout(removeGetBlastCoords, 5000);
    }
    // Blast closed
  });
    init();
    function killEnemy(){
      if(enableShooter==true) {
        if(window.blastCoords.right > window.currentEnemyCoords.left-15 && window.blastCoords.top > window.currentEnemyCoords.top-15 && window.blastCoords.bottom < window.currentEnemyCoords.bottom+15 && window.blastCoords.right < window.currentEnemyCoords.right+15) {
          var audio = new Audio('music/boom.mp3');
          audio.play();
          enemy.remove();
          clearInterval(callKillEnemy);
          clearInterval(shootHeroInterval);
        }    
      }
    };
    var callKillEnemy = setInterval(killEnemy, 100);

    setInterval(function(){
      window.heroCoords = ufo.getBoundingClientRect();
    }, 50);

    function killHero(){
      if(window.heroCoords.right > window.enemyBlasterCoords.left && window.enemyBlasterCoords.bottom > window.heroCoords.top && window.enemyBlasterCoords.top < window.heroCoords.bottom) {
        ufo.style.left = '0px';
        ufo.style.top = '0px';
        items.boxKey = false;
        items.box = false;
        items.princess = false;
        items.message = false; 
        var audio = new Audio('music/boom.mp3');
        audio.play();   
      }    
    };
    setTimeout(function(){setInterval(killHero, 100);}, 2500);
};



function startTheStory() {
  var sppechSection = document.querySelector('.speech');
  sppechSection.style = 'display:flex;';
  var speechText = document.querySelector('.speech-text');
  speechText.textContent = 'Greetings, ' + playerName[0] + '. Fate brought you to me. I once was a spirit that keeps a galaxy in balance. But over time, I became old and weak until I finally lost my life. Then, the dark force rose from the bowels of the planet, which I turned into ashes to defeat evil forever. He kidnapped and chained my daughter under an energy dome somewhere in this solar system. He wants to destroy everything that I defended.';

  var buttonNextStep = document.querySelector('.button-next-step');
  var clickCounter = 0;

  function skipTheStory() {
    if (clickCounter==1) {
      // PlayGame
      var story = document.querySelector('.story');
      story.style = 'display:none;';
      playGround.style = 'display:block;';
      startTheGame();
    } else {
      clickCounter = 1;
      speechText.textContent = 'This star will turn into a black hole, this completes his plan. He will die with it. Do not let him destroy everything. Find a weapon that can destroy the energy dome and save my daughter. As long as she lives, a piece of our world will continue to exist in the place where you will find a new life. She is the princess of this galaxy. All that you love will die. But if you stay alive, the memory of humanity will not disappear.';  
    }
  };

  buttonNextStep.addEventListener('click', skipTheStory);
  buttonNextStep.addEventListener('keyDown', function(evt){
    if (evt.keyCode == 13) {
      skipTheStory();
    }
  });
};

submitButton.addEventListener('click', function() {
  if (nameInput.value) {
    playerName[0]=nameInput.value;
    nameSection.style = 'display:none;';  
    startTheStory();
  }
});


// SHOOT

