const express = require('express');
const prescription = require('../models/prescription');

const router = express.Router();

router.post("/prescription/newpres", async (req , res)=>{
   try {
    const { phoneNumber, patientName , age , email , presC} = req.body;
    
    if(!phoneNumber || !patientName ){
        return res.status(400).json({message: 'please fill the required fields'});

    }
    //new prescription
    const newPres = new prescription({ phoneNumber, patientName , age , email , presC});
    await newPres.save();

    res.status(201).json({ message: 'success'});
    
   }
   catch(error){
    res.status(500).json({ message: 'error',error});
   }

   //view
   router.get('/prescription',(req,res)=>{
    prescription.find().exec((err,prescription)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            availablePrescriptions:prescription


        })
    });
   });
});

module.exports = router;