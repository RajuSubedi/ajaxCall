// using hapi library we can make task easier
'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 ,
    // This is cross origin error resolver
    // we are using windows so we should set cross origin true
    routes : {
        cors : true
    }
});

server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, reply) {
        return reply('Server is healthy');
    }
});

// Add the route
// It is a post method we should post somedata within
server.route({
    method: 'POST',
    path:'/getData', 
    handler: function (request, reply) {
        console.log(request.payload);
        reply('Data recieved!');
    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});