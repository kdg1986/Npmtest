import DeviceInterface from "types/Device";

class Device implements DeviceInterface {
	constructor() {}
	current(ua = window.navigator.userAgent): string {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) ? "Mobile" : "Desktop";
	}
}

export default new Device();
