const express = require('express')
const router = express.Router();
const {
    getCoaches,
    createCoach,
    deleteCoaches,
    getCoach,
    putCoach,
    deleteCoach
} = require('../controllers/coachController')

router.route('/')
    .get(getCoaches)
    .post(createCoach)
    .put(putCoach)
    .delete(deleteCoaches)

router.route('/:coachId')
    .get(getCoach)
    .put(putCoach)
    .delete(deleteCoach)
    
module.exports = router;