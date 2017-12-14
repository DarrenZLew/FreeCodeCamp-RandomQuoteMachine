//object with quotes
var quotesInfo = [
	{
		misquote: "If you have to ask how much they are, you can't afford one.",
		correct: "You have no right to own a yacht if you ask that question.",
		person: "J.P Morgan",
	},
	{
		misquote: "Money is the root of all evil.",
		correct: "The love of money is the root of all evil.",
		person: "Timothy 6:10, KJV",
	},
	{
		misquote: "Nice guys finish last.",
		correct: "Nice guys actually finish seventh.",
		person: "Leo Durocher",
	},
	{
		misquote: "Blood, sweat, and tears.",
		correct: "I have nothing to offer but blood, toil, tears, and sweat.",
		person: "Winston Churchill",
	},	
	{
		misquote: "That's one small step for man, one giant leap for mankind.",
		correct: "That's one small step for a man, one giant leap for mankind.",
		person: "Neil Armstrong",
	},	
	{
		misquote: "Life is far too important to be taken seriously.",
		correct: "Life is far too important a thing ever to talk seriously about it.",
		person: "Oscar Wilde",
	},	
	{
		misquote: "Play it again, Sam.",
		correct: "Play it Sam.",
		person: "Ingrid Bergman",
	},
	{
		misquote: "The ends justify the means.",
		correct: "One must consider the final result.",
		person: "Niccolo Machiavelli",
	},
	{	
		misquote: "Do you feel lucky, punk?",
		correct: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do you, punk?",
		person: "Clint Eastwood",
	},	
	{
		misquote: "I don't think we're in Kansas anymore.",
		correct: "Toto, I have a feeling we're not in Kansas anymore.",
		person: "Dorothy Gale",
	},
	{
		misquote: "Let them eat cake!",
		correct: "Let them eat brioche.",
		person: "Jean-Jacques Rousseau",
	}
];

var p = document.querySelector("p");
var quote = document.querySelector("#quotes");
var person = document.querySelector("#person");
var newQuoteBtn = document.querySelector("#newBtn");
var modeBtns = document.querySelectorAll(".mode");
var twitterBtn = document.querySelector("#twitter");
var twitterQuote = "";
var index = randomQuote();
var prevIndex = randomQuote();

newQuoteBtn.addEventListener("click", function() {
	// p.classList.add("hide");
	p.textContent = "";
	modeBtns[0].classList.remove("invisible");
	modeBtns[1].classList.remove("invisible");	
	while (index === prevIndex) {
		index = randomQuote();
	}
	resetQuote(index);
	prevIndex = index;
});

for (var i = 0; i < modeBtns.length; i++) {
	modeBtns[i].addEventListener("click", function() {
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		for (var i = 0; i < quotesInfo.length; i++) {
			if (quotesInfo[i].chosen) {
				if (modeBtns[0].classList.contains("selected")) {
						quote.textContent = quotesInfo[i]["misquote"];
						twitterQuote = '"' + quotesInfo[index]["misquote"] + '"';	
				} else {
					quote.textContent = quotesInfo[i]["correct"]; 
					twitterQuote = '"' + quotesInfo[index]["correct"] + '"';
				}
				twitterQuote += " " + quotesInfo[index]["person"] + " #quotes";
				twitterBtn.href = "https://www.twitter.com/intent/tweet?text=" + encodeURIComponent(twitterQuote);				
			}	
		}
	})
}

function resetQuote(index) {
	for (var i = 0; i < quotesInfo.length; i++) {
		quotesInfo[i].chosen = false;
	}
	quotesInfo[index].chosen = true;
	if (modeBtns[0].classList.contains("selected")) {
		quote.textContent = quotesInfo[index]["misquote"];
		twitterQuote = '"' + quotesInfo[index]["misquote"] + '"';
	} else {
		quote.textContent = quotesInfo[index]["correct"]; 
		twitterQuote = '"' + quotesInfo[index]["correct"] + '"'; 
	}	
	// modeBtns[0].classList.contains("selected") ? quote.textContent = quotesInfo[index]["misquote"]:
	// 			 									quote.textContent = quotesInfo[index]["correct"]; 	
	person.textContent = quotesInfo[index]["person"];
	twitterQuote += " " + quotesInfo[index]["person"] + " #quotes";  
	twitterBtn.href = "https://www.twitter.com/intent/tweet?text=" + encodeURIComponent(twitterQuote);
}

function randomQuote() {
	// choose a number from 0 - length of quotesInfo array
	// this will return the index of the array
	var rand = Math.floor(Math.random() * quotesInfo.length);
	return rand;
}