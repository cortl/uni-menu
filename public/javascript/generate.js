jQuery(document).ready(function($){
	$("#generate_btn").click(function(){
		$("#generate-block").show();
		$("#menu-block").hide();
		$("#nav-block").hide();
	});
	$("#generate_back_btn").click(function(){
		$("#generate-block").hide();
		$("#menu-block").show();
		$("#nav-block").show();
	})

	/*function populateMeal() {
		var table = document.getElementById('mealTable');

		var row0 = table.insertRow(0);
		var row1 = table.insertRow(1);
		var row3 = table.insertRow(2);

		var cell00 = row.insertCell(0);
		var cell01 = row.insertCell(1);
		var cell02 = row.insertCell(2);
		var cell03 = row.insertCell(3);
		var cell04 = row.insertCell(4);

		var cell10 = row.insertCell(0);
		var cell11 = row.insertCell(1);
		var cell12 = row.insertCell(2);
		var cell13 = row.insertCell(3);
		var cell14 = row.insertCell(4);

		var cell20 = row.insertCell(0);
		var cell21 = row.insertCell(1);
		var cell22 = row.insertCell(2);
		var cell23 = row.insertCell(3);
		var cell24 = row.insertCell(4);

		cell00.insert("swag")
	} */
	
})
