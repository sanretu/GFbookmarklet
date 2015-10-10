(function(window,undefined){
	var btnRun_timer;

	function autorun(){
		var btnRun = document.getElementById('btnFight');
		btnRun_timer = setInterval(autobtnclick(), 1000);
	}

	function autobtnclick(){
		strstmn = document.getElementById('staminaCnt').innerHTML;
		intstmn = strstmn.split("/");
		if(intstmn[0] < 6){
			var btnHerfbar = document.getElementById('staminaItem_24');
			btnHerfbar.click();
			var btnOk = document.getElementById('confirmPopOkBtn');
			btnOk.click();
		}
	}

	function stopautorun(){
		clearInterval(btnRun_timer);
	}
	var amb = document.getElementById('ambHeader');
	var btnRunNode = document.createElement('button');
	btnRunNode.setAttribute('type', 'button');
	btnRunNode.setAttribute('onclick', 'autorun()');
	var textNode1 = document.createTextNode('AutoRun');
	var btnRunStopNode = document.createElement('button');
	btnRunStopNode.setAttribute('type', 'button');
	btnRunStopNode.setAttribute('onclick', 'stopautorun()');
	var textNode2 = document.createTextNode('StopRun');
	btnRunNode.appendChild(textNode1);
	btnRunStopNode.appendChild(textNode2);
	amb.appendChild(btnRunNode);
	amb.appendChild(btnRunStopNode);
})(window);
