 var godziny = document.getElementById("godzin"),
 	 minuty = document.getElementById("minut"),
 	 tygodnie = document.getElementById("tygodni"),
 	 dni = document.getElementById("dni"),
 	 sekundy = document.getElementById("sekund");

var _s = 1000,
    _m = _s*60,
    _g = _m*60,
    _d = _g*24,
    _t = _d*7;

var data = new Date(2016,04,11,6);

function odliczaj(now){
	var teraz = new Date(now);
	var czas = data - teraz;
	if(czas>0){
		var t = Math.floor(czas / _t),
			d = Math.floor(czas % _t / _d),
			g = Math.floor(czas % _d / _g),
			m = Math.floor(czas % _g / _m),
			s = Math.floor(czas % _m / _s);
	
		if(t<10)t="0"+t;
		if(d<10)d="0"+d;
		if(g<10)g="0"+g;
		if(m<10)m="0"+m;
		if(s<10)s="0"+s;
	
		tygodnie.innerHTML = t;
		dni.innerHTML = d;
		godziny.innerHTML = g;
		minuty.innerHTML = m;
		sekundy.innerHTML = s;
	}
}

var powtorz = setInterval(function(){odliczaj(Date())},1000);
odliczaj(Date());
