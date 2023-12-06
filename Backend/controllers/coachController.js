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

const putCoach = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'show me all the coaches'})
}

const deleteCoaches = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'deleted all the coaches'})
}

module.exports = {
    getCoaches,
    createCoach,
    putCoach, 
    deleteCoaches
}