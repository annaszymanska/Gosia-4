document.getElementById("sound-space-menu-item").addEventListener("click", soundSpace, false);

function soundSpace() {
	"use strict";
	document.getElementById("header-title").textContent="Przestrzeń Dźwięku"
}

document.getElementById("about-me-menu-item").addEventListener("click", aboutMe, false);

function aboutMe() {
	"use strict";
	document.getElementById("logo").style.visibility="visible";
	var headerTitle=document.getElementById("header-title");
	headerTitle.textContent="O Mnie";
	headerTitle.style['font-family']="'Gupter', cursive";
	
	var frontImage = document.getElementById("front-image");
	frontImage.src="assets/Gosia-o-mnie.jpg";
	frontImage.style['animation-duration']="0s";
	frontImage.style.border="5px double lightgoldenrodyellow";
}

document.getElementById("word-space-menu-item").addEventListener("click", wordSpace, false);

function wordSpace() {
	"use strict";
	document.getElementById("header-title").textContent="Przestrzeń Słowa";
}

