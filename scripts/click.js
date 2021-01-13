//Клик на текст
const result = document.querySelector('.result-block');
const tommorowBlock = document.querySelector('.bot-block');
const firstGIF = document.querySelector('.gif-first');
const secondGIF = document.querySelector('.gif-second');
const link = document.querySelector('.link');

link.addEventListener('click', ()=>{
	link.classList.toggle('hidden');
	tommorowBlock.classList.toggle('hidden');
	result.classList.toggle('hidden');
	firstGIF.classList.toggle('hidden');
	secondGIF.classList.toggle('hidden');
})

const tommorow = document.querySelector('.tommorow');

tommorow.addEventListener('click', ()=>{
	app.innerHTML = '';
	const [job, color, gif] = varMaker(workdays, 1);
	buildApp(job, color, gif, false, 'А ЗАВТРА ХЕЛЬ...');
	const link = document.querySelector('.link');
	const tommorowBlock = document.querySelector('.bot-block');
	tommorowBlock.classList.toggle('hidden');
	link.classList.toggle('hidden');
})

