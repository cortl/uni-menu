jQuery(document).ready(function($){
	$('.dropdown-button + .dropdown-content').on('click', function(event) {
		event.stopPropagation();
	});
});