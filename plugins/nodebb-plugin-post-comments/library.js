(function (module) {

	'use strict';

	var fs = module.parent.require('fs');
	var JSON = require('json3');

	var bodyParser = require("body-parser");

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
		// res.send("发射数据来后台");
		// var t = {"a":"后台发射的数据,KAIXIN"};
		// console.log(JSON.parse('{"a":"后台发射的数据,KAIXIN"}'));
		res.json("后台发射的数据,KAIXIN");
		// res.json(JSON.stringify(t));


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





