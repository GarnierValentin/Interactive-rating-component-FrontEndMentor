//Selection de la note puis sauvegarde dans une variable
const listItemElements = document.querySelectorAll('#list li');
let selectedNumber = null;

listItemElements.forEach(function(li) {
    li.addEventListener("click", function() {
        listItemElements.forEach(function(item) {
            item.classList.remove("selected");
        });

        li.classList.add("selected");

        selectedNumber = parseInt(li.innerText, 10);
        console.log('Numéro séléctionner : ', selectedNumber);
    });
});

//Action avec le bouton Submit
//Changement de state
//Puis affichage de la note
const submitButton = document.getElementById('button');
const stateStart = document.getElementById('state-start');
const stateEnd = document.getElementById('state-end');
const selectedNumberElement = document.getElementById('selectedNumber');


submitButton.addEventListener('click', function() {
    if (selectedNumber !== undefined) {
    stateStart.style.display = 'none';
    stateEnd.style.display = 'flex';
    selectedNumberElement.textContent = selectedNumber;
    } else {
        console.log("Veuillez selectionner une note");
    }
});

//Fleche retour à la state start 
const backArrow = document.querySelector('.back-arrow');

backArrow.addEventListener('click', function() {
    stateStart.style.display = 'flex';
    stateEnd.style.display = 'none';
    selectedNumber = null;
    const removeColor = document.querySelector('.selected');
    removeColor.classList.remove('selected');
});