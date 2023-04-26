import StringUtilInterface from "types/StringUtilInterface";

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

	fmtNumber(numberOrString: string | number) {
		if (["string", "number"].indexOf(typeof numberOrString) === -1) return null;
		return String(numberOrString).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
	}
}

export default StringUtil;
