jQuery(document).ready(function($){	
	$(".modal-trigger").leanModal()
	$(".food_lnk").click(function(e){
		var foodName = $(this).text();
		$("#food_item").text(foodName)
	});
});