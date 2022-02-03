const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    ordername: String,
    price: Number,
});

module.exports = mongoose.model('Order', orderSchema);