console.log('calculate-budget');

function getPerPlayerBudget(){
	const perPlayerInputElement=document.getElementById('per-player-budget');
	const perPlayerInputString=perPlayerInputElement.value;
	const perPlayerInput=parseInt(perPlayerInputString);
	return perPlayerInput;
}

function calculatePlayerExpenses(perPlayerBudget){
	const number=numberOfPlayers('player-list');
	const playerExpenses=number*perPlayerBudget;
	return playerExpenses;
}

function setPlayerExpenses(playerExpenses){
	const playerExpensesElement=document.getElementById('player-expenses');
	playerExpensesElement.innerText=playerExpenses;
}


document.getElementById('calculate-btn').addEventListener('click',function(){
	const perPlayerBudget=getPerPlayerBudget();
	const playerExpenses=calculatePlayerExpenses(perPlayerBudget);
	setPlayerExpenses(playerExpenses);
});