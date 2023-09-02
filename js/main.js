var blink = document.querySelector('#blink');
function setRandomAnimationDuration() {
  blink.style.animationDuration = Math.floor(Math.random() * 6 + 1) + "s";
}
 
blink.addEventListener("animationiteration", setRandomAnimationDuration);