var letsCookBtn = document.querySelector('.submit');
var radioButtons = document.querySelectorAll('input[name="dish_type"]');

var cookpot = document.querySelector('.cookpot');


letsCookBtn.addEventListener('click', function() {
  event.preventDefault();
  sayBtns();
  hideCookpot();
});

function sayBtns() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      console.log(radioButtons[i]);
    }
  }
}

function hideCookpot() {
  cookpot.classList.add('hidden');
}
