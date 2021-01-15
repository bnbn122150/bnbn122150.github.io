var name='victor wang'
var age=21
var affiliation='NTHU'

var profile={
	name:'victor wang',
	age:21,
	affiliation:'NTHU',
	height:166,
	weight:57,
	contact:{
		home:27266666,
		mobile:[886974135784,9999999999,88888888888888]
	}
};

console.log(profile.name);
console.log(profile['name']);

profile.gender='male';
console.log(profile.gender);

console.log(profile.contact.home);
console.log(profile.contact.mobile[0]);
console.log(name.length);
console.log(profile.contact.mobile.length);