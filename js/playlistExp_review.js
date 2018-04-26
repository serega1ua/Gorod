/* playlist.js */

window.onload = function() {
	var button1 = document.getElementById("addButton");
	button1.onclick = handleButtonClick;

	//loadPlaylist();
}


function handleButtonClick(e) {
	var textInput = document.getElementById("otsudaSnimaem");
	var songName = textInput.value;
	//.value - это свойство-сливки как бы, присвоили переменной объект и снимаем из объекта

	if (songName == "" || songName == " " || songName == "  " || songName == "   " || songName == "    ") {	alert("Введите текст отзыва");	}
	
	//вот, внутри функции РАЗВИЛКА 
	//if
//Выполняет тот или иной блок кода в зависимости от того, верно ли условие
//Синтаксис
//показать чистый исходник в новом окнеСкрыть/показать номера строкпечать кода с сохранением подсветки
 
//if (condition)
//   statement1
// [else  statement2]
//Аргументы
//condition
//Выражение, являющееся условием для проверки
//statement1
// или javascript-вызов, который выполняется, 
//если условие верно 
//statement2 -Блок или javascript-вызов, который выполняется, если условие ложно
		
		
	 else if (songName == "1") {alert("Это не текст отзыва")}
 
								
	
	else {
		//alert("Adding " + songName);
		var p = document.createElement("div");
		p.innerHTML = songName;
		var ul = document.getElementById("spisokOtzivov");
		
		ul.insertBefore(p, ul.firstChild); //перед firstChild вставляем
		
		save(songName);
	}
}


