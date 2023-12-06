const express = require('express')
const router = express.Router();
const {
    getCoaches,
    createCoach,
    putCoach,
    deleteCoaches
} = require('../controllers/coachController')

router.route('/')
    .get(getCoaches)
    .post(createCoach)
    .put(putCoach)
    .delete(deleteCoaches)

module.exports = router;