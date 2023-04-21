class StringUtil {
	constructor() {
		console.info("YBStringUtil");
	}

	queryString(url: string): {[key: string]: string} {
		const params: {[key: string]: string} = {};
		// @ts-ignore
		// @ts-expect-error
		url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str, key, value) => {
			return (params[key] = value);
		});
		return params;
	}
}

export default StringUtil;
