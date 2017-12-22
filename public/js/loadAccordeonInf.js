define(['jquery'], function(JQuery){
	return {
	    accordeonInf: function(){
            $("#accordeon_inf_btn").click(function(){
             	$('#accordeon_inf').html("");
             	$('#accordeon_inf').load('/txt/accordeon_inf.txt');

            });
	    }
    };
});