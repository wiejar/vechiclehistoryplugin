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
			var d = new Date();
			d.setFullYear(parseInt(a.substr(6,10)),parseInt(a.substr(3,5)),parseInt(a.substr(0,2)));
			d.setTime(d.getTime() + 86400000);
		    var sss = addZero(d.getDate())+ "." + addZero(d.getMonth()) + "." + d.getFullYear();
		    //jQuery('input.field.data')[0].value = addZero(d.getDate()) + "." + addZero(d.getMonth()) + "." + d.getFullYear();

		    function addZero(val) {
			    if(val<10) {
			      val = "0"+val;
			    }
			    return val;
			}

		    jQuery('input.field.data')[0].value = sss;
		    jQuery('input.field.data').blur();

			jQuery.cookie('data', jQuery('input.field.data')[0].value);		
          	jQuery('.btn-sprawdz').trigger('click');
      }, 750);  
  }
});

