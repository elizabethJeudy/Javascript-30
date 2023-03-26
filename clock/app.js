const hourEl = document.querySelector(".hour-hand");
const minEl = document.querySelector(".min-hand");
const secEl = document.querySelector(".sec-hand");

function setTime() {
	const current = new Date();

	const hours = current.getHours();
	// calculates percentage & multiply by 360 (degree of circle)
	const hourDegrees = (hours / 12) * 360 + 90;
	hourEl.style.transform = `rotate(${hourDegrees}deg) `;
	const minutes = current.getMinutes();
	const minDegrees = (minutes / 60) * 360 + 90;
	minEl.style.transform = `rotate(${minDegrees}deg) `;
	const seconds = current.getSeconds();
	const secDegrees = (seconds / 60) * 360 + 90;
	secEl.style.transform = `rotate(${secDegrees}deg) `;
}
//setInterval calls a function or code snippet repeatedly with a fixed time between each call
setInterval(setTime, 1000);
