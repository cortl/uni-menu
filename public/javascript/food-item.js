jQuery(document).ready(function($){	
	$(".modal-trigger").leanModal()
	$(".food_lnk").click(function(e){
		if ($(this).hasClass("search-name") || $(this).hasClass("search")){
			$("#addToMenu").hide();
		} else {
			$("#addToMenu").show();
		}
		var foodName = $(this).text();
		$("#food_item").text(foodName)

		var calories = foods[foodName].calories
		var serving = foods[foodName].serving
		var fatcalories = foods[foodName].fatcalories
		var fat = foods[foodName].fat
		var satfat = foods[foodName].satfat
		var transfat = foods[foodName].transfat
		var sodium = foods[foodName].sodium
		var sugar = foods[foodName].sugar
		var fiber = foods[foodName].fiber
		var protein = foods[foodName].protein
		var carbs = foods[foodName].carbs
		var ingredients = foods[foodName].ingredients

		$("#servingsize").text(serving);
		$("#calories").text(calories);
		$("#fromfat").text(fatcalories);
		$("#fat").text(fat);
		$("#carbs").text(carbs);
		$("#satfat").text(satfat);
		$("#fiber").text(fiber);
		$("#transfat").text(transfat);
		$("#sugars").text(sugar);
		$("#sodium").text(sodium);
		$("#protein").text(protein);
		$("#ingredients").text(ingredients);
	});
	$("#addToMenu").click(function(e) {
		addFood($("#food_item").text())
	})
});