

document.getElementById("root").innerHTML="Bonjour je m'appelle Yim";
//crée la balise UL
var newUL = document.createElement('ul');

var div = document.getElementById("root");
//ajouter la balise ul
div.appendChild(newUL);

//crée une balise LI
var newli = document.createElement('li');
newli.innerHTML = "Poi";
newUL.appendChild(newli);

var newli2 = document.createElement('li');
newli2.innerHTML = "Fraise";
newUL.appendChild(newli2);

var newli3 =document.createElement('li');
newli3.innerHTML ="Pomme";
newUL.appendChild(newli3);

var newli4 =document.createElement('li');
newli4.innerHTML ="Bannane";
newUL.appendChild(newli4);

var newli5 =document.createElement('li');
newli5.innerHTML="Cerise";
newUL.appendChild(newli5);

function myFuntion() {
	var txt;
	var person  = prompt ("entrez votre nom" ,);
	if (person ==null || person ==""){
		txt="Au revoir";
		
	}
	else{
		txt = "Bonjour,je m'appelle " + person ;
	}
	document.getElementById("pop").innerHTML=txt;
}








/*

var div = document.getElementById('root');
div.appendChild(newUL);

div.appendChild(li);
var arrword ={'temi1','temi2','temi3','temi4','temi5'}
for (var i = 0 ; i <arrword.length; i++){
		newDiv.appendChild(i)
li.innerhtml = arrword(i);
}
*/