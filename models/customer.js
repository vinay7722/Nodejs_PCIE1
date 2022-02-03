const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    name: String,
    phone: Number,
});

module.exports = mongoose.model('Customer', customerSchema);