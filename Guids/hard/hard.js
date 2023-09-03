$(function(){
	var counter = 1;
	var $pages = $('.pages .page');
		$("body").keydown(function(e) {
			  if((e.keyCode == 37 || e.keyCode == 38) && counter>1 ) { // Venstre
				 $(".pages").animate({
					'margin-left': "+=100%"
				 });
				 counter--;
				  console.log(counter);
			  }
			  else if((e.keyCode == 39 || e.keyCode == 40) && counter<$pages.length ) { // Høyre
				 $(".pages").animate({
					'margin-left': "-=100%"
				 });
				  counter++;
				 console.log(counter);

			  }
		});	
});

$(function () {
	var counter = 1;
	var $pages = $(".pages .page");
	var startX;
  
	$("body").on("touchstart", function (e) {
	  startX = e.originalEvent.touches[0].pageX;
	});
  
	$("body").on("touchend", function (e) {
	  var endX = e.originalEvent.changedTouches[0].pageX;
	  var deltaX = startX - endX;
  
	  if (deltaX > 50 && counter < $pages.length) {
		// Swipe left
		$(".pages").animate({
		  "margin-left": "-=100%",
		});
		counter++;
		console.log(counter);
	  } else if (deltaX < -50 && counter > 1) {
		// Swipe right
		$(".pages").animate({
		  "margin-left": "+=100%",
		});
		counter--;
		console.log(counter);
	  }
	});
  });