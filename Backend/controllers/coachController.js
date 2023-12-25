const Coach = require('../models/Coach')

// For '/coach' endpoints
const getCoaches = async (req, res, next) => {
    // query parameter
    const filter = {};
    const options = {};
    if (Object.keys(req.query).length) {
        const {
            sortByFirstName,
            sortByLastName,
            sortBySchool,
            firstName,
            lastName, 
            school,
            limit
        } = req.query



        if (firstName) filter.firstName = true
        if (lastName) filter.lastName = true
        if (school) filter.school = true

        if (limit) options.limit = limit

        if (sortByFirstName) options.sort = {
            firstName: sortByFirstName
        }
        if (sortByLastName) options.sort = {
            lastName: sortByLastName
        }
        if (sortBySchool) options.sort = {
            school: sortBySchool
        }
    }

    try {
        const coaches = await Coach.find({}, filter, options)
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(coaches)
    } catch (err) {
        next(err)
    }

}

const createCoach = async (req, res, next) => {

    try {
        const coach = await Coach.create(req.body)
        console.log('Received data:', coach)
        
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(coach)
    } catch (err) {
        next(err)
    }
}

const deleteCoaches = async (req, res, next) => {

    try {
        const deletedCoaches = await Coach.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedCoaches)
    } catch (err) {
        next(err)
    }
}

// For '/coach/:coachId'
const getCoach = async (req, res, next) => {

    try {
        const coach = await Coach.findById(req.params.coachId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(coach)
    } catch (err) {
        next(err)
    }

}

const putCoach = async (req, res, next) => {

    try {
        const updatedCoach = await Coach.findByIdAndUpdate(req.params.coachId, req.body, { new: true } )

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedCoach)
    } catch (err) {
        next(err)
    }

}

const deleteCoach = async (req, res, next) => {

    try {
        const deletedCoach = await Coach.findByIdAndDelete(req.params.athletId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedCoach)
    } catch (err) {
        next(err)
    }

}

module.exports = {
    getCoaches,
    createCoach,
    deleteCoaches,
    getCoach,
    putCoach,
    deleteCoach 
}