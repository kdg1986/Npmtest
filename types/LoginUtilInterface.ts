export default interface LoginUtilInterface {
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
