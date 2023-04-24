import YBUtils from "../esm/ybUtils.esm.production";

const {stringUtil} = YBUtils;

describe("StringUtil", () => {
	it("queryString", () => {
		expect(stringUtil.queryString("https://www.naver.com?abc=1")).toStrictEqual({abc: "1"});
	});
});
