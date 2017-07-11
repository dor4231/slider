var sliderInt = 1;
var sliderNext = 2;
var count = $('#slider > Img').length;

$(document).ready(function() {
   $("#slider > Img#1").fadeIn(300);
    startSlider();
});

function startSlider() {
    console.log ("The value of count: " + count);

	loop = setInterval(function() {
		if (sliderInt === count) {
			sliderNext = 1;
			sliderInt = 1;
		}
		console.log("LOOP!!");
        $("#slider > Img").fadeOut(300);
        $("#slider > Img#" + sliderNext).fadeIn(300);
		
		sliderInt = sliderNext;
		sliderNext += 1;
	}, 3000);
};

$("a.right").click(function( event ) {
	event.preventDefault();
	if (sliderInt === count) {
			sliderNext = 1;
			sliderInt = 1;
		}
	clearInterval(loop);
	$("#slider > Img").fadeOut(200);
	$("#slider > img#" + sliderNext).fadeIn(300);
	
	sliderInt = sliderNext;
	sliderNext += 1;
	
	startSlider();
});

$("a.left").click(function( event ) {
	event.preventDefault();
	
		if (sliderInt === 1) {
		sliderNext = 1;
		sliderInt = count;
	}else 
		sliderInt -= 1;
	
	clearInterval(loop);
	$("#slider > Img").fadeOut(200);
	$("#slider > img#" + (sliderInt)).fadeIn(300);
	
	sliderInt -= 1;
	sliderNext += sliderInt;
	
	startSlider();
});