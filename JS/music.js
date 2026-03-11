let slideIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function checkIndex(index){
	if (index < 0){
		return (carouselItems.length-1);
	}else if (index > (carouselItems.length-1)){
		return 0;
	}else{
		return index;
	}
}

function plusSlides(n) {

	//let currentPreviousItem = document.querySelector('.carousel-item.prev');
	let currentPrevItem = document.querySelector('.carousel-item.prev');
	let currentActiveItem = document.querySelector('.carousel-item.active');
	let currentNextItem = document.querySelector('.carousel-item.next');
	

	//console.log("Removing... "+(currentActiveItem)+(currentNextItem));
    if (currentPrevItem){currentPrevItem.classList.remove('prev');}
	if (currentActiveItem){currentActiveItem.classList.remove('active');}
	if (currentNextItem){currentNextItem.classList.remove('next');}

	slideIndex = checkIndex(slideIndex+n);
	let prevItem = carouselItems[checkIndex(slideIndex-1)];
	let activeItem = carouselItems[slideIndex];
	let nextItem = carouselItems[checkIndex(slideIndex+1)];

	//console.log("Adding... "+(activeItem)+(nextItem))	
	/*
	currentPrevItem.style.transition = 'margin-left 0.6s ease';
	currentPrevItem.style.marginLeft = '-600px';*/
	prevItem.classList.add('prev');
	activeItem.classList.add('active');
	nextItem.classList.add('next');
	//let prevItem = activeItem.previoustElementSibling;	
	
}

function getAlbum(album){
	let albumInfo = ["ID","Name","Paragraph","Image","Audio","Song List"] 
	switch (album) {
		case 1:
			albumInfo[0] = 0001;
			albumInfo[1] = "Fresh New Morning";
			albumInfo[2] = `Sample paragraph, Sample paragraph, Sample paragraph, Sample paragraph ,Sample paragraph.
								Sample paragraph, Sample paragraph, Sample paragraph, Sample paragraph ,Sample paragraph.
								Sample paragraph, Sample paragraph, Sample paragraph, Sample paragraph ,Sample paragraph.
								Sample paragraph, Sample paragraph, Sample paragraph, Sample paragraph ,Sample paragraph.
								Sample paragraph, Sample paragraph, Sample paragraph, Sample paragraph ,Sample paragraph.
								`;
			albumInfo[3] = "Images/Album1.jpg"
			albumInfo[4] = "Audio/sample-song.mp3"
			albumInfo[5] = `<br>1. Song Title Name
								<br>2. Song Title Name
								<br>3. Song Title Name
								<br>4. Song Title Name
								<br>5. Song Title Name
								<br>6. Song Title Name
								<br>7. Song Title Name
								<br>8. Song Title Name`;
			console.log(albumInfo);
			return albumInfo;
			break;
			
		case 2:
			albumInfo[0] = 0002;
			albumInfo[1] = "None Like You";
			albumInfo[2] = `New Day work is new and a new DAY!, New Day work is new and a new DAY!
							New Day work is new and a new DAY!New Day work is new and a new DAY!New Day work is new and a new DAY!
							New Day work is new and a new DAY!New Day work is new and a new DAY!New Day work is new and a new DAY!New Day work is new and a new DAY!
							New Day work is new and a new DAY!New Day work is new and a new DAY!New Day work is new and a new DAY!New Day work is new and a new DAY!`;
			albumInfo[3] = "Images/Album2.jpg"
			albumInfo[4] = "Audio/scifi.mp3"
			albumInfo[5] = `<br>
								<br>1. Song Title Name
								<br>2. Song Title Name
								<br>3. Song Title Name
								<br>4. Song Title Name
								<br>5. Song Title Name
								<br>6. Song Title Name
								<br>7. Song Title Name
								<br>8. Song Title Name`;
			console.log(albumInfo);
			return albumInfo;
			break;
			
		default:
			break;
	}
}

function openAlbum(album){
	let albumOpen = document.querySelector('.album-grid');
	let hideBox = document.querySelector('.hide');
	
	let albumID = 0000
	let albumTitle = document.querySelector('.album-title');
	let albumParagraph = document.querySelector('.album-desc');
	let albumImage = document.querySelector('.album-cover-img');
	let albumSong = document.querySelector('.album-listen');
	let albumSongList = document.querySelector('.album-song-list');
	
	albumInfo = getAlbum(album);
	
	albumID = albumInfo[0];
	albumTitle.innerHTML = albumInfo[1];
	albumParagraph.innerHTML = albumInfo[2];
	albumImage.src = albumInfo[3];
	albumSong.src = albumInfo[4];
	albumSongList.innerHTML = albumInfo[5];
	
	albumOpen.classList.add('open');
	hideBox.classList.remove('now');


}


function purchase(btn){
	let sparkles = document.querySelector(btn);
	clickFX(sparkles);
	
}

function clickFX(spawn){
	spawn.insertAdjacentHTML('beforeend', "<div class='circle clone'></div>");
	fall();
	//onmouseout='fall()
}

function fall(){
	console.log("I Work!");
	clone = document.querySelector('.circle.clone');
	
	clone.style.marginTop = "0px";
	//wait :(
	setTimeout(() => {
    clone.style.marginTop = "100px";
	clone.style.opacity = "0";
	
	}, 1);
	
	setTimeout(() =>{
		clone.remove();
	}, 1000);
	//clone.style.marginTop = "100px";
}