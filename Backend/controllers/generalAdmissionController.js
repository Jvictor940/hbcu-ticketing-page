// For '/generalAdmission' endpoints

const getGeneralAdmissions = (req, res, next) => {
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

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'show me all the generalAdmissions'})
}

const createGeneralAdmission = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created generalAdmission with the GeneralAdmission name of ${req.body.generalAdmissionName} `})
}

const deleteGeneralAdmissions = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'deleted all the generalAdmissions'})
}

// For '/generalAdmission/:generalAdmissionId'
const getGeneralAdmission = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `show me the generalAdmission with the generalAdmission Id of ${req.params.generalAdmissionId}`})
}

const putGeneralAdmission = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `update the generalAdmission with the generalAdmission Id of ${req.params.generalAdmissionId}`})
}

const deleteGeneralAdmission = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `delete the generalAdmission with the generalAdmission Id of ${req.params.generalAdmissionId}`})
}

module.exports = {
    getGeneralAdmissions,
    createGeneralAdmission,
    deleteGeneralAdmissions,
    getGeneralAdmission,
    putGeneralAdmission,
    deleteGeneralAdmission
}