define(['jquery'], function(JQuery){
	return {
	    focus: function(){
            $(".username_login").focusout(function(){
             	if($(".username_login").val() == '') {
             		alert("Имя - обязательное поле.")
             	}

            });
	    }
    };
});