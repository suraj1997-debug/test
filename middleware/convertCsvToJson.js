const csv = require('csvtojson')
const multer = require('multer');
const path = require('path');
const fs = require('fs');


  const storage = multer.diskStorage({
    destination: (req, file, cb) => { 
        console.log('file',file)
        const filetypes = /csv/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (extname) { 
            cb(null, 'csv');
        } else {
            console.log("A CSV file is required");

        }
    }, 
    filename: (req, file, cb) => { 
        console.log('file2',file)
        cb(null, Date.now() + '_' + file.originalname) 
    } 
}); 

exports.uploads = multer({ storage: storage })

//code for converting csv to json 
exports.convertCsvToJson =  async (req, res, next) => {
 
   let directory =  __dirname.split(`\\middleware`)[0];
   console.log('__dirname',directory)
    if(req.file){
        console.log('req.file',req.file);
        const csvFilePath =  path.join(directory + '/csv/' + req.file.filename);
        
  
    let jsonArray = await csv().fromFile(csvFilePath)
    console.log('jsonArray1234',jsonArray)
    req.jsonArray = jsonArray;
            
        next();
    }
    else{
        return res.status(400).json({
            success:false,
            errMessage:"Path not found !!"
        })
    }
   
}