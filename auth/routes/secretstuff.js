'use strict';
const express = require ('express');
const routers = express.Router();
const bearerAuth = require('../middleware/bearerAuth');

routers.get('/secretstuff',bearerAuth,(req,res)=>{
    res.status(200).json(req.User);
})



module.exports = routers;