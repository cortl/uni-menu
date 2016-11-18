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
		}
		$("#search-box").val("");
		$("#search-term").text(term);
	});
	$("#search_back_btn").click(function(){
		$("#menu-block").show();
		$("#nav-block").show();
		$("#location-block").show();
		$("#search-block").hide();
		$("#search-box").val("");
		$("#ball-block").hide();
	});
	$("#search-box").keypress(function(e){
		if(e.which == 13){//Enter key pressed
			$('#search').click();//Trigger search button click event
		}
	});
});