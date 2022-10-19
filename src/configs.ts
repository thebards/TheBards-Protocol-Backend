import { 
	getParamOrExit, 
	getParam
} from "./utils/helpers.js";

export const PORT = Number(getParamOrExit('PORT'));

export const NODE_ENV = getParamOrExit('NODE_ENV');

export const SCHEMA_GRAPHQL_PATH = getParamOrExit('SCHEMA_GRAPHQL_PATH');

export const DATABASE_URL = getParamOrExit('DATABASE_URL');

export const readReplicaDatabaseUrl = String(process.env.READ_REPLICA_DATABASE_URL || process.env.DATABASE_URL)

export const REDIS_URL = getParamOrExit('REDIS_URL');

export const PK = getParamOrExit('PK');

export const MUMBAI_RPC_URL = getParamOrExit('MUMBAI_RPC_URL');

export const INFURA_PROJECT_ID = getParam('INFURA_PROJECT_ID');

export const INFURA_SECRET = getParam('INFURA_SECRET');
