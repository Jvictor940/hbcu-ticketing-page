const express = require('express')
const router = express.Router();
const {
    getGeneralAdmissions,
    createGeneralAdmission,
    putGeneralAdmission,
    deleteGeneralAdmissions
} = require('../controllers/generalAdmissionController')

router.route('/')
    .get(getGeneralAdmissions)
    .post(createGeneralAdmission)
    .put(putGeneralAdmission)
    .delete(deleteGeneralAdmissions)

module.exports = router;