export const fancyboxConfig = () => {
	const panzoonTarget = document.getElementById('myPanzoom');
	if (myPanzoom) {
		const myPanzoom = new Panzoom(panzoonTarget, {
			// Your options go here
		});
	}
};
