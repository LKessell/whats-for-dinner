var letsCookBtn = document.querySelector('.submit');
var radioButtons = document.querySelectorAll('input[name="dish_type"]');
var dishPrompt = document.querySelector('.dish-prompt');
var dishResult = document.querySelector('.dish-result');

var cookpot = document.querySelector('.cookpot');

var displayedDish;
var displayedMeal = [];


letsCookBtn.addEventListener('click', function() {
  event.preventDefault();
  hideCookpot();
  showPrompt();
  displayDish();
});

function getDishSelection() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked && radioButtons[i].value !== 'meal') {
      return eval(radioButtons[i].value);
    } else {
      console.log('Got meal time!');
      return 'meal';
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

function displayDish() {
  if (getDishSelection() === 'meal') {
    displayMeal();
  } else {
    displayedDish = getRandomDish(getDishSelection());
    dishResult.innerText = displayedDish + "!";
  }
}

function displayMeal() {
  displayedMeal.push(getRandomDish(mains), getRandomDish(sides), getRandomDish(desserts));
  console.log(displayedMeal);
}
