'use strict';



function validateForm(params) {
	var form = document.getElementById(params.formId);
	
	// remove Error input border  in case of focus on the input
	form.addEventListener('focus', function (event) {
            var target = event.target;  
            if (target.tagName === 'INPUT') {
                target.classList.remove(params.inputErrorClass);
				
            }
        }, true);  
		
	// add Error input border in case of Error when focus is lost	
	form.addEventListener('blur', function (event) {
            var target = event.target;   
            if (target.tagName === 'INPUT') {
                if (!checkInput(target)) {
                    target.classList.add(params.inputErrorClass);
                }
            }
        }, true);	
     	
	
	function checkInput(input) {
        var value = input.value;
		var validator = input.dataset.validator;
		var min = input.dataset.validatorMin;
		var max = input.dataset.validatorMax;
				
       
		// check value for Regular Expression
		function validateRegexp(value, pattern, flags) {
        var reg = new RegExp(pattern, flags);

        return reg.test(value);
    }
		
       
		// check for required	
		if (input.dataset.hasOwnProperty('required') && !value) {
            return false;
        }

		
		

        if (validator === 'letters') {
			
			return validateRegexp(value, '^[a-zа-яё]+$', 'i');

		}		
		
		if (validator === 'regexp') {
			
			return validateRegexp(value, input.dataset.validatorPattern);

		}
		
		// check for age input
		if ((validator === 'number')&& min && max) {
			
			value = parseInt(value);
			
			if (!(isNaN(value))&&(value >= min)&&(value <= max)) {
			 	return true;
			} else {
				return false;
			}

		}
        
		// check for preferred number input
        if ((validator === 'number')&& !min && !max) {
			
			value = parseInt(value);
			
			if (!isNaN(value)) {
			 	return true;
			} else {
				return false;
			}

		}
	}			
		
      
   
     var collection = Array.from(document.querySelectorAll('input'));  // get all inputs of DOM
		
		  form.addEventListener('submit', function (event) {
            event.preventDefault();
            var formError = false;
			
            for (var i = 0; i < collection.length; i++) {
                var input = collection[i];

                // check input element for errors 
				if (!checkInput(input)) {
                    input.classList.add(params.inputErrorClass);
                    formError = true;
                }
            }

            // check all form for errors
			if (formError) {
                form.classList.add(params.formInvalidClass);
            } else {
                form.classList.add(params.formValidClass);
            }
        });	
          
	
	
}	