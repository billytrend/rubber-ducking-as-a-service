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
		"Did you hg update?"
	]

$(document).ready(function() {
	var adviceIndex = Math.floor((Math.random() * raas.advice.length));
	$("#message").html(raas.advice[adviceIndex]);
})
