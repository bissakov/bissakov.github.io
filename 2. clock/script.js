function formatNum(n) {
	return (n.length === 1) ? '0' + n : n;
}

function updateHand(hand, degree) {
	hand.style.transform = `rotate(${degree}deg)`
}

function main() {
	const secHand = document.querySelector('.sec');
	const minHand = document.querySelector('.min');
	const hourHand = document.querySelector('.hour');

	setInterval(() => {
		const today = new Date();
		// const seconds = formatNum(today.getSeconds().toString());
		// const minutes = formatNum(today.getMinutes().toString());
		// const hours = formatNum(today.getHours().toString());

		const seconds = today.getSeconds();
		const minutes = today.getMinutes();
		const hours = today.getHours() % 12;

		if (seconds === 0) {
			secHand.style.transitionDuration = '0s';
			minHand.style.transitionDuration = '0s';
			hourHand.style.transitionDuration = '0s';
		} else {
			secHand.style.transitionDuration = '0.05s';
			minHand.style.transitionDuration = '0.05s';
			hourHand.style.transitionDuration = '0.05s';
		}

		const secDegrees = ((seconds / 60) * 360) + 180;
		const minDegrees = ((minutes / 60) * 360) + 180;
		const hourDegrees = 0.5 * (hours * 60 + minutes) + 180;

		updateHand(secHand, secDegrees);
		updateHand(minHand, minDegrees);
		updateHand(hourHand, hourDegrees);
		
		// console.log(`${hours}:${minutes}:${seconds}`);
	}, 1000);
}

main();