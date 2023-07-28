# NODE-INTERMEDIATE-TASK

## Simple Nodejs HTTP Server
> This is a simple HTTP server built using Node.js core modules. The server listens on port 3000 and responds to different routes with specific messages or data.

### Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory.

### Usage
1. Open a terminal or command prompt in the project directory.
2. Run the server using Node.js:  `node app.js`
3. The server will start listening on port 3000.

### Routes
#### Home Route
- URL: '/'
- Response: "Hello, Nodejs!"

#### File Route
- URL: '/file'
- Response: Content of the "data.txt" file

#### User Route
- URL: '/api/user'
- Response: JSON object representing a user with properties: 'name', 'email', and 'age'

### Middleware
The server includes a simple middleware function that logs incoming requests to the console. This middleware is applied to all routes and provides useful request details.

### Notes
> - Make sure Node.js is installed on your machine before running the server.