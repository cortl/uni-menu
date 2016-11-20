function addFood(foodItem) {
	var calories = foods[foodItem]["calories"]
	var servingSize = foods[foodItem]["serving"]
	var rapGame = "<tr><td><span class=\"meal-item-name\">"+foodItem+"</span></td><td><span class=\"meal-item-servings\">"+servingSize+"</span></td><td><span class=\"meal-item-calories\">"+calories+"</span></td><td><a href=\"#\" class=\"remove delete-food\"><i class=\"small red-text material-icons\">delete</i></a></td></tr>"
	$("#mmeal-bod").append(rapGame)
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
function registerDelete() {
	$('#mmeal-bod').on('click','tr a.remove',function(e){
		e.preventDefault();
		$(this).closest('tr').remove();
		$("#total-cal").text(getTotalCalories());
	});
}