const express = require('express')
const router = express.Router();
const {
    getGeneralAdmissions,
    createGeneralAdmission,
    deleteGeneralAdmissions,
    getGeneralAdmission,
    putGeneralAdmission,
    deleteGeneralAdmission
} = require('../controllers/generalAdmissionController')

router.route('/')
    .get(getGeneralAdmissions)
    .post(createGeneralAdmission)
    .delete(deleteGeneralAdmissions)

router.route('/:generalAdmissionId')
    .get(getGeneralAdmission)
    .put(putGeneralAdmission)
    .delete(deleteGeneralAdmission)

module.exports = router;