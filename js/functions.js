function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('result').innerHTML = '';
}

function printResult(msgs){
	var div = document.createElement('div');
	div.innerHTML = msgs;
	document.getElementById('result').appendChild(div);
}