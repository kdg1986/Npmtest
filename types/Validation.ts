export default interface Validation {
	/**
	 * @description 이메일 아이디 체크 hello
	 * @param id string
	 * @returns boolean
	 */
	emailId(id: string): boolean;

	/**
	 * @description 도메인 체크 ybtour.co.kr
	 * @param domain string
	 * @returns boolean
	 */
	domain(domain: string): boolean;

	/**
	 * @description 이메일 hello@ybtour.co.kr
	 * @param domain string
	 * @returns boolean
	 */
	email(domain: string): boolean;

	/**
	 * @description 핸드폰 번호 체크 0107777(3,4)8888
	 * @param number string | number
	 * @returns boolean
	 */
	mobilePhone(number: string | number): boolean;

	/**
	 * @description 생년월일체크 19860822
	 * @param date string | number
	 * @returns boolean
	 */
	birthDate(date: string | number): boolean;
}
