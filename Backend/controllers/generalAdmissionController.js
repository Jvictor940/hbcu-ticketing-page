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

const putGeneralAdmission = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'show me all the generalAdmissions'})
}

const deleteGeneralAdmissions = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'deleted all the generalAdmissions'})
}

module.exports = {
    getGeneralAdmissions,
    createGeneralAdmission,
    putGeneralAdmission, 
    deleteGeneralAdmissions
}