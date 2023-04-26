export default interface StringUtilInterface {
	/**
	 * @description url 쿼리 파싱
	 * @param url https://www.ybtour.co.kr?a=1&b&=2
	 * @returns "{ 'a' : '1' , 'b' : '2' }"
	 */
	queryString: (url: string) => {[key: string]: string};
	/**
	 * @description 숫자 포맷팅
	 * @param numberOrString string | number
	 * @returns "123,456,789"
	 */
	fmtNumber: (numberOrString: string | number) => string | null;
}
