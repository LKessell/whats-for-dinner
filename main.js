var letsCookBtn = document.querySelector('.submit');
var radioButtons = document.querySelectorAll('input[name="dish_type"]');

var cookpot = document.querySelector('.cookpot');


letsCookBtn.addEventListener('click', function() {
  event.preventDefault();
  getSelectedDish();
  hideCookpot();
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

function getRandomDish(dishType) {
  var randomDish = dishType[Math.floor(Math.random() * dishType.length)];
  return randomDish;
}
