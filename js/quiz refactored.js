let questionsAndAnswers = [
	['Nigeria has how many states?', '36'],
	['"Calabar" is how many letter word?', '7'],
	['"Lagos" is how many letter word?', '5'],
	['What is the capital of Nigeria?', 'Abuja'],
	['Do birds fly?', 'yes'],
	['What is the capital of Akwa Ibom State', 'Uyo']
];

let count = 0;

function printt(){
	document.write(`<div style="color:white; background-color:green;
	padding:10px; font-size:40px; text-align:center">Quiz Game</div>`);
}
printt();

function print(message){
	document.write(`<p>${message}</p>`);
}


let html = '';
let correctAnswers = [];
let wrongAnswer = [];
let correctReply = [];
let wrongReply = [];
let wrongInput = [];
let remarks;

alert(`Welcome to The Quiz App. Please make sure you always
 input your numbers in digits and your answers as a single word. Ready? ;)`);

for(let i = 0; i < questionsAndAnswers.length; i++){
	let answers = prompt(questionsAndAnswers[i][0]);
	let answersArray =[answers];
	let replies = questionsAndAnswers[i][1];
	
	if(answersArray == replies){
		count += 1;
		correctAnswers.push(questionsAndAnswers[i][0]);
		correctReply.push(questionsAndAnswers[i][1]);

		
	} else {
		wrongAnswer.push(questionsAndAnswers[i][0]);
		wrongReply.push(questionsAndAnswers[i][1]);
		wrongInput.push(answers);
	}
}


function callme(){

	let styleForCorrectAnswers = `style="background-color:green; color:white; padding:20px;"`;

	let styleForWrongAnswers = `style="background-color:red; color:white; padding:20px;"`;

	let normalStyling = `style="background-color:grey; color:black; padding:20px;"`;

	print(`<div ${styleForCorrectAnswers}>You've correctly answered ${count} questions</div><br>`);
	if(wrongAnswer.length > 1){
	print(`<div ${styleForWrongAnswers}>You've incorrectly answered ${wrongAnswer.length} questions</div><br>`);
	}

	for(let k = 0; k < correctAnswers.length; k++){
		print(`<div ${styleForCorrectAnswers}>
		The questions you answered correctly are:<br>
		${correctAnswers[k]} which the answer is ${correctReply[k]}</div>`);
	}

	for(let l = 0; l < wrongAnswer.length; l++){
		print(`<div ${styleForWrongAnswers}>
		The questions you didin't answer correctly are:<br>
		${wrongAnswer[l]}. 
		Your answers were ${wrongInput[l]} which the answer is ${wrongReply[l]}</div>`);
	}

	
	if(count >= 5){
		remarks = `Excellent,! You've scored well...`;
	}
	else if(count >= 3){
		remarks = `Good Job. Keep it up...`;
	} else{
		remarks = `You didin't do well, please try again some other time...`;
	}
	print(`<div ${normalStyling}>Admin's Remarks:::: ${remarks} </div>`);
}

callme();