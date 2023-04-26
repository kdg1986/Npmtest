import YBUtils from "../esm/ybUtils.esm.production";

const {stringUtil} = YBUtils;

describe("StringUtil", () => {
	it("queryString", () => {
		expect(stringUtil.queryString("https://www.naver.com?abc=1")).toStrictEqual({abc: "1"});
	});
	it("fmtNumber test number", () => {
		expect(stringUtil.fmtNumber(123456789)).toBe("123,456,789");
	});
	it("fmtNumber test string", () => {
		expect(stringUtil.fmtNumber("123456789")).toBe("123,456,789");
	});
	it("fmtNumber test null", () => {
		expect(stringUtil.fmtNumber(null)).toBe(null);
	});
});
