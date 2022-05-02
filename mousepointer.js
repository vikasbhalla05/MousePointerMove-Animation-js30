let section = document.querySelector(".hero");
let text = document.querySelector(".hero > h1");

function shadow(e) {
	const { offsetWidth: width, offsetHeight: height} = section;
	let { offsetX: x, offsetY: y} = e;
	let walk = 100;

	if(this !==  e.target){
		x = x + e.offsetLeft;
		y = y + e.offsetTop;
	}

	let xWalk = Math.round((x / width * walk) - (walk / 2));
	let yWalk = Math.round((y / height * walk) - (walk / 2));

	text.style.textShadow = `
		${xWalk}px ${yWalk}px 10px rgba(0,0,0,0.7)
	`


}

section.addEventListener('mousemove', shadow);