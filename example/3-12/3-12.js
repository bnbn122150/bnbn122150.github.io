function mouseEventMeg(){
	alert('mouse event!');

};


window.onload = function(){
	var em=document. querySelector('body');
	em.addEventListener('click', function(){
	alert('clicked!')
	});
	em.addEventListener('mouseenter', mouseEventMeg)
	em.addEventListener('mouseleave', mouseEventMeg)
	em.removeEventListener('mouseleave')
}