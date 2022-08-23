// console.log('add-players');

function numberOfPlayers(listId){
	// const nodeList=document.getElementById(listId).childNodes;
	const nodeList=document.getElementById(listId).getElementsByTagName('li');
	const number=nodeList.length;
	return number;
}

// console.log(numberOfPlayers('player-list'));

function addPlayerToList(playerName){
	// get players list element
	const playersList=document.getElementById('player-list');

	// Add li to player list
	const li=document.createElement('li');
	li.innerText=playerName;
	playersList.appendChild(li);
}

function addPlayer(buttonElement,playerNameElement){
	const playerName=playerNameElement.innerText;

	if (numberOfPlayers('player-list')<5){
		buttonElement.disabled = true;
		buttonElement.style.backgroundColor='grey';
		addPlayerToList(playerName);
	}
	else{
		alert("You have already selected 5 players");
	}
}

document.getElementById('btn-p1').addEventListener('click',function(){
	const buttonElement=document.getElementById('btn-p1');
	const playerNameElement=document.getElementById('name-p1');
	addPlayer(buttonElement,playerNameElement);
	
});

document.getElementById('btn-p2').addEventListener('click',function(){
	const buttonElement=document.getElementById('btn-p2');
	const playerNameElement=document.getElementById('name-p2');
	addPlayer(buttonElement,playerNameElement);
	
});

document.getElementById('btn-p3').addEventListener('click',function(){
	const buttonElement=document.getElementById('btn-p3');
	const playerNameElement=document.getElementById('name-p3');
	addPlayer(buttonElement,playerNameElement);
	
});

document.getElementById('btn-p4').addEventListener('click',function(){
	const buttonElement=document.getElementById('btn-p4');
	const playerNameElement=document.getElementById('name-p4');
	addPlayer(buttonElement,playerNameElement);
	
});

document.getElementById('btn-p5').addEventListener('click',function(){
	const buttonElement=document.getElementById('btn-p5');
	const playerNameElement=document.getElementById('name-p5');
	addPlayer(buttonElement,playerNameElement);
	
});

document.getElementById('btn-p6').addEventListener('click',function(){
	const buttonElement=document.getElementById('btn-p6');
	const playerNameElement=document.getElementById('name-p6');
	addPlayer(buttonElement,playerNameElement);
	
});