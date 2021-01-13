const [job, color, gif] = varMaker(workdays);
buildApp(job, color, gif);

function varMaker(array, mod = 0){
	let job = 'Не работает!';
	let color = 'green';
	let gif = 'good';
	const today = new Date().getDate();
	for (workday of array){
		if (today + mod == workday) {
			job = 'Работает!';
			color = 'red';
			gif = 'bad';
			break;
		} else if (today + mod == ++workday) {
			job = 'Приходит со смены';
			color = 'blue';
			gif = 'okay';
			break;
		}
	}
	return [job, color, gif];
}

function buildApp(job, color, gif, hidden = true, text='ХЕЛЬ СЕГОДНЯ...'){
	const isHidden = hidden ? 'hidden ' : '';

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
		'class' : isHidden + 'gif-block gif-first'});
	const secondGIF = createElement('div', '', {
		'class' : isHidden + 'gif-block gif-second'});
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
		'class' : isHidden + 'result-block ' + color
	})
	const header = createElement('h1', job)
	resultBlock.append(header);

	//блок с хэдэром
	const topBlock = createElement('div','',{
		'class' : 'wrapper top-block'
	})
	topBlock.innerHTML = "<h2>" + text + "</h2>" + "<a href='#' class='link'>нажми чтобы узнать</a>"

	//блок завтра
	const tommorowBlock = createElement('div','',{
		'class' : isHidden + 'wrapper bot-block'
	})
	tommorowBlock.innerHTML = "<a href='#' class='tommorow'><h2>А ЗАВТРА???</h2></a>"

	//конструктор
	const app = document.querySelector('#app');
	app.append(dateBlock);
	app.append(firstGIF);
	app.append(topBlock);
	app.append(resultBlock);
	app.append(secondGIF);
	app.append(tommorowBlock);
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