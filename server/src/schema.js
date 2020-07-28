import { makeExecutableSchema } from 'graphql-tools';
import { importAsArray } from './tools/import.js';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index';

export const schema = makeExecutableSchema({
    typeDefs: importAsArray(schemas),
    resolvers: resolvers
});