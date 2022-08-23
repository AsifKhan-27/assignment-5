console.log('add-players');

function numberOfPlayers(listId){
	// const nodeList=document.getElementById(listId).childNodes;
	const nodeList=document.getElementById(listId).getElementsByTagName('li');
	const number=nodeList.length;
	return number;
}

console.log(numberOfPlayers('player-list'));

function addPlayerToList(playerName){
	// get players list element
	const playersList=document.getElementById('player-list');

	// Add li to player list
	const li=document.createElement('li');
	li.innerText=playerName;
	playersList.appendChild(li);
}



document.getElementById('btn-p1').addEventListener('click',function(){
	const playerNameElement=document.getElementById('name-p1');
	const playerName=playerNameElement.innerText;

	if (numberOfPlayers('player-list')<5){
		addPlayerToList(playerName);
	}
	else{
		alert("You have already selected 5 players");
	}
});