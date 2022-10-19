import { readFileSync } from 'fs';
import {
	SCHEMA_GRAPHQL_PATH,
} from "../configs.js";

export { resolvers } from "./resolver.js";

// Note: this uses a path relative to the project's
// root directory, which is the current working directory
// if the server is executed using `npm run`.
export const typeDefs = readFileSync(SCHEMA_GRAPHQL_PATH, { encoding: 'utf-8' });

