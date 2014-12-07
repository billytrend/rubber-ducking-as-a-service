var raas = {};

raas.advice = [
		"Have you tried doing it in javascript?",
		"Did you look into mallocing that array?",
		"You forgot to reset that stack pointer!",
		"Just put a try catch around all that.",
		"That'll probably work as soon as ECMAScript 7 comes around.",
		"I'm pretty sure there's a library for that.",
		"Don't forget those curly brackets.",
		"Have you checked stack overflow?",
		"I think that's availiable as a service.",
		"You know markdown isn't turing complete.. right?",
		"Add a third equal sign, just to be sure.",
		"That looks like undefined behaviour.",
		"Has your array overflowed?",
		"Did you run a hg update?",
		"What the duck is that?",
		"Try adding indentation.",
		"Could you just explain that once more?",
		"Can you reproduce this behavior with a test?",
		"Do you have a failing test?",
		"Maybe start from scratch?",
		"What's the error message?",
		"Any results on google for this?",
		"Aha, that's weird...",
		"And this is valid code?",
		"Sounds like an encoding issue.",
		"Maybe set a debugger breakpoint?!",
		"Are you sure this is thread-safe?",
		"I'm sure you've forgotten just a semicolon.",
		"Why do you need to write this code at all?",
		"This lacks at least 2 levels of abstraction!",
		"We should refactor this mess first.",
		"You need a service object for this.",
		"What about extracting this into it's own factory?",
		"This code is not understandable.",
		"What about backward compatibility?",
		"Every time you run this code a kitten dies!"
	];

$(document).ready(function() {
	var adviceIndex = Math.floor((Math.random() * raas.advice.length));
	$("#message").html(raas.advice[adviceIndex]);
});

$(window).scroll(function() {
	$("#chevron").fadeOut(150);
});
