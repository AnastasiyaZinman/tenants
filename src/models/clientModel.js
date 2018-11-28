var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//design the two schema below and use sub docs 
//to define the relationship between posts and comments

let tenantSchema = new mongoose.Schema({
    "name": String,
    "phoneNumber": String,
    "address": String,
    "debt": Boolean
});


let Tenant = mongoose.model('Tenant', tenantSchema)
module.exports = { Tenant } 
