//requiring packages
const express = require('express');
const mongoose = require('mongoose');

//import routes
const routes= require('./routes/routes');

// Define the port number
const port = process.env.PORT || 3000;
const databaseUrl =process.env.DATABASE_URL ||'';

//Connecting to the database
mongoose.connect(databaseUrl);
const database=mongoose.connection;//initialize a mongoose connection
//create a listener to the db
database.on('error',(error)=>{
    console.error(error);
})
database.once('connected',()=>{
    console.log('Database connected');
})

// Create an express app,Initialize express
const app = express();
//ensure application only accepts data in json format
app.use(express.json());
//tells the app to use the defines routes
app.use('/.',routes);

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
