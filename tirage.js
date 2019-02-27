function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    return array;
}



var tirage = ["Dylan","Adrien", "Laura", "Julien", "Louiy", "Nordine", "Morgan", "Romain", "Alexandre", "Marine", 
    "Louison", "Thomas", "Philippe"];

    tirage = shuffle(tirage);

    function affichage() {
        var ul = document.createElement('ul');
        ul.setAttribute('id', 'monUl');
        document.body.appendChild(ul);

    for(i = 1; i <= tirage.length -1; i++) {
        var il = document.createElement('li');
        il.setAttribute('class', 'li');
        il.innerHTML = tirage[i];
        ul.appendChild(il);
    }
    
}

