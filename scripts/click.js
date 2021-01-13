const [job, color, gif] = varMaker(workdays);
buildApp(job, color, gif);

//Клик на текст
const result = document.querySelector('.result-block');
const tommorowBlock = document.querySelector('.bot-block');
const firstGIF = document.querySelector('.gif-first');
const secondGIF = document.querySelector('.gif-second');
const link = document.querySelector('.link');
const donate = document.querySelector('.donate');

link.addEventListener('click', ()=>{
	link.classList.toggle('hidden');
	donate.classList.toggle('hidden');
	tommorowBlock.classList.toggle('hidden');
	result.classList.toggle('hidden');
	firstGIF.classList.toggle('hidden');
	secondGIF.classList.toggle('hidden');
})