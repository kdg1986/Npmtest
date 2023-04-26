import LoginUtilInterface from "types/LoginUtilInterface";

class LoginUtil implements LoginUtilInterface {
	#channelCode: string;
	#loginBaseUrl: string;
	#logoutBaseUrl: string;

	constructor(host: string, channelCode: string) {
		this.#channelCode = channelCode;
		this.#loginBaseUrl = `${host}/accounts/signIn.yb`;
		this.#logoutBaseUrl = `${host}/accounts/signOut.yb`;
	}

	/**
	 * @description 로그인
	 */
	login(nextUrl?: string) {
		window.location.href = `${this.#loginBaseUrl}?channelCode=${this.#channelCode}&returnUrl=${encodeURI(
			nextUrl || window.location.href,
		)}`;
	}

	/**
	 * @description 로그인(회원 / 비회원예약)
	 */
	loginRsvn(nextUrl?: string) {
		window.location.href = `${this.#loginBaseUrl}?channelCode=${this.#channelCode}&typeCode=RSVN&returnUrl=${encodeURI(
			nextUrl || window.location.href,
		)}`;
	}

	/**
	 * @description 예약확인
	 */
	loginRsvnConfirm() {
		window.location.href = `${this.#loginBaseUrl}?channelCode=${this.#channelCode}&returnUrl=${
			this.#loginBaseUrl
		}/mypage/resvInfo.yb`;
	}

	/**
	 * @description 로그아웃
	 */
	logout() {
		window.location.href = `${this.#logoutBaseUrl}?channelCode=${this.#channelCode}&returnUrl=${encodeURI(
			window.location.href,
		)}`;
	}
}

export default LoginUtil;
