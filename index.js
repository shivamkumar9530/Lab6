

window.addEventListener("keydown", e => {
    console.log(e);
    const charSound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-keycode="${e.keyCode}"]`);
      key.classList.add('press');
    if(!charSound) return;
    charSound.currentTime = 0;
    charSound.play();
  });
  
  function removeTranition(e){
      if(e.propertyName!=="background-color") return;
      e.target.classList.remove('press');
  }
  
  const keys = document.querySelectorAll('.sound');
  
  keys.forEach();
