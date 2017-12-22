define(['jquery'], function(JQuery){
	return {
	    violinInf: function(){
            $("#violin_inf_btn").click(function(){
             	$('#stringContent').html("");
             	var file_name = "/html/violin_inf.html";
            	$.ajax({
				    url: file_name,
				    success: function (data) { $('#stringContent').html(data); },
				    dataType: 'html'
				});
            });
	    }
    };
});