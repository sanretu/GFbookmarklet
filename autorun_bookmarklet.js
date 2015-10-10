function Sleep(ms) {
    var d1 = new Date().getTime();
    var d2 = new Date().getTime();
    while( d2 < (d1 + ms) ) {
        d2 = new Date().getTime();
    }
    return;
}

function btnclickevent(btnnum){
	var btnRun_timer;
	function autobtnclick(btn){
		strstmn = document.getElementById('staminaCnt').innerHTML;
		intstmn = strstmn.split("/");
		btn.click();
		if(intstmn[0] < 6){
			Sleep(500);
			var btnHerfbar = document.getElementById('staminaItem_24');
			btnHerfbar.click();
			var btnOk = document.getElementById('confirmPopOkBtn');
			btnOk.click();
		}
	}
	if(btnnum == 1){
		(function(){
			var btnRun = document.getElementById('btnFight');
			btnRun_timer = setInterval(function(){autobtnclick(btnRun)}, 1000);
		})();
	}else{
		(function(){
			clearInterval(btnRun_timer);
		})();
	}
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
