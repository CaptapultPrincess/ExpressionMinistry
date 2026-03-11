function change(section){
	let currentSection = document.querySelector('.legacy-content-section.active');
	currentSection.classList.remove('active');
	let newSection = document.getElementById("section-two");
	switch (section) {
		case 1:
			newSection = document.getElementById("section-one");
			break;
			
		case 2:
			newSection = document.getElementById("section-two");
			break;
			
		case 3:
			newSection = document.getElementById("section-three");
			break;
		
	}
	newSection.classList.add('active');
}

function display(content, type){
	let imgDisplay = document.querySelector('.legacy-image');
	let pdfDisplay = document.querySelector('.legacy-pdf');
	let vidDisplay = document.querySelector('.legacy-video');
	
	imgDisplay.style.display = "none";
	pdfDisplay.style.display = "none";
	vidDisplay.style.display = "none";
	
	imgDisplay.src = "";
	pdfDisplay.src = "";
	vidDisplay.src = "";
	
	
	switch (type){
		case "img":
			imgDisplay.src = "Images/"+content;
			imgDisplay.style.display = "block";
			break;
			
		case "pdf":
			pdfDisplay.src = "Downloads/"+content;
			pdfDisplay.style.display = "block";
			break;
			
		case "vid":
			vidDisplay.src = content;
			vidDisplay.style.display = "block";
			vidDisplay.play();
			break;
		default:
		
		console.log("Error");
	}
}