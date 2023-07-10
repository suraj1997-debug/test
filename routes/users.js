var express = require('express');
var router = express.Router();
const users = require('../controller/users');
const { uploads, convertCsvToJson } = require('../middleware/convertCsvToJson');

/* convert csv to json and store it in database */
router.post('/convertToCsv',uploads.single('csvfile'),convertCsvToJson, users.addCsvToDatabase)

// create data
router.post('/addData',users.addData);

// update data by id
router.patch(`/updateData`,users.updateData);

// delete data by id
router.delete(`/deleteData`,users.deleteData);

//get all data
router.get('/getAllData',users.getData);

module.exports = router;
