const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator')

const CoachSchema = new Schema({
    firstName: {
        type: String, 
        required: true,
        maxLength: 10
    },
    lastName: {
        type: String, 
        required: true,
        maxLength: 10
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, 'You must have atleast 10 numbers for your phone number'],
        maxLength: [11, 'Maximum amount of numbers is 11 for your phone number'],
        match: [/^[0-9]+$/, 'Only Numbers are allowed']
    },
    school: {
        type: String, 
        required: true
    },
    schoolEmail: {
        type: String,
        required: true,
        unique: true,
        validate: (email) => validator.isEmail(email)
    }
}, {
    timestamps: true
})

CoachSchema.pre('save', function(next) {
    this.firstName = this.firstName.toUpperCase().charAt(0) + this.firstName.slice(1)
    this.lastName = this.lastName.toUpperCase().charAt(0) + this.lastName.slice(1)

    next()
})

module.exports = mongoose.model('Coach', CoachSchema);