import {StringUtil} from "../dist/ybutil.cjs";

describe("StringUtil", () => {
	it("queryString", () => {
		expect(StringUtil.queryString("https://www.naver.com?abc=1")).toStrictEqual({abc: "1"});
	});
	it("fmtNumber test number", () => {
		expect(StringUtil.fmtNumber(123456789)).toBe("123,456,789");
	});
	it("fmtNumber test string", () => {
		expect(StringUtil.fmtNumber("123456789")).toBe("123,456,789");
	});
	it("fmtNumber test null", () => {
		expect(StringUtil.fmtNumber(null)).toBe(null);
	});
});
