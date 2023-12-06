const express = require('express')
const router = express.Router();
const {
    getAthletes,
    createAthlete,
    putAthlete,
    deleteAthletes
} = require('../controllers/athleteController')

router.route('/')
    .get(getAthletes)
    .post(createAthlete)
    .put(putAthlete)
    .delete(deleteAthletes)

module.exports = router;