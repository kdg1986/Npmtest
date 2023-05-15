export default interface Parse {
	/**
	 * @description url 쿼리 파싱
	 * @param url https://www.ybtour.co.kr?a=1&b&=2
	 * @returns "{ 'a' : '1' , 'b' : '2' }"
	 */
	queryString: (url: string) => {[key: string]: string};
}
