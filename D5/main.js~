function JS(){
    const panels = document.querySelectorAll('.panels');

    function toggleOpen(){
	console.log('hello');
	this.classList.toggle('open');
    }
    function toggleActive(e){
	console.log(e.propertyName);
	if(e.propertyName.includes('flex')){
	    this.classList.toggle('open-active');
	}
    }
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));
}
