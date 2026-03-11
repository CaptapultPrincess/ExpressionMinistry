/*-- Created by Jehanna Fisher
	 developer: jsfisher4@eagles.usi.edu, last updated 11/30/25


Pre-defined variables*/


const musicOption  = document.getElementById("music-option");

/*
function musicHover() {
  console.log("This Works!");
  musicOption.style.fontSize = '30px';
  
}

musicOption.addEventListener('mouseenter', musicHover)
*/

function flyNote(note){
	note.classList.remove('fly');
	let randomNum = Math.floor(Math.random() * (500 - (-200) + 1)) + -200;
	note.style.marginLeft = randomNum+"px";
	note.style.marginTop = "-10px";
	
	setTimeout(() => {
    note.classList.add('fly');
	note.style.marginTop = "-700px";
	}, 1);
	
	
}


function spawnNotes(){
	console.log("Hello");
	let note2 = document.getElementById("note-2");
	let note3 = document.getElementById("note-3");
	let note4 = document.getElementById("note-4");
	
	flyNote(note2);
	flyNote(note3);
	flyNote(note4);
	
	
	
}