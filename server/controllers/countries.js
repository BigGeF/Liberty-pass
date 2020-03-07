const mongoose = require('mongoose');

const Country = mongoose.model("Country");

module.exports = {
    index(_req, res) {
        Country.find()
            .then(country => res.json({ country }))
    },

    create(req, res) {
        Country.create(req.body)
            .then(country => res.json({ country }))
            .catch(e => res.json({ errors: e }));
    },
    delete(req, res) {
        Country.findByIdAndDelete(req.params.id)
            .then(() => res.json({ status: 'Success delete' }))
            .catch(e => res.json({ errors: e }));
    },
    getById(req, res) {
        Country.findById(req, params.id)
            .then(country => res.json({ country }))
            .catch(e => res.json({ errors: e }));
    },
    update(req, res) {
        Country.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                price: req.body.price,
                des: req.body.des
            }, {
                new: true,
                runValidators: true
            })
            .then(data => res.json({ data }))
            .catch(e => res.json({ errors: e }))
    }
}