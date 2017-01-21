$(document).ready(function() {
	$('.box-form').append("<div id=\"info\"></div>");
	var str = "";
	if(jQuery.cookie('enabled')=="true"){ str = "Tak";}
		else {str = "Nie";}
	$('#info')[0].innerHTML = "Plugin włączony: " + str;
	$('.box-form').append('<button class="btn bg-blue btn-sprawdz" id="deactivateCookie">Deaktywuj</button>');
	$('.box-form').append('<button class="btn bg-blue btn-sprawdz" id="activateCookie">Aktywuj</button>');
	jQuery("#deactivateCookie")[0].addEventListener("click", function() {
		    	jQuery.cookie('enabled', false);
	    		$('#info')[0].innerHTML = "Plugin włączony: Nie";
	});
	jQuery("#activateCookie")[0].addEventListener("click", function() {
		    	jQuery.cookie('enabled', true);
	    		$('#info')[0].innerHTML = "Plugin włączony: Tak";
	});


  if(jQuery("#nieZnalezionoHistori") != null 
  	&& jQuery(document.getElementById('_historiapojazduportlet_WAR_historiapojazduportlet_:data'))[0].value != "" 
  	&& jQuery(document.getElementById('_historiapojazduportlet_WAR_historiapojazduportlet_:rej'))[0].value != "" 
  	&& jQuery(document.getElementById('_historiapojazduportlet_WAR_historiapojazduportlet_:vin'))[0].value != "" 
  	&& jQuery.cookie('enabled')=="true") {
        setTimeout(function(){ 
            a = jQuery(document.getElementById('_historiapojazduportlet_WAR_historiapojazduportlet_:data'))[0].value;
			var m = moment(a, 'DD.MM.YYYY').add('1', 'd').format("DD.MM.YYYY");
			
		    jQuery('input.field.data')[0].value = m;
		    jQuery('input.field.data').blur();

			jQuery.cookie('data', jQuery('input.field.data')[0].value);		
          	jQuery('.btn-sprawdz').trigger('click');
      }, 750);  
  }
});

