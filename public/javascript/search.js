jQuery(document).ready(function($){
	$("#search").click(function(){
		$("#menu-block").hide();
		$("#nav-block").hide();
		$("#location-block").hide();
		$("#search-block").show();
		var term = $("#search-box").val();
		$("#search-box").val("");
		$("#search-term").text(term);
	});
	$("#search_back_btn").click(function(){
		$("#menu-block").show();
		$("#nav-block").show();
		$("#location-block").show();
		$("#search-block").hide();
		$("#search-box").val("");
	});
});