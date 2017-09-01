'use strict'
const api = require('express').Router()
const db = require('../db/')
const {Student, Campus} = require('../db/models/')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!

// GET Routes ************************************************************************************************

// Get all the campuses
api.get('/campus', (req, res) => {
	Campus.findAll()
	.then(instance => {
		if (!instance) {
			res.send("no planet");
		} else {
			res.json(instance);
		}
	});
})

// Listing a campus by id
api.get('/campus/:id', (req, res) => {
	const id = req.params.id
	Campus.findAll({
		where: {
			id
		}
	})
	.then(instance => {
		if (!instance) {
			res.send("no students on this planet");
		} else {
			res.json(instance);
		}
	});
})

// Get all the students
api.get('/student', (req, res) => {
	Student.findAll()
	.then(instance => {
		if (!instance) {
			res.send("no students");
		} else {
			res.json(instance);
		}
	});
})

// Get student by campusId (all students within a certain campus)
api.get('/student/:campusId', (req, res) => {
	const id = req.params.campusId
	console.log(id)
	Student.findAll({
		where: {
			campusId: id
		}
	})
	.then(instance => {
		if (!instance) {
			res.send("no student");
		} else {
			res.json(instance);
		}
	});
})

// Get one student by id
api.get('/student/personal/:id', (req, res) => {
	const id = req.params.id
	console.log(id)
	Student.findAll({
		where: {
			id
		}
	})
	.then(instance => {
		if (!instance) {
			res.send("no student");
		} else {
			res.json(instance);
		}
	});
})

// POST Routes *********************************************************************************************************

// Adding a student only if they do not already exist
api.post('/student', function(req, res, next) { 
	Student.findOrCreate({
		where: req.body
	})
	.then(instance => {
		res.json(instance) 
	})
	.catch(next)

});

// Adding a campus only if it does not already exist
api.post('/campus', function(req, res, next) { 
    if (!req.body.campus_name){
        res.send("There is no body");
	} else {
        Campus.findOrCreate({
			where: req.body
		})
        .then(instance => {
            res.json(instance) 
        })
    }
});

// DELETE Routes ***************************************************************************************************

// Delete a campus by id
api.delete('/DeleteCampus/:id', function(req, res, next) { 
	const id = req.params.id
	Campus.destroy({
		where: {
			id
		}
	})
	.then(instance => {
		res.json({ message: 'Deleted successfully', article: instance }) 
	})
});

// Delete a student by id
api.delete('/student/:id', function(req, res, next) { 
	const id = req.params.id
	Student.destroy({
		where: {
			id
		}
	})
	.then(instance => {
		res.json({ message: 'Deleted successfully', article: instance }) 
	})
	.catch(next)
});

// PUT Routes ***************************************************************************************************

// Update specific campus information 
api.put('/campus/:id', function(req, res, next) {
	const id = req.params.id
	Campus.findOne({
		where: {
			id
		}
	})
	.then(campus => {
		campus.update({
			campus_name: req.body.campus_name, 
			planet_image: req.body.planet_image
		})
	})
    .then(response => {
		res.json(response)
	})
    .catch(next);
})

// Update specific student information 
api.put('/student/:id', function(req, res, next) {
	console.log("-----")
	const id = req.params.id
	Student.findById(id)
    .then(result => result.update(req.body))
    .then(result => res.send(result))
    .catch(next);
})

module.exports = api