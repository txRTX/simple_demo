(function($){
	$.fn.dialog = function(options) {
	    var defaults = {
	       'alertBoxBg':'#fff',
	       'alertText':'xxxxx',
	       'alertSurebtn':{'id':'#sureBtn','color':'#ff0000','text':'ok'},
	       'alertCancelbtn':{'id':'#sureBtn','color':'#ff0000','text':'ok'},
	    };
	    var resets = $.extend(defaults, options);
			console.log(resets.alertSurebtn)
			var surebtn = resets.alertSurebtn.id;
			$(surebtn).css('background',resets.alertSurebtn.color);
			$(surebtn).html(resets.alertSurebtn.text);

			$('#alertBox').css({
				'background': resets.alertBoxBg
			});
			$('#alertText').html(resets.alertText);


	   
	}
})(jQuery)
