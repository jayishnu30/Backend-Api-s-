const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const logger = require('morgan');
var jwt = require('jsonwebtoken');
//let config = require('./config');
//let middleware = require('./middleware');
const { mongoose } = require('./db.js');
var router = express.Router();
var cookieParser = require('cookie-parser');




var employeeController = require('./controllers/employeeController.js');
var eventController = require('./controllers/eventController.js');
//var cors = require('cors');
var userController = require('./controllers/userController.js');
var enquiryController = require('./controllers/enquiryController.js');
var roleController = require('./controllers/roleController.js');

var loginuserController = require('./controllers/loginuserController.js');
var registeruserController = require('./controllers/registerController.js');

const Register = require('./routes/registers');

const Login = require('./routes/logins');
const Userlogin = require('./routes/userlogins');
const Loginevent = require('./routes/loginevent');
var Loginadmin = require('./routes/loginadmins');






var app = express();

var cors = require('cors');
app.use(cors({
  origin:'http://localhost:4200'
}));


app.use(bodyParser.json());
app.get('/', function(req, res){
  res.json({"tutorial" : "Build REST API with node.js"});
 });





app.listen(3000, () => console.log('Server started at port : 3000'));
app.use('/registers', Register);
app.use('/logins', Login);
app.use('/userlogins', Userlogin);
app.use('/loginevents', Loginevent);

app.use('/employees', employeeController);
app.use('/loginusers', loginuserController);
app.use('/events', eventController);
app.use('/users', userController);
app.use('/loginusers',loginuserController);

app.use('/registerusers',registeruserController);

app.use('/enquirys', enquiryController);
app.use('/roles', roleController);
app.use('/loginadmins', Loginadmin);


