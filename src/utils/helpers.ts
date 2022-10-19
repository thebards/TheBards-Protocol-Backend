// @ts-ignore
import omitDeep from 'omit-deep';

export const prettyJSON = (message: string, obj: string) => {
	console.log(message, JSON.stringify(obj, null, 2));
};

export const sleep = (milliseconds: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const omit = (object: any, name: string) => {
	return omitDeep(object, name);
};

export const getParamOrExit = (name: string) => {
	const param = process.env[name];
	if (!param) {
		console.error(`Required config param '${name}' missing`);
		process.exit(1);
	}
	return param;
};

export const getParam = (name: string) => {
	const param = process.env[name];
	if (!param) {
		return null;
	}
	return param;
};

export const argsBespokeInit = () => {
	return process.argv.find((c) => c === '--init') !== undefined;
};