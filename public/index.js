(function(){
"use strict";

var crm = {

	init :function(){
		this.insererInfoDsHtml();
	},

	insererInfoDsHtml:function(){
		$.ajax("/crm.json")
		.done(this.insertDone)
		.fail(this.insertFail);
	},

	insertDone : function(data){
		console.log(data);
		var len = data.customers.length;
		for (var i = 0; i <=len; i++){
			var obj = data.customers[i];
			for(var prop in obj){
				var individu = prop + " : " + obj[prop];
	  			$("#insert").append('<ul><li>' + individu +'</li></ul>');
	  			}
	  		}	
		},

	insertFail : function(){
		console.log("insertFail");

	},
};

$(document).ready(function(){
	crm.init();
});

}) ();