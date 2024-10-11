

//Call this repeatidly to display each image
async function loadImage(endpoint, imgId, exposure) {
	let response = await fetch(endpoint);
	let blob = await response.blob();
	const imageObjectURL = URL.createObjectURL(blob);

	const image = document.getElementById(imgId);
	image.src = imageObjectURL;

	const ms = exposure;
	await new Promise(resolve => setTimeout(resolve, ms));

	image.src = 'black_image_992x992.png';
}


addEventListener("load", async () => {

	const endpoint = 'http://localhost:3000/image';
	const imgId = 'img';
	const exposure = 50;

	await loadImage(endpoint, imgId, exposure);
});