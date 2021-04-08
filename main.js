var letsCookBtn = document.querySelector('.submit');
var radioButtons = document.querySelectorAll('input[name="dish_type"]');
var dishPrompt = document.querySelector('.dish-prompt');
var dishResult = document.querySelector('.dish-result');

var cookpot = document.querySelector('.cookpot');


letsCookBtn.addEventListener('click', function() {
  event.preventDefault();
  getSelectedDish();
  hideCookpot();
  showPrompt();
});

function getSelectedDish() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return radioButtons[i].value;
    }
  }
}

function hideCookpot() {
  cookpot.classList.add('hidden');
}

function showPrompt() {
  dishPrompt.classList.remove('hidden');
}

function getRandomDish(dishType) {
  var randomDish = dishType[Math.floor(Math.random() * dishType.length)];
  return randomDish;
}
