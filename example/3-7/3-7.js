function actionCompleted(){
	alert('Completed!')
};

//actionCompleted();

var actionCompletedAgain= function(){
	alert('Completed again!')
}

//actionCompletedAgain();
function popUpMsg(msg){
	var finalMsg='site message: '+msg;
	alert(finalMsg);
}

//popUpMsg('test!');
//popUpMsg('warning!');

function userMsg(name, msg='nothing'){
	var finalMsg=name+' says: '+msg;
	alert (finalMsg);
}

//userMsg('Victor', 'Surprise!');
//userMsg('victor');

function complexCalc(x, y){
	var result=0;
	result=x*y;
	result=result/(x-y);
	result=result*y-x;
	return result;
}

//var finalresult= complexCalc(5, 10);
//alert (finalresult);

var demoFunc={
	popUpMsgFunc: popUpMsg,
	userMsgFunc: userMsg,
	complexCalcFunc: complexCalc
};

demoFunc. userMsgFunc('Victor', 'I am calling a functionin an object.')