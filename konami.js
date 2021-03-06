var pattern = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"b",
	"a",
];
var current = 0;

var keyHandler = function (event) {
	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
		const div = document.createElement("div");
		const img = document.createElement("img");
		const bubble = document.createElement("blockquote");
		const svg = document.createElement("img");

		div.setAttribute("class", "konami-container");

		img.setAttribute("src", "img/zebrastrong-zebra.png");
		img.setAttribute("class", "konami-container--zebra");

		bubble.setAttribute("class", "bubble electric");

		svg.setAttribute("src", "img/zebrastrong-text.svg");

		document.querySelector("body").appendChild(div);
		document.querySelector("body").appendChild(bubble);
		div.appendChild(img);
		bubble.appendChild(svg);
	}
};

// Listen for keydown events
document.addEventListener("keydown", keyHandler, false);
