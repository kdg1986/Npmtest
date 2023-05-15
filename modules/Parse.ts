import ParseInterface from "types/Parse";

class Parse implements ParseInterface {
	constructor() {}
	queryString(url: string): {[key: string]: string} {
		const params: {[key: string]: string} = {};
		// @ts-ignore
		url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str, key, value) => {
			return (params[key] = value);
		});
		return params;
	}
}

export default new Parse();
