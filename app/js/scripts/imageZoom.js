export const imageZoom = () => {
	if (!$.fn.imagezoomsl) {
		$('.msg').show();
		return;
	} else $('.msg').hide();

	// plugin initialization
	$('.image').imagezoomsl({
		innerzoommagnifier: true,
		classmagnifier: 'round-loope',
		magnifiersize: [260, 260],
		// disables the scrolling of the document with the mouse wheel when the cursor is over the image
		disablewheel: false,
	});
};
