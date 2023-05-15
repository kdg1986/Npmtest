export declare namespace parse {
	/**
	 * @description url 쿼리 파싱
	 * @param url https://www.ybtour.co.kr?a=1&b&=2
	 * @returns "{ 'a' : '1' , 'b' : '2' }"
	 */
	function queryString(url: string): {[key: string]: string};
}

export declare namespace format {
	/**
	 * @description 숫자 포맷팅
	 * @param numberOrString string | number
	 * @returns "123,456,789"
	 */
	function thousands(numberOrString?: string | number | undefined): string | null;
}

export declare namespace device {
	/**
	 * @description 현재 디바이스
	 * @param numberOrString string | undefined | default : window.navigator.userAgent
	 * @returns "IOS | ANDROID | Windows | unknown"
	 */
	function current(ua?: string | undefined): string;
}

export declare namespace validation {
	/**
	 * @description 이메일 아이디 체크 hello
	 * @param id string
	 * @returns boolean
	 */
	function emailId(id: string): boolean;

	/**
	 * @description 도메인 체크 ybtour.co.kr
	 * @param domain string
	 * @returns boolean
	 */
	function domain(domain: string): boolean;

	/**
	 * @description 이메일 hello@ybtour.co.kr
	 * @param domain string
	 * @returns boolean
	 */
	function email(domain: string): boolean;

	/**
	 * @description 핸드폰 번호 체크 0107777(3,4)8888
	 * @param number string | number
	 * @returns boolean
	 */
	function mobilePhone(number: string | number): boolean;

	/**
	 * @description 생년월일체크 19860822
	 * @param date string | number
	 * @returns boolean
	 */
	function birthDate(date: string | number): boolean;
}
