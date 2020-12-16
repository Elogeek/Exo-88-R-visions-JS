let valeur = document.querySelector('input');
let button = document.createElement('button');
valeur.appendChild(button);
let div1 = document.createElement('div');
valeur.append(div1);
let div2 = document.createElement('div');
valeur.append(div2);

button.style.borderRadius = 15 + "px";
button.style.backgroundColor = "turquoise";
button.innerHTML = "valider";
valeur.appendChild(button);
button.addEventListener("click", function (e){
    console.log("on m'a touché!");
    this.value = ["value"];


})




