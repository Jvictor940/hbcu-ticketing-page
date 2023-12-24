const Guardian = require('../models/Guardian')

// For '/guardian' endpoints
const getGuardians = async (req, res, next) => {

    // query parameter
    const filter = {};
    const options = {};
    if (Object.keys(req.query).length) {
        const {
            sortByFirstName,
            sortByLastName,
            firstName,
            lastName,
            limit
        } = req.query

        if (firstName) filter.firstName = true
        if (lastName) filter.lastName = true

        if (limit) options.limit = limit

        if (sortByFirstName) options.sort = {
            firstName: sortByFirstName
        }
        if (sortByLastName) options.sort = {
            lastName: sortByLastName
        }
    }

    try {
        const guardians = await Guardian.find({}, filter, options)

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
        const guardianData = req.body;
        console.log('Received data:', guardianData);

        const guardian = await Guardian.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(guardian)
    } catch (err) {
        next(err)
    }
}

const deleteGuardians = async (req, res, next) => {

    try {
        const deletedGuardians = await Guardian.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedGuardians)
    } catch (err) {
        next(err)
    }

}

// For '/guardian/:guardianId'
const getGuardian = async (req, res, next) => {

    try {
        const guardian = await Guardian.findById(req.params.guardianId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(guardian)
    } catch (err) {
        next(err)
    }

}

const putGuardian = async (req, res, next) => {

    try {
        const updatedGuardian = await Guardian.findByIdAndUpdate(req.params.guardianId, req.body, { new: true } )

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedGuardian)
    } catch (err) {
        next(err)
    }

}

const deleteGuardian = async (req, res, next) => {

    try {
        const deletedGuardian = await Guardian.findByIdAndDelete(req.params.athletId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedGuardian)
    } catch (err) {
        next(err)
    }

}

module.exports = {
    getGuardians,
    createGuardian,
    deleteGuardians,
    getGuardian,
    putGuardian,
    deleteGuardian
}