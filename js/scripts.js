/*-----Javascript for js-creative-website */
$(document).ready(function () {
	document.querySelectorAll('.story-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			btn.classList.toggle('change');
			btn.nextElementSibling.classList.toggle('change');
		});
	});

});
