let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];
let maxScore = 0;
let maxIndex = 0;
// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

function getHighestScoreIndex(){
	
	for(let i = 0; i < scores.length; i++){

		let userScore = scores[i];

		if(userScore>maxScore){
			maxScore = userScore;
			maxIndex = i;
		}
	}
	return maxIndex;
}

// ---> YOUR CODE HERE <---

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---
let highestScoreIndex = getHighestScoreIndex(scores);
console.log(`${students[highestScoreIndex]} has the highest score: ${scores[highestScoreIndex]}`);

// expected output
// Maria has the higest score: 6