// Detecting Keyboard Press
document.addEventListener("keydown", function(e){
  console.log(e);
  getSound(e.key.toLowerCase());
  buttonAnimation(e.key.toLowerCase());
});

// if (e.which === 87 || e.wich === 119){
//   getSound(e.key);} else if (e.which === 65 || e.wich === 97){
//   getSound("a");} else if (e.which === 83 || e.wich === 115){
//   getSound("s");} else if (e.which === 68 || e.wich === 100){
//   getSound("d");} else if (e.which === 74 || e.wich === 106){
//   getSound("j");} else if (e.which === 75 || e.wich === 107){
//   getSound("k");} else if (e.which === 76 || e.wich === 108){
//   getSound("l");}
// getSound(String(e.wich));


// Detecting Button Press
var numberOfDrumButton = document.querySelectorAll('.drum').length;
for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", function(){
    getSound(this.innerHTML);//document.querySelectorAll('.drum')[0].innerHTML
    buttonAnimation(this.innerHTML);
  })
}

function getSound(key) {
  switch (key) {
    case "w":
      new Audio('sounds/tom-1.mp3').play();
      break;
    case "a":
      new Audio('sounds/tom-2.mp3').play();
      break;
    case "s":
      new Audio('sounds/tom-3.mp3').play();
      break;
    case "d":
      new Audio('sounds/tom-4.mp3').play();
      break;
    case "j":
      new Audio('sounds/snare.mp3').play();
      break;
    case "k":
      new Audio('sounds/crash.mp3').play();
      break;
    case "l":
      new Audio('sounds/kick-bass.mp3').play();
    default:
      console.log(key)
  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(()=>{activeButton.classList.remove('pressed');}, 100);

}
