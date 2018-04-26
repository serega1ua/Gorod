/* playlist.js */

window.onload = init;

function init() {

	var button1 = document.getElementById("addButton");
	button1.onclick = handleButtonClick;
	
	var buttonX = document.getElementById("addButtonX");
	buttonX.onclick = ha;
	
	var button3 = document.getElementById("addButton3");
	button3.onclick = handle;
	
	var button2 = document.getElementById("addButton2");
	button2.onclick = handleButton;
		
    
	window.sl4 = Math.floor(Math.random()*10)+1; // так можно ОБЪЯВИТЬ ГЛОБАЛЬНУЮ ПЕРЕМЕННУЮ ИЗ ФУНКЦИИ
// могли указать просто sl4 = Math.floor(Math.random()*10)+1;
//http://habrahabr.ru/post/78991/ - тут подробно про область видимости
	  
	//alert ("Сгенерировали через window.sl4 = " + sl4);
	
	 if (sl4 == 1) {var p4 = document.getElementById("k875");
	p4.innerHTML = "Фраза Я ПОЕДУ НА НОЧНОЙ &#45; означает поездку на какой рынок&#63;";};
	
	 if (sl4 == 2){var p4 = document.getElementById("k875");
	p4.innerHTML = "Район из трех букв, куда лучше вечерами не соваться&#63;";};
		
	 if (sl4 == 3) {var p4 = document.getElementById("k875");
	p4.innerHTML = "Кличка нынешнего мера Харькова на букву Г &#63;"; }
			
	 if (sl4 == 4) {var p4 = document.getElementById("k875");
	p4.innerHTML = "Какой номер у харьковской больницы &#45; психушки&#63;"; }
	 			
	 if (sl4 == 5) {var p4 = document.getElementById("k875");
	p4.innerHTML = "ХИРЭ &#45; это что &#40;универ, название ракеты, название хиппового народа&#41;&#63;"; }
			
	 if (sl4 == 6) {var p4 = document.getElementById("k875");
	p4.innerHTML = "Самая центральная улица Харькова&#63;"; }
			
	 if (sl4 == 7) {var p4 = document.getElementById("k875");
	p4.innerHTML = "Парк с аттракционами называется парк имени ...&#63;"; }
			
	 if (sl4 == 8) {var p4 = document.getElementById("k875");
	p4.innerHTML = "Самый большой спальный район Харькова на букву С.&#63;"; }
			
	 if (sl4 == 9) {var p4 = document.getElementById("k875");
	p4.innerHTML = "Сколько веток метро в Харькове&#63;"; }
		
	 if (sl4 == 10) {var p4 = document.getElementById("k875");
	p4.innerHTML = "В Харькове есть улица <strong><em>..</em></strong> Августа, какое число там должно быть&#63;"; }
					
	}



	
	
	


function handleButton(e) {

//function init();

	window.location = "#a12";
	
	var textInput2 = document.getElementById("otsudaSnimaem2");
	var songName2 = textInput2.value;
	// alert (songName2 + " - это сама переменная, что сняли с клавы");
 //alert(typeof songName2 + " - это тип переменной, что сняли с клавы");
 
 //var sl4 = 1;// ЭТО - ЛОКАЛЬНАЯ с таким же именем, что и глобальная. Тут видно, как обратиться к глобальной переменной, если есть локальная с таким же именем.
 
 //alert ("и внутри функции вижу ЛОКАЛЬНУЮ  sl4 = " + sl4);// вот локальная
 // alert ("и внутри функции вижу через ГЛОБАЛЬНУЮ  window.sl4 = " + window.sl4); // вот глобальная
  
  
  
 if (window.sl4 == 1) {
 
 if (songName2.indexOf("Барабашова") >= 0 || songName2.indexOf("барабашова") >= 0 || songName2.indexOf("барабан") >= 0 || songName2.indexOf("бара") >= 0 || songName2.indexOf("барик") >= 0 || songName2.indexOf("бор") >= 0) 
 {  var pi2 = document.getElementById("spisokOtzivov2");
 //"Привет, мир".indexOf("р", 5)    // вернет 10
 // то есть ищет само НАЛИЧИЕ ТОЧНОГО совпадения ХОТЬ БЫ ГДЕ
  
		pi2.innerHTML = "Опаньки, да ты красава просто! Ответ верный! <br>Фраза &#0034;я поеду на ночной&#0034; означает поездку на БАРАБАШОВА! " + "<br>Вы ответили: " + songName2; 

						
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
		
				
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Ответить на иную загадку можно, если вы просто обновите эту страницу.";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		}
		
		
  
		else {
		var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Неверный ответ на вопрос о главном рынке..."+"<br>Вы ответили: "+songName2; 
		
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
				
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Попробуйте еще раз ответить, печатайте Ваш ответ в окошко выше&#0033;";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		return null;
		
		
		}}
		
		
		
		
		
		
	 if (window.sl4 == 2) {
 
 if (songName2.indexOf("ХТЗ") >= 0 || songName2.indexOf("Хтз") >= 0 || songName2.indexOf("хтз") >= 0) 
 
 {  var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Да, действительно, это ХТЗ!" + "<br>Вы ответили верно: "+songName2; 

		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		
		ul1.appendChild(newElem);
	
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Ответить на иную загадку можно, если вы просто обновите эту страницу.";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);

		}
  
		else {var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Это неверный ответ на вопрос о стремном районе..."; 
		
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
	
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Попробуйте еще раз ответить, печатайте Ваш ответ в окошко выше&#0033;";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		return null;	}}
		

		
		
		
	 if (window.sl4 == 3) {
 
 if (songName2.indexOf("Гепа") >= 0 || songName2.indexOf("гепа") >= 0 || songName2.indexOf("геп") >= 0 || songName2.indexOf("гэп") >= 0 || songName2.indexOf("епп") >= 0 ) 
 
 {  var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Да, это Гепа." + "<br>Вы ответили верно: "+songName2; 

		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
	
var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Ответить на иную загадку можно, если вы просто обновите эту страницу.";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);

		}
  
		else {var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Это неверный ответ на вопрос о гепе..."; 
		
		
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
	
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Попробуйте еще раз ответить, печатайте Ваш ответ в окошко выше&#0033;";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		return null;	}}
		
		
		
		
		
		
		
		
	 if (window.sl4 == 4) {
 
 if (songName2.indexOf("15") >= 0 || songName2.indexOf("пятна") >= 0 || songName2.indexOf("Пятна") >= 0 || songName2.indexOf("№15") >= 0 || songName2.indexOf("№ 15") >= 0) 
 
 {  var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Да, это пятнашка." + "<br>Вы ответили верно: "+songName2; 

		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
	
var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Ответить на иную загадку можно, если вы просто обновите эту страницу.";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);

		}
  
		else {var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Это неверный ответ на вопрос о нашей психушке..."+ "<br>Вы ответили: "+songName2; 
				
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
		
	var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Попробуйте еще раз ответить, печатайте Ваш ответ в окошко выше&#0033;";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		return null;	}}
		
		
		
		
		
		
		
		
		
	 if (window.sl4 == 5) {
 
 if (songName2.indexOf("униве") >= 0 || songName2.indexOf("Униве") >= 0 || songName2.indexOf("Инсти") >= 0 || songName2.indexOf("инстит") >= 0 || songName2.indexOf("ХНУРЕ") >= 0 || songName2.indexOf("ХНУРЭ") >= 0 || songName2.indexOf("eybdt") >= 0) 
 
  
 
 {  var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Да, это университет, Харьковский национальный университет радиоэлектроники." + "<br>Вы ответили верно: "+songName2; 

		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);

		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Ответить на иную загадку можно, если вы просто обновите эту страницу.";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		
		
		}
  
		else {var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Это неверный ответ на вопрос об этом универе возле метро Научная..."; 
		
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
		
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Попробуйте еще раз ответить, печатайте Ваш ответ в окошко выше&#0033;";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		return null;	}}
		
		
		
		
		
		
	 if (window.sl4 == 6) {
 
 if (songName2.indexOf("сумс") >= 0 || songName2.indexOf("Сумс") >= 0 || songName2.indexOf("СУМС") >= 0 || songName2.indexOf(" Сумс") >= 0 || songName2.indexOf(" сумс") >= 0) 
 
 {  var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Да, это Сумская." + "<br>Вы ответили верно: "+songName2; 

		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
		
		
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Ответить на иную загадку можно, если вы просто обновите эту страницу.";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);

		}
  
		else {var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Это неверный ответ на вопрос о нашей центральной улице..."+ "<br>Вы ответили: "+songName2; 
		
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
		
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Попробуйте еще раз ответить, печатайте Ваш ответ в окошко выше&#0033;";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		return null;	}}
		
		
		
		
		
		
	 if (window.sl4 == 7) {
 
 if (songName2.indexOf("горьк") >= 0 || songName2.indexOf("Горьк") >= 0 || songName2.indexOf("Горк") >= 0 || songName2.indexOf("горк") >= 0 || songName2.indexOf("орьк") >= 0) 
 
 {  var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Да, это парк Горького." + "<br>Вы ответили верно: "+songName2; 

		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
		
		
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Ответить на иную загадку можно, если вы просто обновите эту страницу.";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);

		}
  
		else {var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Это неверный ответ на вопрос о нашем замечательном парке...<br>В попытке ответа Вы ввели " + songName2.indexOf("", 999) + " символов"; 
		
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
		
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Попробуйте еще раз ответить, печатайте Ваш ответ в окошко выше&#0033;";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		
		return null;	}}
		
		
		
		
		
		
	 if (window.sl4 == 8) {
 
 if (songName2.indexOf("салт") >= 0 || songName2.indexOf("Салт") >= 0) 
 
 {  var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Таки да, это САЛТОВКА&#33;" + "<br>Вы ответили верно: "+songName2;  
		
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
		
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Ответить на иную загадку можно, если вы просто обновите эту страницу.";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		}
  
		else {var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Это неверный ответ на вопрос о нашей С.....ке&#33;<br>Вы ввели всего " + songName2.indexOf("", 999) + " символов"; 
		
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
		
		
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Попробуйте еще раз ответить, печатайте Ваш ответ в окошко выше&#0033;";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		return null;	}
				
		}
		
		
		
		
		
	 if (window.sl4 == 9) {
 
 if (songName2.indexOf("3") >= 0 || songName2.indexOf("тр") >= 0 || songName2.indexOf("три") >= 0 || songName2.indexOf("т р") >= 0 || songName2.indexOf("III") >= 0) 
 
 {  var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Да, всего 3 ветки в харьковском метро." + "<br>Вы ответили верно: "+songName2;  
					
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		
		ul1.appendChild(newElem);
		
		
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Ответить на иную загадку можно, если вы просто обновите эту страницу.";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		
		}
  
		else {var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Это неверный ответ на вопрос о нашем метро...<br>Пытаясь ответить на этот вопрос, <br>Вы ввели всего " + songName2.indexOf("", 999) + " символов"; 	
					
		var newElem = pi2.cloneNode(true);
		var ul1 = document.getElementById("clone");
		
		ul1.appendChild(newElem);
		
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Попробуйте еще раз ответить, печатайте Ваш ответ в окошко выше&#0033;";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		return null;
		}}
		//Пустая подстрока находится в любом случае:"Привет, мир".indexOf("", 999)  // вернет 11 (длину)

				 	
		
		
	 if (window.sl4 == 10) {
 
 if (songName2.indexOf("23") >= 0 || songName2.indexOf("2 3") >= 0 || songName2.indexOf("двад") >= 0 || songName2.indexOf("тре") >= 0 || songName2.indexOf("Два") >= 0 || songName2.indexOf("Тре") >= 0) 
 
 {  var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Да, это улица имени 23-го Августа." + "<br>Вы ответили верно: "+songName2; 

			
		var newElem = pi2.cloneNode(true); //node узел [сети] (от латинского nodus - узел)
		var ul1 = document.getElementById("clone");
		
		ul1.appendChild(newElem);	

var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Ответить на иную загадку можно, если вы просто обновите эту страницу.";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);


		}
		
  
		else {var pi2 = document.getElementById("spisokOtzivov2");
		pi2.innerHTML = "Вы ответили: "+songName2+"<br>Что ж, это &#45; неверный ответ на вопрос о нашей улице<br>&#34;с солдатом&#34;..."; 
		
		
		var newElem = pi2.cloneNode(true);// при false просто элемент копирует, даже без текста
		var ul1 = document.getElementById("clone");
		ul1.appendChild(newElem);
		
		var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br>&#0042; Попробуйте еще раз ответить, печатайте Ваш ответ в окошко выше&#0033;";
		var uladding = document.getElementById("spisokOtzivov2");
		uladding.appendChild(adding);
		
		return null;	
		}}
		
		else	{return null;}	
  	
	 
}





			
			 
		
	 

 
//weight  male
function handleButtonClick(e) {
	
	var textInput = document.getElementById("otsudaSnimaem");
	var songName = textInput.value;
	var songName = parseInt(songName, 10);
	
	//alert(songName);
	var vesМale = (songName - 100) * 1.1678097899707889;
	vesМale = (vesМale).toFixed(1);   
	
	 if (isNaN(songName)) { alert("Вы ввели НЕ число");
	 return null;} //Метод isNaN пытается преобразовать переданный параметр в число. Если параметр НЕ МОЖЕТ быть преобразован, возвращает true, иначе возвращает false.
 
	if (songName == "") 
	{alert("Ввведите свой рост в сантиметрах");	} 
	//если тут поставить return null;, тот же результат будет
			
		
			
			
		else if (songName>240) {	
					
			
		var p = document.createElement("div");
		p.className = "myclass";
		p.id = "myid";
		
			//Новому элементу тут же можно поставить свойства:
		//var newDiv = document.createElement('div');
		//newDiv.className = 'myclass';
		//newDiv.id = 'myid';
		//newDiv.innerHTML = 'Привет, мир!';

		
		p.innerHTML = "Ваш рост целых " + songName + " см&#63;&#33;" + "<br>Ну не бывает такого огромного роста у мужиков.<br>В Харькове таких высоких парней нет и не планируется.";
		
		var anchor = document.getElementById("myid");		
 
				
		var ul = document.getElementById("xx1");
		ul.insertBefore(p, anchor);
		
		//Метод appendChild всегда добавляет элемент ПОСЛЕДНИМ в список детей.
		//Новый элемент можно добавить не в конец детей, а ПЕРЕД НУЖНЫМ ЭЛЕМЕНТОМ.
		//Для этого используется метод insertBefore родительского элемента.
		//Он работает так же, как и appendChild, но принимает ВТОРЫМ ПАРАМЕТРОМ элемент, ПЕРЕД КОТОРЫМ НУЖНО ВСТАВЛЯТЬ.
		//parentElem.insertBefore(newElem, target)
//Синтаксис у него такой: родительПредыдущегоУзла.insertBefore(новыйУзел, предыдущийУзел);

		
				
		var newElem = p.cloneNode(true);
		var ul1 = document.getElementById("clone");
		
		ul1.appendChild(newElem);
				
		}
			
			
		
	else if (songName<145) {
	
		var p = document.createElement("div");
		p.className = "myclass1";
		p.id = "myid";
		
		p.innerHTML = "Ваш рост лишь " + songName + " см&#63;" + "<br>Вам еще надо подрасти и потом взвешиваться.<br>Подрастайте, морковку потребляйте&#33;";
		
		var ul = document.getElementById("xx1");
		
		var anchor = document.getElementById("myid");		
 
		var ul = document.getElementById("xx1");
		ul.insertBefore(p, anchor);
		
		}		
		
			
			
	else {
		var p = document.createElement("div");
		p.className = "myclass2";
		p.id = "myid";
		
	p.innerHTML = "Ну если Ваш рост и правда " + songName + " см&#44;" + "<br>то нормальный вес харьковчанина при таком росте &#45; " + vesМale + " кг"; 
	 
		var ul = document.getElementById("xx1");
		var anchor = document.getElementById("myid");		
		ul.insertBefore(p, anchor);

		
		var newElem = p.cloneNode(true);
		var ul1 = document.getElementById("clone");
		
		ul1.appendChild(newElem);
		
		}


}



//weight female

function ha (e) {

	var textInputX = document.getElementById("otsudaSnimaemX");
	var songNameX = textInputX.value;
	var songNameX = parseInt(songNameX, 10);
	//При обработке данных, веденных пользователем, указывайте основание в вызове. Это даст более предсказуемые результаты. parseInt("08", 10) - всегда 8
	//parseInt("15px", 10) даст 15
	//функция parseInt преобразует первый аргумент(т.е. первое число, что встретила) в число по указанному основанию, а если это невозможно - возвращает NaN. (только вот typeof NaN возвращает string, хотя он number)
	//Как написано в спецификации ECMAScript http://ecma-international.org/ecma-262/5.1/#sec-8, всего существует 6 типов:
	//Undefined
	//	Null
	//	Boolean
	//	String
	//	Number
	//	Object


	//alert(typeof songNameX);
	
	 if (isNaN(songNameX)) { alert("Вы ввели НЕ число");
	 return null;} 
	 if (songNameX == "") {	alert("Ввведите число");	 return null;}
 
	  if (songNameX === 155 || songNameX === "123") {	alert("Не фартовое число");	 return null;}
	// не ловится на ==="123", т.к. НЕ string здесь после var songNameX = parseInt(songNameX, 10);
	
	var vesFemale = (songNameX - 110) * 1.15478;
	var add = parseInt(vesFemale);
	vesFemale = (vesFemale).toFixed(3);   
	 var grams = vesFemale - add;
	 grams =(grams * 1000).toFixed(0);
	  var aaa = parseInt(vesFemale);
	 
 
	
	
		 if (songNameX > 220 ) {	
			
		var p = document.createElement("div");
		p.className = "myclass";
		p.id = "myid4";
		p.innerHTML = "Ваш рост аж " + songNameX + " см&#63;&#33;" + "<br>Ну не бывает такого огромного роста.<br>В Харькове таких высоких людей нет пока что." + "<br>Ну чисто в теории при таком росте должен быть вес "+aaa+" кг.";
					
		var ul = document.getElementById("xx2");
		
		//ul.appendChild(p);
		
		 		var anchor = document.getElementById("myid4");		
		 ul.insertBefore(p, anchor);
		
        
		 
			
		var newElem = p.cloneNode(true);
		var ul1 = document.getElementById("clone");
		
		ul1.appendChild(newElem);
	 		
		}
		

	else if (songNameX<135 ) {
		
		var p = document.createElement("div");
		p.className = "myclass";
		p.id = "myid4";
		
		p.innerHTML = "Ваш рост лишь " + songNameX + " см&#63;" + "<br>Вам еще надо подрасти и потом взвешиваться.<br>Подрастайте и пока не заморачивайтесь о весе&#33;";
		var ul = document.getElementById("xx2");
		
		//ul.appendChild(p);
		
		 var anchor = document.getElementById("myid4");		
		 ul.insertBefore(p, anchor);
		
				
		var newElem = p.cloneNode(true);
		var ul1 = document.getElementById("clone");
		
		ul1.appendChild(newElem);
		
		
		 
	 }		
		
		   
				
	
	else {	 
			var p = document.createElement("div");
		p.id = "myid4";
		p.innerHTML = "Что ж, <span>если Ваш рост</span> " + songNameX + " <span>см&#44;</span>" + "<br>то нормальный вес харьковчанки при таком росте &#45; " + add + " кг." + "<br>Если быть точным до грамма,<br><span>то Ваш вес должен составлять</span> " + vesFemale + " <span>кг.</span><br>" + "Цифры после запятой означают граммы, то есть Ваш нормальный вес &#45; " + add + " кг. и " + grams + " граммов.<br>Согласитесь, "+ grams + " граммов &#45; это существенно, <br>когда речь идет о весе."; 
		//Свойство innerHTML устанавливает или получает ВСЮ РАЗМЕТКУ И СОДЕРЖАНИЕ внутри данного элемента.
		var ul = document.getElementById("xx2");
		
		var anchor = document.getElementById("myid4");		
		ul.insertBefore(p, anchor);
		
		//ul.appendChild(p);
		 
		   
		
		
		var newElem = p.cloneNode(true);
		var ul1 = document.getElementById("clone");
		
		var anchor = document.getElementById("myid4");		
		ul1.insertBefore(p, anchor);
				//Новый элемент можно также склонировать из существующего:
				//newElem = elem.cloneNode(true)
				//Клонирует элемент elem, вместе С АТРИБУТАМИ, включая ВЛОЖЕННЫЕ в него.
				//newElem = elem.cloneNode(false)
				//Клонирует элемент elem, вместе с атрибутами, но БЕЗ ПОДЭЛЕМЕНТОВ.
		//		var newElem = p.cloneNode(true);
		var ul1 = document.getElementById("clone");
		
		ul1.appendChild(newElem);
	}
}










 




function handle(e) {

	var textInput11 = document.getElementById("otsudaSnimaem11");
	var f4 = textInput11.value;

	
	var textInput12 = document.getElementById("otsudaSnimaem12");
	var f5 = textInput12.value;
		
	var textInput13 = document.getElementById("otsudaSnimaem13");
	var f6 = textInput13.value;
	
	
	if (f4== "  " || f5== "  " || f6== "  "  ||	
	f4== "   " || f5== "   " || f6== "   ") {alert("Ввведите число от 0 до 70");	}
	  
	  if (f4== ""||f4== " ") {f4=0}; 
	   if (f5== ""||f5== " ") {f5=0}; 
	    if (f6== ""||f6== " ") {f6=0}; 
	  
	var f41 = parseFloat(f4);  //Стандартно КОНВЕРТАЦИЯ  В ЧИСЛО осуществляется вызовом Number()
	var f51 = parseFloat(f5); //более мягкая фильтрация в число с  откидываниями лишних знаков: parseFloat("0.1zf") = 0.1  и КОНВЕРТАЦИЯ  В ЧИСЛО
	var f61 = parseInt(f6, 10);  //более мягкая фильтрация в число С УКАЗАНИЕМ СИСТЕМЫ СЧИСЛЕНИЯ, в нашем случае - десятичная: parseInt("08f.4", 10) = 8   и КОНВЕРТАЦИЯ  В ЧИСЛО
	 //parseFloat , parseInt переводят слева направо, пока это возможно. Если вообще невозможно - то NaN.
	 
	 if (isNaN(f41)) { alert("Вы ввели НЕ число");
	 return null;} 
	 
	  if (isNaN(f51)) { alert("Вы ввели НЕ число");
	 return null;} 
	 
	  if (isNaN(f61)) { alert("Вы ввели НЕ число");
	 return null;} 
//запятая не приводит к ошибке.
//parseFloat как и parseInt сканирует строку по шаблону. Все символы не входящие в шаблон 
//(включая запятую) отбрасываются. NaN выдается только в том случае если первый символ не попал 
//под шаблон. Пробелы в начале строки отбрасываются 

//преобразоание в строковое значение object.toString()
//Описание, примеры
//Каждый объект обладает методом toString, который вызывается автоматически каждый раз, когда требуется строковое представление объекта.
//Например, это произойдет в вызовах:

// alert требует строку,
 // поэтому произойдет неявный вызов obj.toString
 
//alert(obj)
// операция объединения строк сделает строку из obj
//var s = 'Объект в виде строки:'+obj



//function addUp(numArray) 
//{	var total = 0;
//	for (var i = 0; i < numArray.length; i++) {total += numArray[i];}
//	return total;}

//var zamenaFunkcii = addUp;

	 var zamenaFunkcii = function (numArray) 
		{	var total = 0;
			for (var i = 0; i < numArray.length; i++) {total += numArray[i];}
			return total;}
	 


var peremennaSMassivom = [f41, f51, f61];
var theTotal = zamenaFunkcii(peremennaSMassivom);// могло быть var theTotal = addUp([f41, f51, f61])
	 
 
	 
	 
		var p2 = document.getElementById("spisokOtzivov3");
		p2.innerHTML = "Всего вы прожили в Харькове&#58; " + theTotal;
		
		  if (theTotal<=7) {	
		  var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br> Ну вы пока что <span>начинающий</span> Харьковчанин.<br> Но все впереди еще&#33;";
		var uladding = document.getElementById("spisokOtzivov3");
		uladding.appendChild(adding); }; 
				
	   if (theTotal>7 && theTotal<20) {
	   var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br> Поздравляем, Вы &#45; <span>реальный коренной ХАРЬКОВЧАНИН</span>&#33;<br>Оставайтесь верным своему родному городу&#33;";
		var uladding = document.getElementById("spisokOtzivov3");
		uladding.appendChild(adding);}; 
		
	    if (theTotal>20) { var adding = document.createElement("span");
		adding.className = "italic";
		adding.innerHTML = "<br><br> Разрешите высказать Вам свою уважуху&#33;<br> Вы просто коренной зубр&#45;Харьковчанин&#33;<br><span>Спасибо Вам за годы, отданные Харькову...</span>";
		var uladding = document.getElementById("spisokOtzivov3");
		uladding.appendChild(adding);}; 
		
	 
}









