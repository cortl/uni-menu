enablePrice = false;
function addFood(foodItem) {
	var calories = foods[foodItem]["calories"]
	var servingSize = foods[foodItem]["serving"]
	if (enablePrice){
		var price = foods[foodItem]["Price"]
	}
	if (enablePrice){
		var newRow = "<tr><td><span class=\"meal-item-name\">"+foodItem+"</span></td><td><span class=\"meal-item-servings\">"+servingSize+"</span></td><td><span class=\"meal-item-calories\">"+calories+"</span></td><td>$<span class=\"meal-item-price\">"+price+"</span></td><td><a href=\"#\" class=\"remove delete-food\"><i style=\"font-size: 1.5rem\" class=\"red-text material-icons\">delete</i></a></td></tr>"
	} else {
		var newRow = "<tr><td><span class=\"meal-item-name\">"+foodItem+"</span></td><td><span class=\"meal-item-servings\">"+servingSize+"</span></td><td><span class=\"meal-item-calories\">"+calories+"</span></td><td><a href=\"#\" class=\"remove delete-food\"><i style=\"font-size: 1.5rem\" class=\"red-text material-icons\">delete</i></a></td></tr>"
	}
	$("#mmeal-bod").append(newRow)
	if (enablePrice){
		$("#totalCost").text(getTotalCost())
	}
	$("#total-cal").text(getTotalCalories())
	registerDelete()

}
function getTotalCalories() {
	var mealItems = $(".meal-item-calories");
	calories = 0
	for (var i = mealItems.length - 1; i >= 0; i--) {
		var cal = parseInt(mealItems[i].innerText)
		calories += cal
	}
	return calories
}
function getTotalCost() {
	var mealItems = $(".meal-item-price");
	price = 0
	for (var i = mealItems.length - 1; i >= 0; i--) {
		var what = mealItems[i]
		var pri = parseFloat(mealItems[i].innerText)
		price += pri
	}
	return price
}
function registerDelete() {
	$('#mmeal-bod').on('click','tr a.remove',function(e){
		e.preventDefault();
		$(this).closest('tr').remove();
		$("#total-cal").text(getTotalCalories());
	});
}