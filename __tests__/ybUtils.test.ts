import {format, parse, validation} from "../dist/ybutil.cjs";

describe("Format", () => {
	describe("thousands", () => {
		it("number : 123456789 ", () => {
			expect(format.thousands(123456789)).toBe("123,456,789");
		});
		it("string : 123456789 ", () => {
			expect(format.thousands("123456789")).toBe("123,456,789");
		});
		it("null", () => {
			expect(format.thousands()).toBe(null);
		});
	});
});

describe("Parse", () => {
	it("queryString parameter(string) : https://www.naver.com?abc=1", () => {
		expect(parse.queryString("https://www.naver.com?abc=1")).toStrictEqual({abc: "1"});
	});
});

describe("Validation", () => {
	describe("emailId", () => {
		it("hello", () => {
			expect(validation.emailId("hello")).toBe(true);
		});
		it("a_hello123", () => {
			expect(validation.emailId("a_hello123")).toBe(true);
		});
		it("000_hello123", () => {
			expect(validation.emailId("000_hello123")).toBe(true);
		});
		it("h_ello", () => {
			expect(validation.emailId("h_ello")).toBe(true);
		});
		it("hello! => false", () => {
			expect(validation.emailId("hello!")).toBe(false);
		});
		it("_hello => false", () => {
			expect(validation.emailId("_hello!")).toBe(false);
		});
		it("a---___hel.lo123", () => {
			expect(validation.emailId("a---___hel.lo123")).toBe(true);
		});
	});

	describe("domain", () => {
		it("naver.com", () => {
			expect(validation.domain("naver.com")).toBe(true);
		});
		it("naver.co.kr", () => {
			expect(validation.domain("naver.co.kr")).toBe(true);
		});
	});

	describe("email", () => {
		it("a---___hel.lo123@naver.co.kr", () => {
			expect(validation.email("a---___hel.lo123@naver.co.kr")).toBe(true);
		});
		it("0---___hel.lo123@naver.com", () => {
			expect(validation.email("0---___hel.lo123@naver.com")).toBe(true);
		});
	});

	describe("mobilePhone", () => {
		it("01077778888", () => {
			expect(validation.mobilePhone("01077778888")).toBe(true);
		});
		it("01112341234", () => {
			expect(validation.mobilePhone("01112341234")).toBe(true);
		});
		it("0107778888", () => {
			expect(validation.mobilePhone("0107778888")).toBe(true);
		});
		it("01212341234 => false", () => {
			expect(validation.mobilePhone("01212341234")).toBe(false);
		});
	});

	describe("birthDate", () => {
		it("string", () => {
			expect(validation.birthDate("19860822")).toBe(true);
		});
		it("number", () => {
			expect(validation.birthDate(19860822)).toBe(true);
		});
		it("false", () => {
			expect(validation.birthDate(40000822)).toBe(false);
		});
	});
});
