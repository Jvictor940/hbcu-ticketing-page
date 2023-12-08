const Guardian = require('../models/Guardian')

// For '/guardian' endpoints
const getGuardians = async (req, res, next) => {
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
            console.log(`Searching general admission by ${query}`)
        }
    }

    try {
        const guardians = await Guardian.find()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(guardians)
    } catch (err) {
        next(err)
    }
}

const createGuardian = async (req, res, next) => {

    try {
        const guardian = await Guardian.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(guardian)
    } catch (err) {
        next(err)
    }
}

const deleteGuardians = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'deleted all the guardians'})
}

// For '/guardian/:guardianId'
const getGuardian = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `show me the guardian with the guardian Id of ${req.params.guardianId}`})
}

const putGuardian = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `update the guardian with the guardian Id of ${req.params.guardianId}`})
}

const deleteGuardian = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `delete the guardian with the guardian Id of ${req.params.guardianId}`})
}

module.exports = {
    getGuardians,
    createGuardian,
    deleteGuardians,
    getGuardian,
    putGuardian,
    deleteGuardian
}