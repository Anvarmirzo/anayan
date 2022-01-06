export const textareaHeight = () => {
	const textarea = document.getElementById('msg');
	if (textarea) {
		textarea.addEventListener('input', function (e) {
			console.log();
			e.target.style.height = '5px';
			e.target.style.height = textarea.scrollHeight + 'px';
		});
	}
};
