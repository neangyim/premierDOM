document.getElementById('root').innerHTML= 'Hello world';
var neangUL =document.createElement('ul');
var div =document.getElementById('root');
div.appendChild(neangUL);


var boite =["F","S","B","O","C",];

for (var x = 0;x<boite.length;x++){
	
	var sreyLI = document.createElement('li');

	neangUL.appendChild(sreyLI).innerHTML=boite[x];

}



var button = document.createElement('input');
button.type="button";
button.value='Hello';
div.appendChild(button);

function pp(){
	var prenom=prompt (' Qul est votre nom ');
	if (prenom === null || prenom == ''){
		alert('error')
	}
	else alert('Bonjour je m\'appelle'+prenom);
}

button.addEventListener('click', pp);