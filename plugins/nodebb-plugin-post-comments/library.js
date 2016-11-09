(function (module) {

	'use strict';
	var posts, comments = {};
	var JSON = require('json3');
	var bodyParser = require("body-parser");
	comments.addScripts = function (scripts, callback) {

		// console.log("我是一个新插件");

		// scripts.push('plugins/nodebb-plugin-post-comments/lib/main.js');
		callback(null, scripts);
	};

	comments.init = function (params, callback) {
		var app = params.router,
			middleware = params.middleware,
			controllers = params.controllers;
		app.post('/posts', comments.getPostsId);
		app.post('/getComment', comments.getComment);
		callback();

	};

	comments.getPostsId = function (req, res, callback) {
		// console.log(posts.posts[1]);
		res.json(JSON.stringify( posts));
	};
	comments.getComment = function (req, res, callback) {
		// console.log(req.body.comment);
		// console.log(posts.posts[1]);
		res.json({a: 1});
	};

	comments.getPosts = function (ids, callback) {
		posts = ids;
		callback(null, ids);
	};

	module.exports = comments;
}(module));









