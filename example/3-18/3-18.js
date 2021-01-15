window.onload=function(){
	var profile={
		name: 'Victor Wang',
		age: 21,
		height: 166
	};
	for(var key in profile){
		console.log(key);
		console.log(profile[key]);
	}
}