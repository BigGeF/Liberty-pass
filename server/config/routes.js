const countryCtl = require("../controllers/countries");

module.exports = app => {
    app.get('/api/countries/:id', countryCtl.getById);
    app.get('/api/countries', countryCtl.index);
    app.post('/api/countries', countryCtl.create);
    app.delete('/api/countries', countryCtl.delete);
    app.put('/api/countries/:id', countryCtl.update);
}