(function(window,undefined){
	var btnRun_timer;
	var amb = document.getElementById('ambHeader');
	var btnRunNode = document.createElement('button');
	btnRunNode.setAttribute('type', 'button');
	btnRunNode.setAttribute('onclick', 'autorun()');
	btnRunNode.setAttribute('value', 'AutoRun');
	var btnRunStopNode = document.createElement('button');
	btnRunStopNode.setAttribute('type', 'button');
	btnRunStopNode.setAttribute('onclick', 'autorun()');
	btnRunStopNode.setAttribute('value', 'StopRun');
	amb.appendChild(btnRunNode);
	amb.appendChild(btnRunStopNode);

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
})(window);
