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