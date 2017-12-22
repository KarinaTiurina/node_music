define(['jquery'], function(JQuery){
	return {
	    pianoInf: function(){
            $("#piano_inf_btn").click(function(){
             	$('#piano_inf').html("");
             	$('#piano_inf').load('/txt/piano_inf.txt');

            });
	    }
    };
});