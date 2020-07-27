'use strict'

const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { PORT = '8080' } = process.env

// GraphQL setup
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

var root = {
    hello: () => {
        return 'Hello world!';
    }
};

// Express setup
const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));

function setupExpress() {
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    }));

    app.listen(PORT);
}

// Main execution
function main() {
    setupExpress();
    console.log("Running a GraphQL API server on port: " + PORT + ".");
}

main();