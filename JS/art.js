let displayPiece = document.querySelector('.display-piece');
let displayBox = document.querySelector('.display-box');


function display(photo){
	displayPiece.src = "Images/"+photo;
	displayBox.classList.add('show');
}

function hidePiece(){
	displayPiece.src = "";
	displayBox.classList.remove('show');
}