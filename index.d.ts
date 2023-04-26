import StringUtilInterface from "./types/StringUtilInterface";
import LoginUtilInterface from "./types/LoginUtilInterface";

declare class LoginUtil implements LoginUtilInterface {
	constructor(host: string, channelCode: string);
	/**
	 * @description 로그인
	 */
	login: (nextUrl?: string | undefined) => void;
	/**
	 * @description 로그인(회원 / 비회원예약)
	 */
	loginRsvn: (nextUrl?: string | undefined) => void;
	/**
	 * @description 예약확인
	 */
	loginRsvnConfirm: () => void;
	/**
	 * @description 로그아웃
	 */
	logout: () => void;
}

export declare class YBUtils {
	static stringUtil: StringUtilInterface;
	static LoginUtil: LoginUtil;
}
