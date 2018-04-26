/* playlist.js */

window.onload = function() {

	var button1 = document.getElementById("addButton");
	button1.onclick = handleButtonClick;

	
	var buttonX = document.getElementById("addButtonX");
	buttonX.onclick = ha;

	
	var button2 = document.getElementById("addButton2");
	button2.onclick = handleButton;

	
	var button3 = document.getElementById("addButton3");
	button3.onclick = handle;

	
	
	var button4 = document.getElementById("addButton4");
	button4.onclick = hand;
	
	
	
	
	
    var sl4 = Math.floor(Math.random() * 10)+1;
	alert(sl4);
	var p4 = document.getElementById("k875");
		 
		  if (sl4 == 1) {
		p4.innerHTML = "Фраза &#34;я поеду на ночной&#34; &#41; означает поездку на какой рынок&#63;";}
			
		else if (sl4 == 2) {
			p4.innerHTML = "Район из трех букв, куда лучше вечерами не соваться&#63;"; 
		}
		else if (sl4 == 3) {
			p4.innerHTML = "Кличка нынешнего мера Харькова на букву "Г"&#63;"; 
		}
		else if (sl4 == 4) {
			p4.innerHTML = "Какой номер имеет городская клиническая психиатрическая больница, проще говоря - "психушка"&#63;"; 
		}
		
		else if (sl4 == 5) {
			p4.innerHTML = "ХИРЭ - это что (универ, название ракеты, название хиппового народа)&#63;"; 
		}
		
		else if (sl4 == 6) {
			p4.innerHTML = "Самая центральная улица Харькова&#63;"; 
		}
		else if (sl4 == 7) {
			p4.innerHTML = "Парк с аттракционами называется парк имени ...&#63;"; 
		}
		else if (sl4 == 8) {
			p4.innerHTML = "Самый большой спальный район Харькова на букву С.&#63;"; 
		}
		else if (sl4 == 9) {
			p4.innerHTML = "Сколько веток метро в Харькове&#63;"; 
		}
		 else (sl4 == 10) {
			p4.innerHTML = "Сколько человек живут в Харькове сейчас&#63;"; 
		 	}
	
	
}

 
//weight  male
function handleButtonClick(e) {
	alert ("window.location = #a12");
	window.location = "#a12";
	var textInput = document.getElementById("otsudaSnimaem");
	var songName = textInput.value;
	var vesМale = (songName - 100) * 1.1678;
	vesМale = (vesМale).toFixed(1);   
 
	if (songName == "" || songName == " " || songName == "  ") {	alert("Ввведите свой рост в сантиметрах");	}
			
		else if (songName>240) {	
			
		var p = document.createElement("div");
		p.innerHTML = "Ваш рост целых " + songName + " см&#63;&#33;" + "<br>Ну не бывает такого огромного роста у мужиков.<br>В Харькове таких высоких парней нет и не планируется.";
					
		var ul = document.getElementById("xx1");
		ul.appendChild(p);}
			
			
		
	else if (songName<145) {
	
		var p = document.createElement("div");
		p.innerHTML = "Ваш рост лишь " + songName + " см&#63;" + "<br>Вам еще надо подрасти и потом взвешиваться.<br>Подрастайте, морковку потребляйте&#33;";
		var ul = document.getElementById("xx1");
		ul.appendChild(p); }		
		
			
			
	else {
		var p = document.createElement("div");
	p.innerHTML = "Ну если Ваш рост и правда " + songName + " см&#44;" + "<br>то нормальный вес харьковчанина при таком росте &#45; " + vesМale + " кг"; 
	 
		var ul = document.getElementById("xx1");
		ul.appendChild(p);
				  		   
		// for Ready Bake
		save(vesFemale);
			 
		}


}



//weight female

function ha (e) {

	var textInputX = document.getElementById("otsudaSnimaemX");
	var songNameX = textInputX.value;
	var vesFemale = (songNameX - 110) * 1.15478;
	var add = parseInt(vesFemale);
	vesFemale = (vesFemale).toFixed(3);   
	 var grams = vesFemale - add;
	 grams = parseInt(grams * 1000);
	  var aaa = parseInt(vesFemale);
	 
	if (songNameX == "" || songNameX == " " || songNameX == "  " || songNameX == "   ") {	alert("Ввведите свой рост в сантиметрах");	}
	
	
	
		else if (songNameX > 220 ) {	
			
		var p = document.createElement("div");
		p.innerHTML = "Ваш рост аж " + songNameX + " см&#63;&#33;" + "<br>Ну не бывает такого огромного роста.<br>В Харькове таких высоких людей нет пока что." + "<br>Ну чисто в теории при таком росте должен быть вес "+aaa+" кг.";
					
		var ul = document.getElementById("xx2");
		ul.appendChild(p);
				
		}
		

	else if (songNameX<135 ) {
		
		var p = document.createElement("div");
		p.innerHTML = "Ваш рост лишь " + songNameX + " см&#63;" + "<br>Вам еще надо подрасти и потом взвешиваться.<br>Подрастайте и пока не заморачивайтесь о весе&#33;";
		var ul = document.getElementById("xx2");
		ul.appendChild(p);
		 
	 }		
		
	
	else {
			var p = document.createElement("div");
		p.innerHTML = "Что ж, если Ваш рост " + songNameX + " см&#44;" + "<br>то нормальный вес харьковчанки при таком росте &#45; " + add + " кг." + "<br>Если быть точным до грамма,<br>то Ваш вес должен составлять " + vesFemale + " кг.<br>" + "Цифры после запятой означают граммы, то есть Ваш нормальный вес &#45; " + add + " кг. и " + grams + " граммов.<br>Согласитесь, "+ grams + " граммов &#45; это существенно, <br>когда речь идет о весе."; 
		var ul = document.getElementById("xx2");
		ul.appendChild(p);
		   
		// for Ready Bake
		save(vesFemale);
				
	}
}











function handleButton(e) {

	var textInput2 = document.getElementById("otsudaSnimaem2");
	var songName2 = textInput2.value;
	
	var textInput3 = document.getElementById("otsudaSnimaem3");
	var songName3 = textInput3.value;
	
	songName4 = songName2 * songName3;
	
	if (songName2 == "" || songName2 == " " || songName2 == "  " || songName2 == "   " || songName2 == "    " || songName3 == "" || songName3 == " " || songName3 == "  " || songName3 == "   " || songName3 == "    ") {	alert("Ввведите число от 1 до 10");	}
				
	
	else {
		var p2 = document.getElementById("spisokOtzivov2");
		p2.innerHTML = "Площадь составляет: " + songName4;
		
		// for Ready Bake
		save(songName4);
				
	}
}






function handle(e) {

	var textInput11 = document.getElementById("otsudaSnimaem11");
	var f4 = textInput11.value;

	
	var textInput12 = document.getElementById("otsudaSnimaem12");
	var f5 = textInput12.value;
		
	var textInput13 = document.getElementById("otsudaSnimaem13");
	var f6 = textInput13.value;
	
	var textInput14 = document.getElementById("otsudaSnimaem14");
	var f7 = textInput14.value;
	
	
	if (f4== "" || f5== "" || f6== "" || f7 == "" ||
	
	f4== " " || f5== " " || f6== " " || f7 == " " ||
	
	f4== "  " || f5== "  " || f6== "  " || f7 == "  "||
	
	f4== "   " || f5== "   " || f6== "   " || f7 == "   "	
	
	) {	alert("Ввведите число от 1 до 10");	}
	  
	var f41 = Number(f4);  //Стандартно КОНВЕРТАЦИЯ  В ЧИСЛО осуществляется вызовом Number()
	var f51 = parseFloat(f5); //более мягкая фильтрация в число: parseFloat("0.1zf") = 0.1  и КОНВЕРТАЦИЯ  В ЧИСЛО
	var f61 = parseInt(f6);  //более мягкая фильтрация в число: parseInt("08f.4", 10) = 8   и КОНВЕРТАЦИЯ  В ЧИСЛО
	 //parseFloat , parseInt переводят слева направо, пока это возможно. Если вообще невозможно - то NaN.
	var f71 = Number(f7);  
	
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


var theTotal = addUp([f41, f51, f61, f71]);

function addUp(numArray) {
	var total = 0;
	for (var i = 0; i < numArray.length; i++) {
		total += numArray[i];
	}
	return total;
}
 
	 
		var p2 = document.getElementById("spisokOtzivov3");
		p2.innerHTML = "Сумма значений массива равна: " + theTotal;
		
		// for Ready Bake
		save(theTotal);
				
 
}







function hand(e) {


	
	
	
	













	var textInput77 = document.getElementById("otsudaSnimaem20");
	var f77 = textInput77.value;
 
 if (f77== ""   ||
	
	f77== " "  ||
	
	f77== "  "  ||
	
	f77== "   "  	
	
	) {	alert("Ввведите число от 1 до 1200");	}
 
 
 
	var  avatar;
	 
	if (f77 < 100) {
		avatar = "Мышь";
	} else if (f77 > 100 && f77 < 1000) {
		avatar = "Кот";
	} else {
		avatar = "Обезъяна";
	}
		 
		var p2 = document.getElementById("spisokOtzivov4");
		p2.innerHTML = "Вы - " + avatar;
		
		// for Ready Bake
		save(avatar);
				
 
}



