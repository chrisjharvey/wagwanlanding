(function () {
	'use strict';

	function checkScroll() {
		if ($(this).scrollTop() > 200) {
			$('.navbar').addClass('solid');
		} else {
			$('.navbar').removeClass('solid');
		}
	}

	$(document).ready(function () {
		checkScroll();
		$(window).scroll(checkScroll);
		$('.navbar-toggler').click(function () {
			if ($(window).scrollTop() <= 300) {
				$('nav.navbar').toggleClass('solid-toggle');
			}
		});
	});

    $('#year').text(new Date().getFullYear());

   // AOS


})(jQuery);

// Set the date we're counting down to
let countDownDate = new Date("Jan 31, 2021 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);

 AOS.init({
     duration: 1000,
     easing: 'ease-in',
     once: true,
     mirror: false,
 });