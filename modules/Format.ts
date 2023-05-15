import FormatInterface from "types/Format";

class Format implements FormatInterface {
	constructor() {}
	thousands(numberOrString: string | number | undefined) {
		if (["string", "number"].indexOf(typeof numberOrString) === -1) return null;
		return String(numberOrString).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
	}
}

export default new Format();
