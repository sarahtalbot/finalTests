//Begin general Function Setup

const changeText = (element, newText) =>{
	element.innerHTML = newText;

};

const findResponse = (radioButtonClass) =>{
	// console.log(`Which response is [${radioButtonClass}]?`);
	
	let ratingResponse = 'default';

	if(radioButtonClass === 'rate-one'){
		ratingResponse = 'There were problems';	
	}

	else if(radioButtonClass === 'rate-two'){
		ratingResponse = 'I experienced good things and bad things';
	}

	else if(radioButtonClass === 'rate-three'){
		ratingResponse = 'I had a great time';
	}

	else{
		ratingResponse = 'error';
	}
	return ratingResponse;

};


const characterResponse = (radioButtonName, elementClass) =>{
	const response = findResponse(radioButtonName);
	const element = document.querySelector(elementClass);
	changeText(element, response);
};



const isAnythingChecked = (name) =>{
	const checkedItems = document.querySelectorAll(`input[name=${name}]:checked`);
	return checkedItems.length>0;
} 

const findCheckedValue = (name) =>{
	const checkedItems = document.querySelectorAll(`input[name=${name}]:checked`);
	return checkedItems[0].getAttribute('value');

}


const findQuestionTwo = (buttonPressedValue) =>{
	let questionTwoOption = 'default';

	if(buttonPressedValue === 'rate-one'){
		questionTwoOption = 'What can we do better?';	
	}

	else if(buttonPressedValue === 'rate-two'){
		questionTwoOption = 'What made the good things stand out?';
	}

	else if(buttonPressedValue === 'rate-three'){
		questionTwoOption = 'What was your favorite part of your visit?';
	}

	else{
		questionTwoOption = 'error';
	}
	return questionTwoOption;

};

const setQuestionTwo = (value, elementClass) =>{
	const questionTwoText = findQuestionTwo(value);
	const element = document.querySelector(elementClass);
	changeText(element, questionTwoText);

}


/*
To Do:

-Define functions to validate input of all forms
	-if input is in, submit will owrk

-Define Functions for submitting forms

-Define function for coloring in different numbers of stars for the radio button
*/


// End general Function setup

//Set Up Animation Functions


/*pseudocode for arrow buttons

const leftArrowAnimationOf = bodymovin.loadanimation(leftArrowAnimationFile){
	animation settinga
	play frames 0-11
	hold last frame

}



const leftArrowAnimationOff = bodymovin.loadanimation(leftArrowAnimationFile){
	animation settinga
	play frames 12-24;
	hold last frame

}


const rightArrowAnimationOf = bodymovin.loadanimation(rightArrowAnimationFile){
	animation settinga
	play frames 0-11
	hold last frame

}



const rightrrowAnimationOff = bodymovin.loadanimation(rightArrowAnimationFile){
	animation settinga
	play frames 12-24;
	hold last frame

}


store 'do animation' functions in variables to pass into event listeners


add event listener to left arrow button - mouseover
	(mouseover, doLeftArrowOn)
add event listerer to left arrow - mouseout
	(mouseout, doLeftArrowOff)
add event listener right arrow button - mouseover
	(mouseover, dorightArrowOn)
add event listerer to right arrow - mouseout
	(mouseout, dorightArrowOff)


*/

/*
PseudoCode for Character animation

const idleAnimation = bodymovin.loadAnimation(){}
	Unless anything else happens, loop the idle animation

const happyAnimation = bodymovin.loadAnimation(){}

const questionAnimation = bodymovin.loadAnimation(){}

const sadAnimation = bodymovin.loadAnimation(){}

const listeningAnimation = bodymovin.loadAnimation(){}

const stompAnimation = bodymovin.loadAnimation(){}


event listeners for character animation:

when radio button for rate 1 is clicked
	run sadAnimation
	hold  end pose until a new button is chosn, or the next page button is pressed

when radio button for rate 2 is clicked
	run questionAnimation
	hold  end pose until a new button is chosn, or the next page button is pressed

when radio button for rate 3 is clicked
	run happyAnimation
	hold  end pose until a new button is chosn, or the next page button is pressed


when typing field is active
	run listeningAnimation
	loop until the field is not active


when user submits form information
	if any required forms are blank (invalid)
		run stomp animation
		(also create alert)

*/

//End Animation Setup


// Set up Event Listeners

const listOfButtons = document.querySelectorAll('.rate-star');

for(let i = 0; i <listOfButtons.length; i++){

	listOfButtons[i].addEventListener('mouseover', () => {
		// if(!isAnythingChecked('rating')) {
			characterResponse(listOfButtons[i].getAttribute('value'), '.js-question-one');
		// }
	})
	listOfButtons[i].addEventListener('click', () => {
		characterResponse(listOfButtons[i].getAttribute('value'), '.js-question-one');
		checkedValue = findCheckedValue('rating');
		setQuestionTwo(checkedValue, '.js-question-two');
	})
	listOfButtons[i].addEventListener('mouseout', () =>{
		if (isAnythingChecked('rating')) {
			checkedValue = findCheckedValue('rating');
			characterResponse(checkedValue, '.js-question-one');
		}

	})

}





