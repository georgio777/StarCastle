var body = document.querySelector('body');


document.addEventListener('click', function(evt){
  if (evt.target.classList.contains('click')) {
    var playClick = document.createElement('audio');
    playClick.src = 'music/button.wav';
    playClick.setAttribute('autoplay', '');
    playClick.setAttribute('preload', '');
    playClick.style = 'visibility:hidden;position:absolute;bottom:0;left:0;';
    body.appendChild(playClick);
    function deleteClick() {
      playClick.remove();
    };
    setTimeout(deleteClick, 1000);
  }
});

