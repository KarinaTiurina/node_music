define(['jquery'], function(JQuery){
	return {
	    bajanInf: function(){
            $("#bajan_inf_btn").click(function(){
             	$('#bajan_inf').html("");
             	$('#bajan_inf').load('/txt/bajan_inf.txt');

            });
	    }
    };
});