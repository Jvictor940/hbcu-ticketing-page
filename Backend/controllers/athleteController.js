const Athlete = require('../models/Athlete')

// For '/athlete' endpoints

const getAthletes = async (req, res, next) => {
    // query parameter
    const filter = {}
    const options = {}
    if (Object.keys(req.query).length) {
        const {
            sortByFirstName,
            sortByLastName,
            sortByGrade,
            sortByGender,
            sortByPosition,
            firstName,
            lastName,
            grade,
            gender, 
            position,
            limit
        } = req.query

        const filter = [];

        if (firstName) filter.firstName = true;
        if (lastName) filter.lastName = true;
        if (grade) filter.grade = true;
        if (gender) filter.gender = true;
        if (position) filter.position = true;

        if (limit) options.limit = limit
        
        if (sortByFirstName) options.sort = {
            firstName: sortByFirstName
        }
        if (sortByLastName) options.sort = {
            lastName: sortByLastName
        }
        if (sortByGrade) options.sort = {
            grade: sortByGrade
        }
        if (sortByGender) options.sort = {
            gender: sortByGender
        }
        if (sortByPosition) options.sort = {
            position: sortByPosition
        }
    }

    try {
        const athletes = await Athlete.find({}, filter, options)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(athletes)
    } catch (err) {
        next(err)
    }

}

const createAthlete = async (req, res, next) => {

    try {
        const athlete = await Athlete.create(req.body)
        
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(athlete)
    } catch (err) {
        next(err)
    }
}

const deleteAthletes = async (req, res, next) => {

    try {
        const deletedAthletes = await Athlete.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedAthletes)
    } catch (err) {
        next(err)
    }
}


// For '/athlete/:athleteId'
const getAthlete = async (req, res, next) => {

    try {
        const athlete = await Athlete.findById(req.params.athleteId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(athlete)
    } catch (err) {
        next(err)
    }

}

const putAthlete = async (req, res, next) => {

    try {
        const updatedAthlete = await Athlete.findByIdAndUpdate(req.params.athleteId, req.body, { new: true } )

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedAthlete)
    } catch (err) {
        next(err)
    }

}

const deleteAthlete = async (req, res, next) => {

    try {
        const deletedAthlete = await Athlete.findByIdAndDelete(req.params.athletId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedAthlete)
    } catch (err) {
        next(err)
    }

}

module.exports = {
    getAthletes,
    createAthlete, 
    deleteAthletes, 
    getAthlete,
    putAthlete,
    deleteAthlete
}