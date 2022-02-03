const express = require('express');
const router = express.Router();

const Customer = require('./models/customer');
const Order = require('./models/order');

// customer master

// for fetch the data
router.get('/customer', async (request, response) => {  
    const data = await Customer.find();
    response.send(data);
});

// for insert the data
router.post('/customer', async (request, response) => {    
    const customer = new Customer(request.body)
    await customer.save();
    response.send(customer);
})

// for update the data
router.patch('/customer/:id', async (request, response) => {    
    const _id = request.params.id;
    const customer = await Customer.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(customer);
})

// for delete the data
router.delete('/customer', async (request, response) => {  
    const data = await Customer.deleteMany({});
    response.send(data);
});


router.delete('/customer/:id', async (request, response) => {   
        const _id = request.params.id;
        const customer = await Customer.findByIdAndDelete(_id);
        response.send(customer);
})

// order 

//for fetch data
router.get('/order', async (request, response) => {  
    const data = await Order.find();
    response.send(data);
});

//for insert data
router.post('/order', async (request, response) => {    
    const order = new Order(request.body)
    await order.save();
    response.send(order);
})

//for update data
router.patch('/order/:id', async (request, response) => {    
    const _id = request.params.id;
    const order = await Order.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(order);
})

//for delete data
router.delete('/order', async (request, response) => {  
    const data = await Order.deleteMany({});
    response.send(data);
});


module.exports = router;