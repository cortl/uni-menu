jQuery(document).ready(function($){	
	  $('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15 // Creates a dropdown of 15 years to control year
	  });
  	// $("#date_thing").datepicker('setDate', new Date());
  	// $("#calendar_btn").click(function(){
  	// 	$("#date_thing").datepicker("show");
  	// });
  	var $input = $('.datepicker').pickadate();
	var picker = $input.data('pickadate');
  	$("#calendar_btn").click(function(e) {
	    // stop the click from bubbling
	    e.stopPropagation();
	    // prevent the default click action
	    e.preventDefault();
	    // open the date picker
	    $('#date_thing').open
	});
});
function getDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth();
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	var dayString = months[mm]+" "+dd+","+yyyy;
	return dayString;
}