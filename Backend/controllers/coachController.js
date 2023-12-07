// For '/coach' endpoints

const getCoaches = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'show me all the coaches'})
}

const createCoach = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created coach with the Coach name of ${req.body.coachName} `})
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
    .json({ message: `show mw the coach with the coach Id of ${req.params.coachId}`})
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