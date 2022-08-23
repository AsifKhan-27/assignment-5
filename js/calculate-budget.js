console.log('calculate-budget');

function getBudget(elementId){
	const inputElement=document.getElementById(elementId);
	const inputString=inputElement.value;
	const input=parseInt(inputString);
	return input;
}

function calculatePlayerExpenses(perPlayerBudget){
	const number=numberOfPlayers('player-list');
	const playerExpenses=number*perPlayerBudget;
	return playerExpenses;
}

function setElementValue(elementId,value){
	const element=document.getElementById(elementId);
	element.innerText=value;
}

function calculateTotalBudget(players,manager,coach){
	const total=players+manager+coach;
	return total;
}


document.getElementById('calculate-btn').addEventListener('click',function(){
	const perPlayerBudget=getBudget('per-player-budget');
	const playerExpenses=calculatePlayerExpenses(perPlayerBudget);
	setElementValue('player-expenses',playerExpenses);
});

document.getElementById('calculate-total-btn').addEventListener('click',function(){
	const managerBudget=getBudget('manager-budget');
	const coachBudget=getBudget('coach-budget');

	const playerExpensesString=document.getElementById('player-expenses').innerText;
	const playerExpenses=parseInt(playerExpensesString);

	const totalBudget=calculateTotalBudget(playerExpenses,managerBudget,coachBudget);
	setElementValue('total',totalBudget);
});