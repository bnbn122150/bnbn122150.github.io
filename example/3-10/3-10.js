window.onload=function(){
	var allGroupEm=document.getElementsByClassName('group1');
	var groupEm= allGroupEm[0];
	console.log(groupEm.innerHTML);
	groupEm.innerHTML='content changed!';
	var idEm=document.getElementById('no6');
	idEm.innerHTML='no 6 changed!';
	idEm.style.color='red';
	idEm.style.backgroundColor='blue';
	idEm.style.marginLeft='5px'
}
//font-size=fontSize, text-align=textAlign