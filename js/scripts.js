/*-----Javascript for js-creative-website */
$(document).ready(function () {
	/*=============================================
            about button
   ================================================*/
	document.querySelectorAll('.story-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			btn.classList.toggle('change');
			btn.nextElementSibling.classList.toggle('change');
		});
	});

	/*=============================================
               scroll button
   ================================================*/
	//Get the button
	let scrollButton = document.getElementById('scroll-btn');
   scrollButton.addEventListener('click', topFunction);
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (
			document.body.scrollTop > 250 ||
			document.documentElement.scrollTop > 250
		) {
			scrollButton.style.display = 'flex';
		} else {
			scrollButton.style.display = 'none';
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
});
/*=============================================
            smooth scroll
================================================*/
$(document).ready(function () {
	
	$('.navbar-link, #scroll-btn').on(
		'click',
		function (event) {
			if (this.hash !== '') {
				event.preventDefault();

				// Store hash
				let hash = this.hash;

				$('html, body').animate(
					{
						scrollTop: $(hash).offset().top,
					},
					1000,
					function () {
						window.location.hash = hash;
					}
				);
			}
		}
	);
})
