import StringUtil from "@MODULES/StringUtil";

const stringUtil = new StringUtil();

test("StringUtils Test", () => {
	expect(stringUtil.queryString("https://www.naver.com?abc=1")).toStrictEqual({abc: "1"});
});
