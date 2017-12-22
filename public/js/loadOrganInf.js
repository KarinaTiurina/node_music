define(['jquery'], function(JQuery){
	return {
	    organInf: function(){
            $("#organ_inf_btn").click(function(){
             	$('#organ_inf').html("");
             	$('#organ_inf').load('/txt/organ_inf.txt');
            });
	    }
    };
});