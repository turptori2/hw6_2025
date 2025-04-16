// var video;

//  declare video variable globally
let video = document.getElementById("player1");;

// get volume from slider and volume display by id and update volume once when clicked
const volumeSlider = document.getElementById("slider");
const volumeText = document.getElementById("volume");

// run when page finishes loading
window.addEventListener("load", function() {
	// confirm page loading with console message
	console.log("Good job opening the window");
});

// select video element via ID and store in the variable
// video = document.getElementById("player1");

//  turn off settings for autoplay and loop
//  confirm it worked in consolde
video.autoplay = false;
console.log("Autoplay disabled")

video.loop = false;
console.log("Loop disabled")

// reload video
video.load()

// Play -- play button event listener runs when "Play Video" is clicked
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");

	// play video
	video.play();

	//  need to convert video volume based on slider value (only 0.0-1.0, so convert from 100)
	video.volume = volumeSlider.value / 100;

	// update volume information to match
	volumeText.textContent = volumeSlider.value + "%";
});

// Pause
// w3 vid properties https://www.w3schools.com/tags/ref_av_dom.asp
// pause button event listener runs when "Pause Video" is clicked
document.querySelector('#pause').addEventListener("click", function() {
	// confirm in consolde
	console.log("Pause Video")

	video.pause();
});

// Slow Down -- Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
document.querySelector("#slower").addEventListener("click", function(){
	// decrease rate 10% every click -- need to use playbackRate with compound assignment operator (*=) to multiply every time (confirm this is right in lecture but looks good on console log)
	video.playbackRate *= 0.9;
	// log to console
	console.log("Slowed speed is:", video.playbackRate);
})

// **Ask about this one being proportional** how to get inverse? --found it! Instead of 1.1111 I used 1 / 0.9
//  Speed Up - increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function(){
	// decrease rate 10% every click -- need to use playbackRate with compound assignment operator (*=) to multiply every time (confirm this is right in lecture but looks good on console log)
	video.playbackRate *= 1 / 0.9;
	// log to console
	console.log("Sped up speed is:", video.playbackRate);
})

//  Skip Ahead
// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	// if vid time goes beyond total duration, start at beginning
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		// otherwise, increase time by 10 sec.
	}	else {
		video.currentTime += 10;
	}
// log the video time
console.log("Video time:", video.currentTime);
});

// Mute
// Mute/unmute the video and update the text in the button.

// define mute button globally
let mutebutton = document.querySelector("#mute");

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted === false) {
		//  starts as false but becomes true when clicking
		video.muted = true;
		// change text in button to "unmute" if it's muted
		mutebutton.textContent = "Unmute";
		console.log("Video muted");

	} else {
		video.muted = false;
		mutebutton.textContent = "Mute";
		console.log("Video unmuted");
	}
});

// Volume Slider
// Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("input", function () {
	video.volume = volumeSlider.value / 100;
	// update the text content to the actual slider value
	volumeText.textContent = volumeSlider.value + "%";
});

// // Styled
// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

// Original
// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function () {
	// oldschool from css
	video.classList.remove("oldSchool");
})
