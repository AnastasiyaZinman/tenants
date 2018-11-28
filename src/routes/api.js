var { Tenant } = require('../models/clientModel');
const express = require('express')
//---------------------------------------
const router = express.Router()
// const sequelize  = require('../dataAccess/da');
//----------------Post-----
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

// POST Add Client
router.post('/addClient', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log("Add client", req.body);
  var newTenant = new Tenant({
    "name": req.body.name,
    "phoneNumber": req.body.phoneNumber,
    "address": req.body.address,
    "debt": req.body.debt
  });
  newTenant.save(
    (err, client) => {
      if (err) throw err
      else {
        res.send(client)
      }
    }
  );
})
//Update Client Info
router.post('/updateClientInfo', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log("Update client_id", req.body._id);
  let id = req.body["_id"];
  Client.findByIdAndUpdate(id, req.body, { new: true }, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log("result updated", result);
    res.send(result);
  });
})


module.exports = router;