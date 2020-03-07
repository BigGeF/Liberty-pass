const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Missing Country"]
    },
    price: {
        type: Number,
        required: [
            true, "please enter a price!"
        ],
        validate: [
            price => price !== undefined && price > 0, 'please enter a reasonable Price!'
        ],
    },
    des: {
        type: String,
        required: [
            true, "please privade a description!"
        ]
    }
}, { timestamps: true });

mongoose.model('Country', CountrySchema)