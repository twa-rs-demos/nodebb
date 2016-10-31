"use strict";

(function () {

	jQuery('document').ready(function () {
		$(window).on('action:script.load', function (ev, data) {

			var comments = "<a class='post-comments'>我要评论</a>";
			var editArea = "<div class='edit-comments'><br /><input type='text' placeholder = '快来吐槽吧'/><button>提交</button></div>";

			$(".post-tools").append(comments);

			$(editArea).appendTo($(".post-comments").parent().parent());

			$(".edit-comments").css({display:"none"});


			$(".post-tools").append("<a>展开评论</a>");
			console.log("新插件里面的");

		});

		$(window).on('action:script.load', getComments);
		$(window).on('action:script.load', editComments);

	});

	function editComments(){
            $(".post-comments").click(function(){
            	// var t = $(this).parent().parent();
              // $("p div:last-child").css("display","block");
				$(this).parent().parent().children("div").css("display","block");;

			});
	};

	function getComments() {

		$.ajax({
			type: "POST",
			url: '/posts/getComments',
			data: {content: "前端传来数据nodebb"},
			dataType: 'json',
			success: function (result) {
				console.log(result);
			},
			error: function () {
				console.log('error');
			}

		})


	}


}());