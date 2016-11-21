jQuery(document).ready(function($){
	$("#search").click(function(){
		$("#menu-block").hide();
		$("#nav-block").hide();
		$("#location-block").hide();
		$("#search-block").show();
		$("#ball-block").hide();
		var term = $("#search-box").val();
		if (term=="8ball"){
			$("#ball-block").fadeIn();
		}if (term != "" && term in foods){
			$(".search-name").text(term);
			$("#search-results").show();
			$("#search-term").text("Showing results for " + term);
			$("#not-found").hide();
		}else {
			$("#search-results").hide();
			$("#search-term").text("Results not found for " + term);
			
		}
		$("#search-box").val("");
		
	});
	$("#search_back_btn").click(function(){
		$("#menu-block").show();
		$("#nav-block").show();
		$("#location-block").show();
		
		$("#search-box").val("");

		$("#search-block").hide();
		$("#ball-block").hide();
		$("#generate-block").hide();
	});
	$("#search-box").keypress(function(e){
		if(e.which == 13){//Enter key pressed
			$('#search').click();//Trigger search button click event
		}
	});
});