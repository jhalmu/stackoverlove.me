import { GraphQLClient } from 'graphql-request';

const GRAPHQL_ENDPOINT = process.env['GRAPHQL_ENDPOINT'];

// @ts-ignore
export const client = new GraphQLClient(GRAPHQL_ENDPOINT);
