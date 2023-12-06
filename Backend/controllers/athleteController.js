// For '/athlete' endpoints

const getAthletes = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'show me all the athletes'})
}

const createAthlete = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created athlete with the Athlete name of ${req.body.athleteName} `})
}

const putAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'show me all the athletes'})
}

const deleteAthletes = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'deleted all the athletes'})
}

module.exports = {
    getAthletes,
    createAthlete,
    putAthlete, 
    deleteAthletes
}