var totalFoodList = ["Omelet","Homestyle Belgian Waffle","Scrambled Eggs","Authentic French Toast","Sausage Patty","Breakfast Fried Potatoes","Honey Wheat Donuts","Raspberry Chocolate Scone","Cream of Asparagus Soup","Chicken Noodle Soup","Travis' Peppy Chicken Pasta","Romaine and Orange Salad","Lasagna","Baked Chicken Breast","Tuna Casserole","Panther Chili","Cajun Pork and Red Beans","Cajun Fish","Gluten Free Barbeque Chicken","Grilled Vegetable Sandwich","Red Onion and Shrimp Stir Fry","Stir Fry Chicken","Monte Cristo Sandwich","Spicy Chicken Sandwich","Garden Burger","Beef Stroganoff and Egg Noddles","Chicken Sandwich","Criss Cut Potatoes","Beef Pizza","Cheese Pizza","Supreme Pizza","Tacos and Nachos","Strawberry Lemonade Bar","Toffee Crunch Cookies","Broccoli Chicken Chowder","Gluten Free Hot Dog","Corn Dog","General Tso's Chicken","Breakfast Pizza"]
jQuery(document).ready(function($) {
	$("#search").click(function() {
		$("#menu-block").hide();
		$("#nav-block").hide();
		$("#location-block").hide();
		$("#search-block").show();
		$("#ball-block").hide();
		$("#generate-block").hide();
		var term = $("#search-box").val();
		if (term == "8ball") {
			$("#ball-block").fadeIn();
		}
		if (term != "") {
			$(".search-name").text(term);
			$("#search-results").show();
			$("#search-term").text(term);
			$("#search-context").text("Showing results for")
			$("#not-found").hide();
			var results = getSearchResults(term);
			$("#result-table").empty();
			for (var i = 0; i < results.length; i++) {
				$("#result-table").append(generateSearchResult(results[i]));
			}
			// Register modals on the generated html
			$(".modal-trigger").leanModal()
		} else {
			$("#search-results").hide();
			$("#search-context").text("Results not found for")
			$("#search-term").text(term);
		}
		$("#search-box").val("");

	});
	$("#search_back_btn").click(function() {
		$("#menu-block").show();
		$("#nav-block").show();
		$("#location-block").show();

		$("#search-box").val("");

		$("#search-block").hide();
		$("#ball-block").hide();
	});
	$("#search-box").keypress(function(e) {
		if (e.which == 13) { //Enter key pressed
			$('#search').click(); //Trigger search button click event
		}
	});
});
function generateSearchResult(foodItem){
	var locations = ["Piazza","Rialto"]
	var dates = ["Mon, Nov 28","Thu, Dec 1","Fri, Dec 2"]
	var meals = ["Breakfast","Lunch","Dinner"]
	var tableHtml = "<tr><td><a href=\"#nutrition\" data-toggle=\"nutrition\" data-target=\"#nutrition\" class=\"food_lnk modal-trigger search\"><span class=\"food_lnk search-name\">"+foodItem+"</span></a></td><td>"+getRandomArrayElement(locations)+"</td><td>"+getRandomArrayElement(dates)+"</td><td>"+getRandomArrayElement(meals)+"</td></tr>"
	return tableHtml;

}
function getRandomArrayElement(inputArray){
	var randomNum = Math.floor(Math.random() * inputArray.length)
	return inputArray[randomNum]
}
function getSearchResults(searchTerm){
	var options = {
	  shouldSort: true,
	  threshold: 0.6,
	  location: 0,
	  distance: 100,
	  maxPatternLength: 32,
	  keys: []
	};
	var fuse = new Fuse(totalFoodList, options); // "list" is the item array
	var result = fuse.search(searchTerm);
	var foodList = []
	for (var i = 0; i < result.length; i++) {
		foodList.push(totalFoodList[result[i]])
	}
	return foodList;
}