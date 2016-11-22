//	Get all todos
exports.findAll = function(req, res) {
	res.set({
		'X-Pagination-Page': '1',
		'X-Pagination-Limit': '10',
		'X-Pagination-Count': '5',
		'X-Pagination-Items': '50'
	});

	res.send(
		[
            {
                "id": 0,
                "description": "Create a list of todo's",
                "created_at": "2016-11-17T10:03:20.342Z",
                "is_complete": false,
                "completed_at": "2016-11-17T15:03:20.342Z",
                "priority": "low",
                "remind_at_time": "2016-11-17T13:03:20.342Z",
                "remind_at_location": {
                    "lat": 33.3632256,
                    "lng": -117.0874871
                }
            },
            {
                "id": 1,
                "description": "This thing needs to be done",
                "created_at": "2016-11-17T11:03:20.342Z",
                "is_complete": false,
                "completed_at": "",
                "priority": "medium",
                "remind_at_time": "2016-11-17T13:03:20.342Z",
                "remind_at_location": {
                    "lat": 33.3632256,
                    "lng": -117.0874871
                }
            },
            {
                "id": 2,
                "description": "Create another thing to do",
                "created_at": "2016-11-18T10:03:20.342Z",
                "is_complete": false,
                "completed_at": "",
                "priority": "high",
                "remind_at_time": "2016-11-18T09:03:20.342Z",
                "remind_at_location": {
                    "lat": 33.3632256,
                    "lng": -117.0874871
                }
            }
        ]
	);
}

//	Get a single todo
exports.findById = function(req, res) {
	res.send(
		[
            {
                "id": 0,
                "description": "Create a list of todo's",
                "created_at": "2016-11-17T10:03:20.342Z",
                "is_complete": false,
                "completed_at": "2016-11-17T15:03:20.342Z",
                "priority": "low",
                "remind_at_time": "2016-11-17T13:03:20.342Z",
                "remind_at_location": {
                    "lat": 33.3632256,
                    "lng": -117.0874871
                }
            }
        ]
	);
}

// Create a todo
exports.create = function(req, res) {
	res.set('Location', '/todos/3');
	res.status(201).send(
		[
            {
                "id": 3,
                "description": "Create a list of todo's",
                "created_at": "2016-11-17T10:03:20.342Z",
                "is_complete": false,
                "completed_at": "2016-11-17T15:03:20.342Z",
                "priority": "low",
                "remind_at_time": "2016-11-17T13:03:20.342Z",
                "remind_at_location": {
                    "lat": 33.3632256,
                    "lng": -117.0874871
                }
            }
        ]
	);
}

// Update a todo
exports.update = function(req, res) {
	res.send(
		[
            {
                "id": 3,
                "description": "Create a list of todo's",
                "created_at": "2016-11-17T10:03:20.342Z",
                "is_complete": false,
                "completed_at": "2016-11-17T15:03:20.342Z",
                "priority": "low",
                "remind_at_time": "2016-11-17T13:03:20.342Z",
                "remind_at_location": {
                    "lat": 33.3632256,
                    "lng": -117.0874871
                }
            }
        ]
	);
}

//	Delete a todo
exports.delete = function(req, res) {
	res.status(204).json();
}
