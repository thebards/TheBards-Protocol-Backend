import { ApolloServer } from '@apollo/server';
import {
	ApolloServerPluginLandingPageLocalDefault,
	ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { startStandaloneServer } from '@apollo/server/standalone';
import {
	PORT,
	NODE_ENV,
	REDIS_URL
} from "./configs.js";

import {typeDefs, resolvers} from './schema/index.js'
import { NodeEnv } from "./utils/constants.js";
import { Context, prisma } from './context.js'

import Keyv from "keyv";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<Context>({
	typeDefs,
	resolvers,
	plugins: [
		NODE_ENV === NodeEnv.PRODUCTION
			? ApolloServerPluginLandingPageProductionDefault()
			: ApolloServerPluginLandingPageLocalDefault({ embed: false }),
	],
	cache: new KeyvAdapter(new Keyv(REDIS_URL))
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
	listen: { port: PORT },
	context: async ({ req, res }) => ({
		prisma: prisma
	})
});

console.log(`🚀  Server ready at: ${url}`);