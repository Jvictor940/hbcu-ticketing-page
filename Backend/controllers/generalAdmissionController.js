// For '/generalAdmission' endpoints

const getGeneralAdmissions = (req, res, next) => {
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
    .json({ message: `show mw the generalAdmission with the generalAdmission Id of ${req.params.generalAdmissionId}`})
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