//click search box
function click(){
	var d = document.getElementsByTagName('ytd-searchbox');
	var input = d[0].getElementsByTagName('input');
	input[0].focus();
	input[0].click();
}

//remove drop-down menu
function remove(){
	var iframe = document.getElementsByClassName('gstl_50 sbdd_c');
	var style = iframe[0].getAttribute('style');
	if(!style.includes('display')){
		iframe[0].setAttribute('style', style.concat(" display: none;"));
	}
	var drop = document.getElementsByClassName('gstl_50 sbdd_a');
	style = drop[0].getAttribute('style');
	if(!style.includes('display')){
		drop[0].setAttribute('style', style.concat(" display: none;"));
	}
}

//main function
function loop(){
	window.onfocus = function() {
		click();
		setTimeout(remove, 10); //wait for HTML changes
	}
}

//wait for DOM to be fully loaded
window.addEventListener('DOMContentLoaded', (event) => {
	click();
	setTimeout(remove, 10); //wait for HTML changes
	loop();
});