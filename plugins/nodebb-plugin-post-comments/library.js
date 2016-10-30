(function (module) {

	'use strict';
	var comments = {};
	comments.addScripts = function (scripts, callback) {


		console.log("我是一个新插件");


		scripts.push('plugins/nodebb-plugin-post-comments/lib/main.js');
		callback(null, scripts);

	};

	comments.init = function (params, callback) {

		console.log("我是后台取数据的");


		var app = params.router,
			middleware = params.middleware,
			controllers = params.controllers;

		app.post('/posts/getComments', comments.replyPost);
		callback();

	};

	comments.replyPost = function (req, res, callback) {

		var content = req.body.content;
		console.log(content);
		res.json({result:"发射数据来后台"});


	};

	module.exports = comments;
}(module));


// $.ajax({
// 	url:"/comment",
// 	data:"我是前面的数据",
// 	dataType:"json",
// 	success:function(result){
//
// 	},

// })





