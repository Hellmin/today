function varMaker(array, mod = 0){
	let job = 'Не работает!';
	let color = 'green';
	let gif = 'good';
	const today = new Date().getDate() + mod;
	for (workday of array){
		console.log('workday=' + workday + '; today=' + today);
		if (workday == 0) {
			job = 'ЗАБУДЬ О ХЕЛЕ';
			color = 'WHITE';
			gif = 'dead';
			break;
		} else if (today == workday) {
			job = 'Работает!';
			color = 'red';
			gif = 'bad';
			break;
		} 
		// else if (today + 1 == workday) {
		// 	job = 'Приходит со смены';
		// 	color = 'blue';
		// 	gif = 'okay';
		// 	break;
		// } 
	}
	return [job, color, gif];
}

function buildApp(job, color, gif, hidden = true, today = true){
	const isHidden = hidden ? 'hidden ' : '';
	// на обычные смены
	const text = today ? 'ХЕЛЬ СЕГОДНЯ' : 'А ЗАВТРА ХЕЛЬ...';
	// на случай беды
	// const text = today ? '' : '';
	const tommorowText = today ? 'А ЗАВТРА???' : 'А СЕГОДНЯ???';

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
	tommorowBlock.innerHTML = "<h2><a href='#' class='tommorow'>" +
	 tommorowText + "</a></h2>"

	//конструктор
	const app = document.querySelector('#app');
	app.append(dateBlock);
	app.append(firstGIF);
	app.append(topBlock);
	app.append(resultBlock);
	app.append(secondGIF);
	app.append(tommorowBlock);

	const tommorow = document.querySelector('.tommorow');

	tommorow.addEventListener('click', ()=>{
		console.log('event');
		app.innerHTML = '';
		const dayMod = today ? 1 : 0;
		const dayOpt = today ? false : true;
		const [job, color, gif] = varMaker(workdays, dayMod);
		buildApp(job, color, gif, false, dayOpt);
		const link = document.querySelector('.link');
		link.classList.toggle('hidden');
	})
}