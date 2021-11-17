var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume*100 + "%";
});

document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.getElementById("slower").addEventListener("click", function() {
	video.playbackRate = 0.95 * video.playbackRate;
	console.log("New speed is " + video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	if ((video.currentTime + 15) > video.duration){
		video.currentTime = 0;
		console.log("Going back to beginning");
		console.log("New location " + 0);
	}
	else{
		video.currentTime += 15;
		console.log("New location " + video.currentTime);
	}
});

document.getElementById("mute").addEventListener("click", function() {
	if(!video.muted){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});

document.getElementById("slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.getElementById("volume").innerHTML = video.volume*100 + "%";
	console.log(video.volume);
});

document.getElementById("vintage").addEventListener("click", function() {
	console.log("Old school style");
	video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
	console.log("Original style");
	video.classList.remove("oldSchool");
});

