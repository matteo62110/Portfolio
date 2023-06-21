const items = document.querySelectorAll('.img');
if (items && items.length > 0) {
    // Votre code de manipulation des éléments ici
  } else {
    console.error("Aucun élément avec la classe '.img' n'a été trouvé.");
  }
const nbSlide = items.length;
const suivant = document.querySelector('.btn-nav.right');
const precedent = document.querySelector('.btn-nav.left');
let count = 0;
function slideSuivante() {
    items[count].classList.remove('active');

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
    console.log(count);
}
suivant.addEventListener('click', slideSuivante);

function slidePrecedente() {
    items[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active');
    console.log(count);
}
precedent.addEventListener('click', slidePrecedente);

function keyPress(e) {
    console.log(e);
    if (e.keyCode === 37) {
        slidePrecedente();
    } else if (e.keyCode === 39) {
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress);