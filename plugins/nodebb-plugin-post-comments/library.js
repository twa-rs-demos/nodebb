(function (module) {

	'use strict';
	var posts, comments = {};
	var JSON = require('json3');
	var bodyParser = require("body-parser");
	comments.addScripts = function (scripts, callback) {

		console.log("我是一个新插件");

		scripts.push('plugins/nodebb-plugin-post-comments/lib/main.js');
		callback(null, scripts);
	};

	comments.init = function (params, callback) {
		var app = params.router,
			middleware = params.middleware,
			controllers = params.controllers;
		app.get('/posts', comments.getPostsId);
		callback();

	};

	comments.getPostsId = function (req, res, callback) {
		res.json(JSON.stringify(posts.posts));
	};

	comments.getPosts = function (ids, callback) {
		posts = ids;
		callback(null, ids);
	};

	module.exports = comments;
}(module));









