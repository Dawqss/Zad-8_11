var i = 1;
var buttonClick = document.getElementById('button');

function addItemToList() {
	i++;
	var newEl = document.createElement('li');
	var newText = document.createTextNode('item ' + i);
	newEl.appendChild(newText);
	var position = document.getElementById('list')
	position.appendChild(newEl);
}

buttonClick.addEventListener('click', addItemToList, false);
