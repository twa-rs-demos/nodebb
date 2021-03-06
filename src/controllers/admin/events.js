'use strict';

var async = require('async');

var db = require('../../database');
var events = require('../../events');
var pagination = require('../../pagination');

var eventsController = {};


eventsController.get = function(req, res, next) {

	var page = parseInt(req.query.page, 10) || 1;
	var itemsPerPage = 20;
	var start = (page - 1) * itemsPerPage;
	var stop = start + itemsPerPage - 1;

	async.parallel({
		eventCount: function(next) {
			db.sortedSetCard('events:time', next);
		},
		events: function(next) {
			events.getEvents(start, stop, next);
		}
	}, function(err, results) {
		if (err) {
			return next(err);
		}

		var pageCount = Math.max(1, Math.ceil(results.eventCount / itemsPerPage));

		res.render('admin/advanced/events', {
			events: results.events,
			pagination: pagination.create(page, pageCount),
			next: 20
		});
	});
};


module.exports = eventsController;