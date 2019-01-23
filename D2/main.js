function setDate(){
    
    function getDate() {
	const now = new Date();
	
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds /60) *360) +90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes /60) *360) +90;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;
	const hours = now.getHours();
	const hoursDegrees = ((hours /12) *360) +90;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
	console.log(seconds);
	console.log(minutes);
	console.log(hours);
    }
    
    setInterval(getDate, 1000);
}
