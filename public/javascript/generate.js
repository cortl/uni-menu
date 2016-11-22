jQuery(document).ready(function($){
	var generatedFood = []
	$("#generate_btn").click(function(){
		$("#generate-block").show();
		$("#menu-block").hide();
		$("#nav-block").hide();
	});
	$("#generate_back_btn").click(function(){
		$("#generate-block").hide();
		$("#menu-block").show();
		$("#nav-block").show();
	});
	$("#generate_meal_btn").click(function(){
		// Check if any of the inputs are empty, if they are, send
		// a toast saying OY FACK OFF M8

		// Else just populate the meal table with shit.
		populateMeal()
	});
	$("#add_generated_to_meal_btn").click(function(){
		if(generatedFood.length==0){
			Materialize.toast('You have to generate food first!', 4000)
		} else {
			Materialize.toast('Food has been added to your meal!', 4000)
		}
		for (var i = 0; i < generatedFood.length; i++) {
			addFood(generatedFood[i])
		}
	});
	function getValidFoodList(calorieLimit, proteinLimit, fatLimit, carbLimit) {
		var currentCals = 0;
		var currentProtein = 0;
		var currentFat =0;
		var currentCarbs = 0;
		var foodList = []

		// Cheap way of doing this, pretty much set these to unreachable heights if they didn't set a max
		if (isNaN(proteinLimit)){
			proteinLimit = 9007199254740000;
		}
		if (isNaN(fatLimit)){
			fatLimit = 9007199254740000;
		}
		if (isNaN(carbLimit)){
			carbLimit = 9007199254740000;
		}
		if (calorieLimit >= 10000){
			// No.
			Materialize.toast('Please enter in a calorie limit less than 10,000', 4000)
			return;
		}
		while ((currentCals < calorieLimit) && (currentProtein < proteinLimit) && (currentFat < fatLimit) && (currentCarbs < carbLimit)){
			var foodItem = getRandomArrayElement(totalFoodList);
			foodList.push(foodItem)
			currentCals += parseInt(foods[foodItem].calories)
			currentProtein += parseInt(foods[foodItem].protein)
			currentFat += parseInt(foods[foodItem].fat)
			currentCarbs += parseInt(foods[foodItem].carbs)

		}
		return foodList;
	}
	function generateMealFooter(foodTableList) {
		var mealTableFooter = ("#generate-table-foot");
		var calories = 0
		var protein = 0
		var fat = 0
		var carbs = 0
		for (var i = 0; i < foodTableList.length; i++) {
			calories += parseFloat(foods[foodTableList[i]].calories)
			protein += parseFloat(foods[foodTableList[i]].protein)
			fat += parseFloat(foods[foodTableList[i]].fat)
			carbs += parseFloat(foods[foodTableList[i]].carbs)
		}
		$("#generate_total_calories").text(Math.round(10*calories)/10);
		$("#generate_total_protein").text(Math.round(10*protein)/10);
		$("#generate_total_fat").text(Math.round(10*fat)/10);
		$("#generate_total_carbs").text(Math.round(10*carbs)/10);
	}
	function populateMeal() {
		var calLimit = parseInt($("input#user_calories").val());
		var proteinLimit = parseInt($("input#user_protein").val());
		var carbLimit = parseInt($("input#user_carbs").val());
		var fatLimit = parseInt($("input#user_fat").val());

		if (calLimit==0 || isNaN(calLimit)) {
			Materialize.toast('Please enter in a calorie limit', 4000)
			return;
		}
		var mealTable = $("#generate-table");
		mealTable.empty();
		// get three things from the food list
		var foodList = getValidFoodList(calLimit, proteinLimit, fatLimit, carbLimit)

		for (var i = 0; i < foodList.length; i++) {
			var calories = foods[foodList[i]].calories
			var carbs = foods[foodList[i]].carbs
			var protein = foods[foodList[i]].protein
			var fat = foods[foodList[i]].fat
			var dumbHtml = "<tr><td><a href=\"#nutrition\" data-toggle=\"nutrition\" data-target=\"#nutrition\" class=\"food_lnk modal-trigger search\"><span class=\"food_lnk search-name\">"+foodList[i]+"</span></a></td><td>"+calories+"</td><td>"+protein+"</td><td>"+fat+"</td><td>"+carbs+"</td></tr>"
			mealTable.append(dumbHtml);
		}
		generatedFood = foodList;
		generateMealFooter(foodList);
		$("#add_generated_to_meal_btn").show();
		// Re-register modals nstuff
		$(".modal-trigger").leanModal();
	}
	
})
