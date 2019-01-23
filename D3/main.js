function JS(){
    function handleUpdate(){
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
	
    }
    inputs.forEach(input => input.addEventListener('çhange', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
    
}
