/*Crowd-Train Front-End Handler*/ 

(function(Crowd_t, $, undefined){

	crowd_t = {

		Calert:function(msg){
			alert(msg);
		},
		select:function(id){

			$(id).chosen();

		},
		loadurl:function(url){
			window.location=url;
		}

	};


})(window.crowd_t = window.crowd_t || {}, jQuery);


//Usage 
//crowd_t.Calert("hey");

$("#selectstart").chosen({width: "65%"});
$("#selectdestination").chosen({width: "65%"});
$("#selecttrain").chosen({width:"65%"});
$("#select-update-delay").chosen({width:"65%"});

$("#crowd-find-trains").click(function(){
	$("#crowd-find-train-grid").fadeIn();
});






