jQuery(document).ready(function($){
	$("#date_thing").text(getDate());
	  $('.datepicker').pickadate({
	    // selectMonths: true, // Creates a dropdown to control month
	    // selectYears: 15, // Creates a dropdown of 15 years to control year
	    format: 'mmmm d, yyyy',
		formatSubmit: 'mmmm d, yyyy',
		hiddenPrefix: undefined,
		hiddenSuffix: '_submit',
		hiddenName: undefined,
		onClose: function() {
			var date = picker.get()
			if (date!=""){
				$("#date_thing").text(picker.get())
			}
		},
		clear: '',
	  });
	var $input = $('.datepicker').pickadate();
	var picker = $input.data('pickadate');
  	$("#calendar_btn").click(function(e) {
	    // stop the click from bubbling
	    picker.open()
	    e.stopPropagation();
	    // prevent the default click action
	    e.preventDefault();
	    // open the date picker
	    // var what = $('#date_thing').get()
	    var who = 1
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
    var dayString = months[mm]+" "+dd+", "+yyyy;
    return dayString
}
