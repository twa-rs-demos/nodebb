(function(module){
	var comment = {};
	comment.addScripts = function(scripts,callback){


		console.log("我是一个新插件");





		scripts.push('plugins/nodebb-plugin-post-comments/lib/main.js');

		callback(null, scripts);

	}



	module.exports = comment;
}(module));




// $.ajax({
// 	url:"/comment",
// 	data:"我是前面的数据",
// 	dataType:"json",
// 	success:function(result){
//
// 	},

// })





