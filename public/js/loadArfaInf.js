define(['jquery'], function(JQuery){
	return {
	    arfaInf: function(){
            $("#arfa_inf_btn").click(function(){
            	var file_name = "/html/arfa_inf.html";
             	$('#stringContent').html("");
            	$.ajax({
				    url: file_name,
				    success: function (data) { $('#stringContent').html(data); },
				    dataType: 'html'
				});
            });
	    }
    };
});