// Setup empty JS object to act as endpoint for all routes
endDataPoint = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
// define port
const port = 3000;

const server = app.listen(port, listenling);

function listenling() {
    console.log('server is Running on port:')
    console.log(port)
}
// Server data endpoint
const projectData = [];

//Server get route to get all the project aata
app.get('/lastObject', function (req, res) {
    console.log(`server: app.get last object:`);
    console.log(projectData[projectData.length - 1]);
    res.send(projectData[projectData.length - 1])
});

//Server post route to manipulate project data
app.post('/addData', addData);

function addData(req, res) {

    console.log('server: app.post: Data added to endpoint: ')
    console.log(req.body)
    projectData.push(req.body)
    res.send({data:'Data Added'})


}



