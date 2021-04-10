var letsCookBtn = document.querySelector('#lets-cook');
var radioButtons = document.querySelectorAll('input[name="dish_type"]');
var clearBtn = document.querySelector('#clear');
var dishPrompt = document.querySelector('#should-make');
var dishResult = document.querySelector('#dish-result');
var errorMsg = document.querySelector('#form-error');

var cookpot = document.querySelector('#cookpot');

var displayedDish;


letsCookBtn.addEventListener('click', function() {
  event.preventDefault();
  displayDish();
});

clearBtn.addEventListener('click', clearDish);


function getDishSelection() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked && radioButtons[i].value === 'meal') {
      return 'meal';
    } else if (radioButtons[i].checked) {
      return eval(radioButtons[i].value);
    }
  }
  return false;
}

function changeDishView() {
  hideCookpot();
  showPrompt();
  clearBtn.classList.remove('hidden');
  errorMsg.classList.add('hidden');
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
  if (!getDishSelection()) {
    displayError();
  } else if (getDishSelection() === 'meal') {
    changeDishView();
    displayMeal();
  } else {
    changeDishView();
    displayedDish = getRandomDish(getDishSelection());
    dishResult.classList.remove('entire-meal');
    dishResult.innerText = displayedDish + "!";
  }
}

function displayMeal() {
  dishResult.classList.add('entire-meal');
  dishResult.innerText = `${getRandomDish(mains)} with a side of ${getRandomDish(sides)} and ${getRandomDish(desserts)} for dessert!`;
}

function clearDish() {
  cookpot.classList.remove('hidden');
  dishPrompt.classList.add('hidden');
  dishResult.innerText = '';
  clearBtn.classList.add('hidden');
}

function displayError() {
  errorMsg.classList.remove('hidden');
}
