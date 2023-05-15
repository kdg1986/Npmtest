export default interface Device {
	/**
	 * @description 현재 디바이스
	 * @param numberOrString string | undefined | default : window.navigator.userAgent
	 * @returns "IOS | ANDROID | Windows | unknown"
	 */
	current: (ua?: string | undefined) => string;
}
