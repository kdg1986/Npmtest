export default interface Format {
	/**
	 * @description 숫자 포맷팅
	 * @param numberOrString string | number
	 * @returns "123,456,789"
	 */
	thousands(numberOrString?: string | number | undefined): string | null;
}
