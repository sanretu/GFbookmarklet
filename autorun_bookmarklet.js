(function(window,undefined){
	var smp=document.getElementById('sample');
	var btnNode=document.createElement('button');
	btnNode.setAttribute('type','button');
	btnNode.setAttribute('onclick','location.reload()');
	var textNode=document.createTextNode('AutoRun');
	btnNode.appendChild(textNode);
	smp.appendChild(btnNode);
})(window);