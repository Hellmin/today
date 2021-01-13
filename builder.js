//текущий месяц
const workdays = [
	1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31
]

//текущая дата
const today = new Date().getDate();

let job = 'Не работает!';
let color = 'green';
let gif = 'good';

//проверка текущей даты и рабочего дня
for (workday of workdays){
	if (today == workday) {
		job = 'Работает!';
		color = 'red';
		gif = 'bad';
		break;
	} else if (today == ++workday) {
		job = 'Приходит со смены';
		color = 'blue';
		gif = 'okay';
		break;
	}
}

//функция для создания блоков
function createElement(tagName,content,attributes){
	const newElement = document.createElement(tagName);
	newElement.textContent = content;
	for (let id in attributes){
			newElement.setAttribute(id,attributes[id])
	}
	return newElement;
}

//блок с датой
const dateBlock = createElement('div', '', {
	'class' : 'wrapper date-block'
})
const currentDay = new Date().toLocaleDateString();
const dateBlockInner = createElement('div', currentDay)
dateBlock.append(dateBlockInner);

//блоки гифок
const gifPath = 'gifs/' + gif + '_result.gif';
const firstGIF = createElement('div', '', {
	'class' : 'hidden gif-block gif-first'});
const secondGIF = createElement('div', '', {
	'class' : 'hidden gif-block gif-second'});
for (i=0; i<2; i++){
	const img = createElement('img', '', {
		'src' : gifPath
	})
	firstGIF.append(img);
	const img2 = createElement('img', '', {
		'src' : gifPath
	})
	secondGIF.append(img2);
}

//блок результата
const resultBlock = createElement('div', '', {
	'class' : 'hidden result-block ' + color
})
const header = createElement('h1', job)
resultBlock.append(header);

//конструктор
const app = document.querySelector('#app');
app.prepend(firstGIF);
app.prepend(dateBlock);
app.append(resultBlock);
app.append(secondGIF);

//Клик на текст
const link = document.querySelector('.link');
const result = document.querySelector('.result-block');

link.addEventListener('click', ()=>{
	link.classList.toggle('hidden');
	result.classList.toggle('hidden');
	firstGIF.classList.toggle('hidden');
	secondGIF.classList.toggle('hidden');
})