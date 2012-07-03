jQuery.fn.CapsLockAlert = function(settings) {
	settings = jQuery.extend({
		    delayIn: 0,      // delay before showing tooltip (ms)
		    delayOut: 0,     // delay before hiding tooltip (ms)
		    fade: false,     // fade tooltips in/out?
		    fallback: 'WARNING: CAPS Lock is on',    // fallback text to use when no tooltip text
		    gravity: 'w',    // gravity
		    html: false,     // is tooltip content HTML?
		    live: false,     // use live event support?
		    offset: 10,       // pixel offset of tooltip from element
		    opacity: 0.8,    // opacity of tooltip
		    title: 'title',  // attribute/callback containing tooltip text
		    trigger: 'manual', // how tooltip is triggered - hover | focus | manual
		    stylize:true
		},settings);
	return this.each(function() {
		jQuery(this).keypress(function(e) {
              	jQuery(this).tipsy(settings);
			    var is_shift_pressed = false;
			    if (e.shiftKey) {
			      is_shift_pressed = e.shiftKey;
			    } 
			    else if (e.modifiers) {
			      is_shift_pressed = !!(e.modifiers & 4);
			    }
			    if (((e.which >= 65 && e.which <=  90) && !is_shift_pressed) || ((e.which >= 97 && e.which <= 122) && is_shift_pressed)) {
			      jQuery(this).tipsy("show");			      
			      if(settings.stylize) {
			      	// todo
			      }
			    } 
			    else {
			      jQuery(this).tipsy("hide");
			    }
        });	
        jQuery(this).keyup(function(e) {        	
			    if(jQuery(this).val() =="") {
			    	jQuery(this).tipsy("hide");		
			    }
        });
	});
}