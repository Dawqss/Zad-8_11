var i = 1,
	buttonClick = document.getElementById('button'),
	position = document.getElementById('list');

function addItemToList() {
	var newEl = document.createElement('li'),
		newText = document.createTextNode('item ' + i);
	i++;
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

buttonClick.addEventListener('click', addItemToList, false);
