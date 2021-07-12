const swaggerJsdoc = require('swagger-jsdoc');

const options =  {

  definition : {
  openapi: "3.0.3", // present supported openapi version
  info: {
    title: "Library API", // short title.
    description: "Library API", //  desc.
    version: "1.0.0", // version number
  }
},
  apis : ['../routes/*.js']
}

console.log('swagger define');

module.exports = swaggerJsdoc(options);