/**
 * Labeled - a jQuery Selection Extension
 * 
 * Copyright 2012 Sebastian Gaul (http://sgaul.de).
 * License: The MIT License (MIT)
 * 
 * Select form fields and other interactive elements like <a> by visual descriptors like <label> or 
 * placeholder attributes. Labeled is a jQuery content filter and can be used like :labeled('Login')
 * or input:labeled('email-address').
 */
(function($) {
	$.extend($.expr[':'], {
	    labeled: function(element, b, args) {
	    	var labelText = args[3];
	    	element = $(element);
	    	return element.is('a:contains("' + labelText + '")')
	    		|| element.is('button:contains("' + labelText + '")')
	    		|| element.is('input[value="' + labelText + '"]')
	    		|| element.is('*[placeholder="' + labelText + '"]')
	    		|| elementHasReferencingLabel(element, labelText);
	    }
	});

	function elementHasReferencingLabel(element, labelText) {
		return element.is('[id]') 
		    && $('label[for=' + element.attr('id') + ']:contains(' + labelText + ')').length;
	}

})(jQuery);