
var lastReportTime = 0;

window.onload = init;

function init() {
	var interval = setInterval(handleRefresh, 3000);
	handleRefresh();
}

function handleRefresh() {
	console.log("here");
	var url = "http://gumball.wickedlysmart.com" +
				"?callback=monitoringHarkivCorruption" +
				"&lastreporttime=" + lastReportTime +
				"&random=" + (new Date()).getTime();
	var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src", url);
	newScriptElement.setAttribute("id", "jsonp");
	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if (oldScriptElement == null) {
		head.appendChild(newScriptElement);
	}
	else {
		head.replaceChild(newScriptElement, oldScriptElement);
	}
}

function monitoringHarkivCorruption(sales) {
	var salesDiv = document.getElementById("result");
	for (var i = 0; i < sales.length; i++) {
		var sale = sales[i];
		var div = document.createElement("span");
		div.setAttribute("class", "scanner_assembly_corruption");
		
		
		date = new Date();
  var d = date;
  d = ['0'+d.getDate(),'0'+(d.getMonth()+1),''+d.getFullYear(), '0'+d.getHours(),'0'+d.getMinutes(), '0'+d.getSeconds() ];
  for(var i=0; i<d.length; i++) {
    d[i] = d[i].slice(-2);
  }
 
  var fortune = d.slice(0,3).join('.')+' в '+'<span>'+d.slice(3).join(':')+'</span> ';
   
  var tail= " материал<br>";
  
		if (sale.sales == 1) {tail= " материал<br>";}
		if (sale.sales == 2 || sale.sales == 3 || sale.sales == 4) {tail= " материала<br>";}
		if (sale.sales == 5 || sale.sales == 6|| sale.sales == 7|| sale.sales == 8|| sale.sales == 9|| sale.sales == 10) {tail= " материалов<br>";}
	 

		
		div.innerHTML = fortune+" роботами извлечено и заархивировано " +  sale.sales + tail;
		//salesDiv.appendChild(div);
		if (salesDiv.childElementCount == 0) {
			salesDiv.appendChild(div);
		}
		else {
			salesDiv.insertBefore(div, salesDiv.firstChild);
		}
	}

	if (sales.length > 0) {
		lastReportTime = sales[sales.length-1].time;
	}
}


