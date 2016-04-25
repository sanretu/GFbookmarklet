var d1, d2

function Sleep(ms) {
    d1 = new Date().getTime();
    d2 = new Date().getTime();
    while( d2 < (d1 + ms) ) {
        d2 = new Date().getTime();
    }
    return;
}

function URLdetermine(url){
	(function(url){
		
	})(url);
	switch(url){
	case :
		break;
	case :
		break;
			
	}
}

function btnclickevent(btnnum){
	var btnRun_timer;
	function autobtnclick(btn){
		if(btnnum != 1){
			(function(){
				clearInterval(btnRun_timer);
			})();
		}
		strstmn = document.getElementById('staminaCnt').innerHTML;
		intstmn = strstmn.split("/");
		btn.click();
		if(intstmn[0] < 6){
			Sleep(1000);
			var btnHerfbar = document.getElementById('staminaItem_24');
			btnHerfbar.click();
			var btnOk = document.getElementById('confirmPopOkBtn');
			btnOk.click();
			Sleep(1000);
		}
	}
	(function(){
		var btnRun = document.getElementById('btnFight');
		btnRun_timer = setInterval(function(){autobtnclick(btnRun)}, 1000);
	})();
}

(function(window,undefined){
	var amb = document.getElementById('ambHeader');
	var btnRunNode = document.createElement('button');
	btnRunNode.setAttribute('type', 'button');
	btnRunNode.setAttribute("onclick", "btnclickevent(1)");
	var textNode1 = document.createTextNode('AutoRun');
	var btnRunStopNode = document.createElement('button');
	btnRunStopNode.setAttribute('type', 'button');
	btnRunStopNode.setAttribute('onclick', 'btnclickevent(2)');
	var textNode2 = document.createTextNode('StopRun');
	btnRunNode.appendChild(textNode1);
	btnRunStopNode.appendChild(textNode2);
	amb.appendChild(btnRunNode);
	amb.appendChild(btnRunStopNode);
})(window);
