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
