//функция для создания блоков
function createElement(tagName,content,attributes){
	const newElement = document.createElement(tagName);
	newElement.textContent = content;
	for (let id in attributes){
			newElement.setAttribute(id,attributes[id])
	}
	return newElement;
}