// Action on button press:

var buttons = document.querySelectorAll("button");

for (button of buttons) {	
	button.addEventListener("click", function() {
		var buttonTxtContent = this.innerHTML;
		
		makeSound(buttonTxtContent);
		animation(buttonTxtContent)
	})
}

// Action on keyboard press:

document.addEventListener("keydown", function(e) {
	makeSound(e.key);
	animation(e.key)
})

// function to make the sound:

function makeSound(key) {
	switch(key) {
		case "w":
			var crash = new Audio("./assets/sounds/crash.mp3");
			crash.play();
			break;
		
		case "a":
			var kick = new Audio("./assets/sounds/kick-bass.mp3");
			kick.play();
			break;
		
		case "s":
			var snare = new Audio("./assets/sounds/snare.mp3");
			snare.play();
			break;
		
		case "d":
			var tom1 = new Audio("./assets/sounds/tom-1.mp3");
			tom1.play();
			break;
		
		case "j":
			var tom2 = new Audio("./assets/sounds/tom-2.mp3");
			tom2.play();
			break;
		
		case "k":
			var tom3 = new Audio("./assets/sounds/tom-3.mp3");
			tom3.play();
			break;
		
		case "l":
			var tom4 = new Audio("./assets/sounds/tom-4.mp3");
			tom4.play();
			break;

		default: console.log(buttonTxtContent);
	}
}

// function to set an animation on click or keypress

function animation(key) {
	var activeKey = document.querySelector("." + key);

	activeKey.classList.add("pressed");

	setTimeout(function() {
		activeKey.classList.remove("pressed");
	}, 300);
}