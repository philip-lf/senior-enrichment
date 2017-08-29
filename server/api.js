'use strict'
const api = require('express').Router()
const db = require('../db/')
const {Student, Campus} = require('../db/models/')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => {
	res.send({ hello: 'world' })
})

// Listing all the students in the campus
api.get('/campus/:CampusId', (req, res) => {
	const CampusId = req.params.CampusId
	Student.findAll({
		where: {
			CampusId
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

// Adding a student to a specific campus
// test input = { "name": "Whateva", "email": "dk@dk.com",  "CampusId" : "1" }
api.post('/student', function(req, res, next) { 
    if (!req.body.name || !req.body.email || !req.body.CampusId){
        res.send("data is not good");
    } else {
        Student.create(req.body)
        .then(instance => {
            res.json({ message: 'Created successfully', article: instance }) 
        })
    }
});

module.exports = api