const express = require('express');
const regdoc = require('../models/regdoc');

const router = express.Router();

router.post("/regdoc/newdoc",async (req,res)=>{
    try{
        const {
            fullname,slmcregno,email,password} = req.body;
    if(!password || !slmcregno){
        return res.status(400).json({message: 'check details'});

    }
    const newdoc = new regdoc({fullname,slmcregno,email,password});
    await newdoc.save();

    res.status(201).json({ message: 'success'});
    
}
    catch(error){
    res.status(500).json({ message: 'error111',error});
}

    
    
});

// User Login
router.post('/regdoc', async (req, res) => {
    const { slmcregno, password } = req.body;
    try {
        const user = await User.findOne({ slmcregno });
        if (!user) return res.status(400).send('Invalid username or password');

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).send('Invalid username or password');

        const token = jwt.sign({ id: user._id, slmcregno: user.slmcregno }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send('Internol server error');
    }
    
});
module.exports = router;