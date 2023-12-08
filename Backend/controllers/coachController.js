const Coach = require('../models/Coach')

// For '/coach' endpoints
const getCoaches = async (req, res, next) => {
    // query parameter
    if (Object.keys(req.query).length) {
        const {
            firstName,
            lastName
        } = req.query

        const filter = [];

        if (firstName) filter.push(firstName)
        if (lastName) filter.push(lastName)

        for(const query of filter){
            console.log(`Searching coach by ${query}`)
        }
    }

    try {
        const coaches = await Coach.find()
        
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
        
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(coach)
    } catch (err) {
        next(err)
    }
}

const deleteCoaches = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'deleted all the coaches'})
}

// For '/coach/:coachId'
const getCoach = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `show me the coach with the coach Id of ${req.params.coachId}`})
}

const putCoach = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `update the coach with the coach Id of ${req.params.coachId}`})
}

const deleteCoach = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `delete the coach with the coach Id of ${req.params.coachId}`})
}

module.exports = {
    getCoaches,
    createCoach,
    deleteCoaches,
    getCoach,
    putCoach,
    deleteCoach 
}