function download(filename, text) {
 var element = document.createElement('a');
 element.setAttribute('href', 'data:text/plain;charset=utf-8,' + 
 encodeURIComponent(text));
 element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function download_deck() {
	let ydk;

	let img;
	let main_deck = document.getElementById("editor-main-deck").getElementsByTagName("img");

	ydk = "#main\n"
	for (let i = 0; i < main_deck.length; i++) {
		img = main_deck[i].style["background-image"].split("/");
		img = img[img.length-1].split(".")[0];
		ydk += img+"\n";
	}


	let extra_deck = document.getElementById("editor-extra-deck").getElementsByTagName("img");

	ydk += "#extra\n"
	for (let i = 0; i < extra_deck.length; i++) {
		img = extra_deck[i].style["background-image"].split("/");
		img = img[img.length-1].split(".")[0];
		ydk += img+"\n";
	}

	let side_deck = document.getElementById("editor-side-deck").getElementsByTagName("img");

	ydk += "#side\n"
	for (let i = 0; i < side_deck.length; i++) {
		img = side_deck[i].style["background-image"].split("/");
		img = img[img.length-1].split(".")[0];
		ydk += img+"\n";
	}

	let name = document.getElementsByClassName("editor-deck-name")[0].innerText;

	download(name+'.ydk', ydk);
}

let menu_cont = document.getElementById("editor-menu-content");
const newButton = document.createElement('button');
newButton.setAttribute("id", "download_button");
newButton.classList.add("engine-button");
newButton.textContent = 'Download YDK';

newButton.addEventListener('click', () => {
  download_deck();
});

menu_cont.appendChild(newButton);