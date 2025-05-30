Great! Let's start with the basics of Node.js step by step.

### **Step 1: Understanding Node.js**

- Node.js is a JavaScript runtime that allows you to run JavaScript outside the browser.
- It is built on Chrome's V8 engine and is used to build scalable network applications.

### **Step 2: Installing Node.js**

1. Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)
2. Verify installation:
   
   node -v
   npm -v
   

### **Step 3: Running Your First Node.js Program**
- Create a file `app.js` and write:
  js
  console.log("Hello, Node.js!");
  
- Run the program using:
  
  node app.js
  

### **Step 4: Understanding Modules**
- Node.js has built-in modules like `fs`, `http`, and `path`.
- Example of the `fs` module to read a file:
  js
  const fs = require('fs');
  fs.readFile('test.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
  });
  

### **Step 5: Creating an HTTP Server**
- Create a simple server with the `http` module:
  js
  const http = require('http');

  const server = http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello, Node.js Server!');
  });

  server.listen(3000, () => {
      console.log('Server running at http://localhost:3000/');
  });
  
- Run the script and visit `http://localhost:3000/`.

### **Step 6: Using npm (Node Package Manager)**
- Initialize a project:
  
  npm init -y
  
- Install a package (e.g., Express.js):
  
  npm install express
  

-------------------------------------------------------------------


const http = require('http');
const url = require('url');
const qs = require('querystring');

const port = 5000;

http.createServer((req, res, err) => {
    if(err) console.log(err);

    if(req.url !== '/favicon.ico') {
        // console.log("The server's console response."); // response will be sent to the terminal / command prompt
        console.log(req.url);

        // to retrieve querystring
            // const qry = url.parse(req.url, true).query;
            // console.log(qry);
            // console.log(qry.id);
            // console.log(qry.name);

        // to retrieve a form body (post | url-encoded)
            // let body = "";
            // req.on('data', chunk => body += chunk.toString());
            // req.on('end', () => {
            //     console.log(qs.parse(body), "chunks");
            // });

        // to retrieve a form body as JSON (req | RAW)
            let body = "";
            req.on('data', chunk => body += chunk.toString());
            req.on('end', () => {
                console.log(JSON.parse(body), "chunks");
            });
        
            console.log(req.method);

        // res.write("This is my node server response!"); // response will be sent back to the client (browser/postman)
        // res.write(JSON.stringify(qry));
        res.end();

    }
}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});