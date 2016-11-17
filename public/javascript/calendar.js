jQuery(document).ready(function($){	
	  $('.datepicker').pickadate({
	    // selectMonths: true, // Creates a dropdown to control month
	    // selectYears: 15, // Creates a dropdown of 15 years to control year
	    format: 'mmmm d, yyyy',
		formatSubmit: 'mmmm d, yyyy',
		hiddenPrefix: undefined,
		hiddenSuffix: '_submit',
		hiddenName: undefined,
		onClose: function() {
			$("#date_thing").text(picker.get())
		},
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