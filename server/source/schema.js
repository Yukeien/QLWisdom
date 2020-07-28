import { makeExecutableSchema } from 'graphql-tools';
import { importAsArray } from './tools/import.js';
import schemas from './schemas/index.js';
import { Query } from './resolvers/query';

console.log(Query)

export const schema = makeExecutableSchema({
    typeDefs: importAsArray(schemas),
    resolvers: {Query: Query}
});