define(['jquery'], function(JQuery){
	return {
	    valtornaInf: function(){
            $("#valtorna_inf_btn").click(function(){            	
			    $('#valtorna_inf').html("");
            	file_name = "/json/valtorna_inf.json";
			  $.getJSON(file_name, function(data){
			    var items = [];
			   
			    $.each(data, function(key, val){
			      items.push('<li id="' + key + '">' + val + '</li>');
			    });
			   
			    var content = $('<ul/>', {
			      'class': 'jsonParams',
			      html: items.join('')
			    });

			    $('#valtorna_inf').html(content);
			  }); 
            });
	    }
    };
});