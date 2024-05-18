//export packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
const regRoutes = require("./routes/registration");
app.use(regRoutes);


//connecting to DB
const PORT = 3001;
const URL = "mongodb+srv://sanchithasamarasinghe2000:pro1@cluster0.ywpbykh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(URL)
    .then(() => {
        console.log("Connected")
})
    .catch((err) => console.log('DB error',err))
app.listen(PORT, () => {
    console.log("app is running on ")
});