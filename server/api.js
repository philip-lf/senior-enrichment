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
    if (!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.campusId){
        res.send("data is not good");
    } else {
        Student.findOrCreate({
			where: req.body
		})
        .then(instance => {
            res.json(instance) 
        })
    }
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
api.delete('/campus/:id', function(req, res, next) { 
	const id = req.params.id
    if (!req.body.campus_name){
        res.send("There is no body to delete");
	} else {
        Campus.destroy({
			where: {
				id
			}
		})
        .then(instance => {
            res.json({ message: 'Deleted successfully', article: instance }) 
        })
    }
});

// Delete a student by id
api.delete('/student/:id', function(req, res, next) { 
	const id = req.params.id
    if (!req.body.first_name || !req.body.last_name || !req.body.email || !req.body.campusId){
        res.send("There is no body to delete");
	} else {
        Student.destroy({
			where: {
				id
			}
		})
        .then(instance => {
            res.json({ message: 'Deleted successfully', article: instance }) 
        })
    }
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
	Student.findOne({
		where: {
			id
		}
	})
	.then(student => {
		console.log("-----",student)
		student.update({
			first_name: req.body.first_name, 
			last_name: req.body.last_name, 
			email: req.body.email, 
			phone_number: req.body.phone_number,
			campusId: req.body.campusId
		})
	})
    .then(response => {
		res.json(response)
	})
    .catch(next);
})

module.exports = api