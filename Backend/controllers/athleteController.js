// For '/athlete' endpoints

const getAthletes = (req, res, next) => {
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
            console.log(`Searching athlete by ${query}`)
        }
    }

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

const deleteAthletes = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'deleted all the athletes'})
}


// For '/athlete/:athleteId'
const getAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `show me the athlete with the athlete Id of ${req.params.athleteId}`})
}

const putAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `update the athlete with the athlete Id of ${req.params.athleteId}`})
}

const deleteAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `delete the athlete with the athlete Id of ${req.params.athleteId}`})
}

module.exports = {
    getAthletes,
    createAthlete, 
    deleteAthletes, 
    getAthlete,
    putAthlete,
    deleteAthlete
}