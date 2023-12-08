const express = require('express')
const router = express.Router();
const {
    getGuardians,
    createGuardian,
    deleteGuardians,
    getGuardian,
    putGuardian,
    deleteGuardian
} = require('../controllers/Guardian')

router.route('/')
    .get(getGuardians)
    .post(createGuardian)
    .delete(deleteGuardians)

router.route('/:guardianId')
    .get(getGuardian)
    .put(putGuardian)
    .delete(deleteGuardian)

module.exports = router;