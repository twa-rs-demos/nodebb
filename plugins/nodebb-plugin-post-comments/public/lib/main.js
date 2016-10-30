"use strict";

(function () {

	jQuery('document').ready(function () {
		$(window).on('action:script.load', function (ev, data) {

			$(".post-tools").append("<a>展开</a>");
			console.log("新插件里面的");

		});

		$(window).on('action:script.load',getComments);

	});

	function getComments() {

		console.log("传数据");

		$.ajax({
			type: "POST",
			url: nodeBBURL + '/posts/getComments',
			data:{content:"传数据nodebb"},
			dataType: "json/application",
			success:function(result){
				console.log(result);

				console.log("来自后台返回的数据，去哈哈");
			},
			error:function(){
				console.log('error');
			}

		})
	}


}());