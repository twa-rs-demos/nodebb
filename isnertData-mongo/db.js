// var url = "mongodb://localhost:27017/nodebb";
// var MongoClient = require("mongodb").MongoClient;
//
// MongoClient.connect(url, function (err, db) {
// 	// assert.equal(null, err);
// 	console.log("connected correctly to server!");
// 	insertDocuments(db, function (doc) {
//
// 		console.log(doc);
// 		return doc;
//
// 	});
// });
//
//
// var insertDocuments = function (db, callback) {
// 	var collection = db.collection("objects");
// 	collection.update({"pid": 103}, {
// 		$push: {
// 			"comments": {
// 				"pid": 103,
// 				"comid": 1,
// 				"uid": 1,
// 				"comContents": "我不管，我最美，啊哈哈哈哈"
// 			}
// 		}
// 	}, function (err, result) {
//
// 		console.log("Inserted 3 documents into teh documents collection!");
// 		console.log(result);
// 		callback(result);
// 	});
// };

//
//  function insertData(){
//
// 	db.objects.update({"pid": 103}, { $push: {
// 		   "comments": {
// 				"pid": 103,
// 				"comid": 1,
// 				"uid": 1,
// 				"comContents": "我不管，我最美，啊哈哈哈哈"
// 			}
// 		}
// 	});
// }
//
// insertData();

var url = "mongodb://localhost:27017/nodebb";
var db = connect(url);

db.objects.update({"pid": 80}, {
	$push: {
		"comments": {
			"pid": 80,
			"comid": 1,
			"uid": 1,
			"comContents": "我不管，我最美，啊哈哈哈哈"
		}
	}
});


// db.objects.update({"pid": 103}, {
// 	$unset: {
// 		"comments": [
// 			{
// 				"pid": 103,
// 				"comid": 1,
// 				"uid": 1,
// 				"comContents": "我不管，我最美，啊哈哈哈哈"
// 			},
// 			{
// 				"pid": 103,
// 				"comid": 1,
// 				"uid": 1,
// 				"comContents": "我不管，我最美，啊哈哈哈哈"
// 			}
// 		]
// 	}
// });


// db.objects.deleteOne({"comid": 1}, function (err,callback) {
// });