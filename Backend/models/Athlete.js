const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AthleteSchema = new Schema({
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
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    birthday: {
        type: String
    },
    gender: {
        type: String, 
        required: true,
        enum: [
            'Male', 
            'Female'
        ]
    }, 
    position: {
        type: String,
        enum: [
            'QB', 
            'WR', 
            'RB', 
            'DB', 
            'LB', 
            'D-Line', 
            'O-Line'
        ],
        required: true
    },
    size: {
        type: String,
        enum: [
            'SM', 
            'MD', 
            'LG', 
            'XL', 
            'XXL', 
            'XXXL'
        ],
        required: true
    },
    Grade: {
        type: String,
        enum: [
            'Freshman', 
            'Sophmore', 
            'Junior', 
            'Senior'
        ],
        required: true
    },
    ticketRadioOption: {
        type: String,
        enum: [
            'Sponsored Athlete | Free',
            'Athlete Ticket'
        ],
        required: true
    }, 
    disclaimerCheckbox: {
        type: Boolean,
        default: false,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Athlete', AthleteSchema);