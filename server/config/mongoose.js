const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/PassPass', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

require('../models/country');