'use strict'
import { schema } from './source/schema.js';
import { Sequelize } from 'sequelize';
import { registerModels } from './source/database/database-tools.js';

const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { PORT = '8080', DATABASE_URL = '' } = process.env

// Database setup
const sequelize = new Sequelize(DATABASE_URL, {
    logging: false
});

async function setupDatabase() {
    try {
        registerModels(sequelize);
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Connection to database has been established.");
        
    } catch(error) {
        console.error("Unable to connect to the database");
    }    
}

// GraphQL setup
var root = {};

// Express setup
const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));

function setupExpress() {
    console.log(schema)
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    }));

    app.listen(PORT);
}

// Main execution
function main() {
    setupDatabase();
    setupExpress();
    console.log("Running a GraphQL API server on port: " + PORT + ".");
}

main();