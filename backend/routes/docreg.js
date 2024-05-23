const express = require('express');
const regdoc = require('../models/regdoc');

const router = express.Router();

router.post("/regdoc/newdoc",async (req,res)=>{
    try{
        const {
            fullname,
            slmcregno,
            password,
            passwordcon
        } = req.body;
    if(!password==!passwordcon){
        return res.status(400).json({message: 'check password'});

    }
    const newdoc = new regdoc({fullname,slmcregno,password,passwordcon});
    await regdoc.save();

    res.status(201).json({ message: 'success'});
    
}
    catch(error){
    res.status(500).json({ message: 'error',error});
}

    
    
});
module.exports = router;