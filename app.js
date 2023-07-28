const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// Middleware function to log incoming requests
const logRequest = (req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next(); // Call the next middleware or route handler
};

// server instance created
const server = http.createServer((req, res) => {
    // Apply the middleware to all routes
    logRequest(req, res, () => {
    
        res.setHeader('Content-Type', 'application/json');

        // Check the request URL and handle accordingly
        if (req.url === '/') {
            res.end('Hello, Nodejs!');
        } 
        else if (req.url === '/file') {
            const filePath = path.join(__dirname, 'data.txt');
            
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end('Error reading the file');
                } else {
                    res.end(data);
                }
            });

        } else if (req.url === '/api/user') {

            // create user object
            const user = {
                name: 'Emmanuel Damilola',
                email: 'emmanuel@gmail.com',
                age: 20
            };
        
            // Convert the user object to JSON and send it as the response
            res.end(JSON.stringify(user));

        } else {
            // If the request URL is not '/', '/file', or '/api/user', respond with a 404 Not Found error
            res.statusCode = 404;
            res.end('404 Not Found');
        }

    });

});

// Start listening on the specified port
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
