const button = document.querySelector('.donate-button');
const donateBlock = document.querySelector('.donate-block');

button.addEventListener('click', ()=>{
	donateBlock.classList.toggle('hidden');
	if (donateBlock.classList.contains('hidden')){
		button.textContent = 'БАШ ЗАДОНАТЬ'
	} else {
		button.textContent = 'ЗАКРОЙ ЭТО'
	}
})