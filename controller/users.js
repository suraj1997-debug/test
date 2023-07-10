const userModule = require('../Modules/user');
const path = require('path');
const fs = require('fs');
const csv = require('csvtojson')
const mongoose = require('mongoose');



exports.addCsvToDatabase = async (req,res) => {

    userModule.insertMany(req.jsonArray)
    .then(data => {
        return res.status(201).json({
            success:true,
            message:"data stored successfully !!"
        })
    }).catch(err=>{
        return res.status(400).json({
            success:false,
            errMssage:"Something went wrong !!"
        })
    })
}

exports.addData = (req,res) => {
    const userDetails = new userModule(req.body);
    userDetails.save()
    .then(data => {
        return res.status(201).json({
            success:true,
            message:"data created successfully !!"
        })
    }).catch(err=>{
        return res.status(400).json({
            success:false,
            errMssage:"Something went wrong !!"
        })
    })
}

exports.updateData = (req,res) => {
    // console.log('req.params',req.params)
    const id = req.body._id;
    userModule.findByIdAndUpdate({_id: id},req.body)
    .then(data => {
        console.log('data',data)
        if(data === null){
            return res.status(400).json({
                success:false,
                errMssage:"Data not exist .!!"
            })
        }
        return res.status(202).json({
            success:true,
            message:"data updated successfully !!"
        })
    }).catch(err=>{
        return res.status(400).json({
            success:false,
            errMssage:"Something went wrong !!"
        })
    })
}

exports.deleteData = (req,res) => {

    const id = req.body._id;
    userModule.findByIdAndDelete({_id: id})
    .then(data => {
        if(data === null){
            return res.status(400).json({
                success:false,
                errMssage:"Data not exist .!!"
            })
        }
        return res.status(202).json({
            success:true,
            message:"data deleted successfully !!"
        })
    }).catch(err=>{
        return res.status(400).json({
            success:false,
            errMssage:"Something went wrong !!"
        })
    })
}

exports.getData = (req,res) => {
    userModule.find()
    .sort({createdAt: -1})
    .then(data => {
        return res.status(200).json({
            success:true,
            message:"data fetched successfully !!",
            data: data
        })
    }).catch(err=>{
        return res.status(400).json({
            success:false,
            errMssage:"Something went wrong !!"
        })
    })
}