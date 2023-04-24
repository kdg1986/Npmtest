import StringUtilInterface from "../types/StringUtilInterface";

class StringUtil implements StringUtilInterface {
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

export default StringUtil;
