define(['jquery'], function(JQuery){
	return {
	    trombonInf: function(){
            $("#trombon_inf_btn").click(function(){            	
			    $('#trombon_inf').html("");
            	file_name = "/json/trombon_inf.json";
			  $.getJSON(file_name, function(data){
			    var items = [];
			   
			    $.each(data, function(key, val){
			      items.push('<li id="' + key + '">' + val + '</li>');
			    });
			   
			    var content = $('<ul/>', {
			      'class': 'jsonParams',
			      html: items.join('')
			    });

			    $('#trombon_inf').html(content);
			  }); 
            });
	    }
    };
});