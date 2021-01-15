function changeAllBgs(){
	var targets=document.getElementsByTagName('div');
	for(var index=0; index<targets.length; index++){
		var div=targets[index];
		if (div.id!=='noChange'){
		div.style.backgroundColor='green';
		break; 
		}
	}
}


window.onload=function(){
	//counter++means counter=counter+1
	//for(var counter=1; counter<=10; counter++){
		//console.log(counter);
	//}
//}
var button= document.getElementById('changeAll');
button. addEventListener('click', changeAllBgs);
}