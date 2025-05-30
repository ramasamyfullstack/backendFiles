// 1.

// const http = require('http')

const http = require('http')

// http.createServer((req,res,err)=>{
//     if(err){
//         console.log(err);
//         res.write("Nodejs server - Error!!!");
//         res.end();
//     }
//         console.log("Nodejs server console here");
//         res.write("Nodejs server - Response!!!");
//         res.end();
// }).listen(5000,()=>{
//     console.log("server is running on port : 5000");
    
// });

// node server.js

/////////////////////////////////////////////////////

// 2.

const http = require('http')
// // const url = require('url')

// http.createServer((req,res,err)=>{
//     if(err){
//         console.log(err);
//         res.write("Nodejs server - Error!!!");
//         res.end();
//     }
//         console.log(req.url);
        
//         console.log("Nodejs server console here");
//         res.write("Nodejs server - Response!!!");
//         res.end();
// }).listen(5000,()=>{
//     console.log("server is running on port : 5000");
    
// });

/////////////////////////////////////////////////////////////////

// 3. 

const http = require('http');
const url = require('url');
// const querystring = require('querystring');
// const serverModules = require('./server-module');

http.createServer((req, res, err) => {
    if(err) {
        console.log(err);
        res.write("Nodejs Server - Error!");
        res.end();
    }

    if(req.url !== "/favicon.ico") {
        console.log(req.url, "REQ URL");
        
        console.log("NodeJs Server! - Console");
        res.write("NodeJS Server! - Response");
        
       
            const qry = url.parse(req.url, true).query;
            console.log(qry.name, "Name");
            console.log(qry.age, "Age");
            res.write(JSON.stringify(qry));    
        res.end();
    }
}).listen(5000,()=>{
    console.log("server is running on port : 5000");
    
});

postman - memicy

http://localhost:5000/?name=Ramasamy&age=35 --- get method

//////////////////////////////////////////////////////////////////////////////

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const serverModules = require('./server-module');

http.createServer((req, res, err) => {
    if(err) {
        console.log(err);
        res.write("Nodejs Server - Error!");
        res.end();
    }

    if(req.url !== "/favicon.ico") {
        console.log(req.url, "REQ URL");
        
        // console.log("NodeJs Server! - Console");
        // res.write("NodeJS Server! - Response");
        
        // querystring way of retrieving the data from the API URL
            // const qry = url.parse(req.url, true).query;
            // console.log(qry.name, "Name");
            // console.log(qry.age, "Age");
            // res.write(JSON.stringify(qry));

        // post method of retrieving the data from the API
            // let body = "";
            // let result = "";
            // req.on('data', chunk => body += chunk.toString());
            // req.on('end', () => {
            //     result = querystring.parse(body);
            //     console.log(result);
            //     res.write(JSON.stringify(result));
            //     res.end();
            // });

        // post method of retrieving the data from the API (JSON)
            // let body = "";
            // let result = "";
            // req.on('data', chunk => body += chunk.toString());
            // req.on('end', () => {
            //     result = JSON.parse(body);
            //     console.log(result);
            //     res.write(JSON.stringify(result));
            //     res.end();
            // });

        // API Calls
            let route = req.url;
            switch(route) {
                case "/readAllTrainees": // http://localhost:5000/readAllTrainees
                    serverModules.readAllTrainees(req, res);
                    break;
                case "/readTrainee": // http://localhost:5000/readTrainee
                    serverModules.readTrainee(req, res);
                    break;
                case "/addTrainee": // http://localhost:5000/addTrainee
                    serverModules.addTrainee(req, res);
                    break;
                case "/updateTrainee": // http://localhost:5000/updateTrainee
                    serverModules.updateTrainee(req, res);
                    break;
                case "/deleteTrainee": // http://localhost:5000/deleteTrainee
                    serverModules.deleleteTrainee(req, res);
                    break;
                default:
                    res.write("Invalid Route!");
                    res.end();
            }
        // res.end();
    }
}).listen(5000, () => {
    console.log("Server is running on port: 5000");
});