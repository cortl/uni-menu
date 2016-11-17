jQuery(document).ready(function($){
	$('.dropdown-button + .dropdown-content').on('click', function(event) {
		event.stopPropagation();
	});
	$("#vegetarian").change(function(){
		var c = this.checked;
		if (c==true){
			// Vegetarians don't eat meat
			$(".meat").hide();

		} else {
			// If vegan isn't checked then reshow meat, else ignore
			if (!$("input#vegan")[0].checked){
				$(".meat").show();
			}
		}
	});
	$("#vegan").change(function(){
		var c = this.checked;
		if (c==true){
			// Vegans don't eat meat, eggs, milk, seafood
			$(".milk").hide();
			$(".eggs").hide();
			$(".seafood").hide();
			$(".meat").hide();
		} else {
			// If milk, eggs, or seafood aren't then reshow.
			if (!$("input#milk")[0].checked){
				$(".milk").show()
			}
			if (!$("input#eggs")[0].checked){
				$(".eggs").show()
			}
			if (!$("input#seafood")[0].checked){
				$(".seafood").show()
			}
			// If vegetarian isn't checked then reshow meat
			if (!$("input#vegetarian")[0].checked){
				$(".meat").show();
			}
		}
	});
	$("#gluten").change(function(){
		var c = this.checked;
		if (c==true){
			$(".wheat").hide()
		} else {
			$(".wheat").show()
		}

	});
	$("#milk").change(function(){
		var c = this.checked;
		if (c==true){
			$(".milk").hide()
		} else {
			// if vegan isn't checked then reshow milk
			if(!$("input#vegan")[0].checked){
				$(".milk").show()
			}
		}
	});
	$("#eggs").change(function(){
		var c = this.checked;
		if (c==true){
			$(".eggs").hide()
		} else {
			// if vegan isn't checked then reshow eggs
			if(!$("input#vegan")[0].checked){
				$(".eggs").show()
			}
		}
	});
	$("#nuts").change(function(){
		var c = this.checked;
		if (c==true){
			$(".nuts").hide()
		} else {
			$(".nuts").show()
		}
	});
	$("#seafood").change(function(){
		var c = this.checked;
		if (c==true){
			$(".seafood").hide()
		} else {
			// if vegan isn't checked then reshow seafood
			if(!$("input#vegan")[0].checked){
				$(".seafood").show()
			}
		}
	});

});