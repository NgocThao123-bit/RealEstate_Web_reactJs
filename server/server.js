const express = require('express');
const cors = require('cors');
const morganMonitor = require('morgan');
const bodyParser = require('body-parser');
const API_PORT = process.env.PPORT || 5000;
const app = express();

const contactRoutes  = require('./routes/contactRoutes');
const houseRoutes = require('./routes/houseRoutes');
const user = require('./routes/accountRoutes');
const propertyType = require('./routes/propertyTypeRoutes');
const usernew = require('./routes/newloginroutes');
app.use(cors());
app.use(morganMonitor('tiny'));

app.use(bodyParser.urlencoded({
    extended:true,
}));

app.use(bodyParser.json());
// app.use(allroutes);

app.use('/contact',contactRoutes);
app.use('/',houseRoutes);
app.use('/propertyType',propertyType);
app.use('/user',user);
app.use('/usernew',usernew);

app.listen(API_PORT,()=>{console.log(`LISTENING on port ${API_PORT}`)});