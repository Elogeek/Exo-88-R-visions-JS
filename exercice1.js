let input = document.querySelector('input');
let button = document.createElement('button');
button.innerHTML = "valider";
document.body.append(button);

let valueAll = document.createElement("button");
valueAll.innerHTML = "Toutes les valeur";
document.body.append(valueAll);

let RandomValue = document.createElement("button");
document.body.append(RandomValue);
RandomValue.innerHTML = "Valeur aléatoire";

let deleteAll = document.createElement("button");
deleteAll.innerHTML = "Supprimer tout";
document.body.append(deleteAll);

let deleteLast = document.createElement("button");
deleteLast.innerHTML = "Supprimer le dernier";
document.body.append(deleteLast);

let div1 = document.createElement('div');
div1.style.color = "orange";
div1.style.fontSize = "20px";
div1.style.fontFamily ="cursive";
div1.id = "div1";
document.body.prepend(div1);

let div2 = document.createElement('div');
div2.id ="div2";
document.body.append(div2);
let div3 = document.createElement("div");
div3.id = "div3";
document.body.append(div3);

let array = [];

if(array.length < 10) {
    div1.innerHTML = "Entrez au moins 10 valeurs";
}

button.addEventListener("click", function () {
    let value = input.value;
    array.push(value);

    if(array.length === 10) {
        div1.innerHTML = "Valeur aléatoire: " + array[Math.trunc(Math.random() * array.length)];
        div2.innerHTML = "Valeur 5: " + array[5];
    }

    deleteAll.addEventListener("click", function () {
        div1.innerHTML = "Entrez au moins 10 valeurs";
        div2.innerHTML = "";
        div3.innerHTML = "";
        for(let x = 0; x < array.length; x++) {
            array.pop();
        }
    });

    RandomValue.addEventListener("click", function () {
        div3.innerHTML = "Valeur aléatoire: " + array[Math.trunc(Math.random() * array.length)];
    });

    valueAll.addEventListener("click", function () {
        div3.innerHTML = "";
        for(let x = 0; x < array.length; x++) {
            div3.innerHTML += x + " - " + array[x] + "<br>";
        }

    });
});

deleteLast.addEventListener("click", function () {
    array.pop();
});