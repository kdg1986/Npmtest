import ValidationInterface from "types/Validation";

class Validation implements ValidationInterface {
	#regExpEmailId: string = "[0-9a-zA-Z][0-9a-zA-Z-_.]*";
	#regExpDomain: string = "[a-zA-Z0-9-.]+\\.[a-zA-Z]+";
	#regExpMobileNum: RegExp = /^01([0|1|6|7|8|9]?)([0-9]{3,4})([0-9]{4})$/;
	#regExpBirthDate: RegExp = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;

	constructor() {}

	birthDate(date: string | number): boolean {
		return this.#regExpBirthDate.test(String(date));
	}
	emailId(id: string): boolean {
		return new RegExp(`^${this.#regExpEmailId}$`).test(id);
	}
	domain(domain: string): boolean {
		return new RegExp(`^${this.#regExpDomain}$`).test(domain);
	}
	email(domain: string): boolean {
		return new RegExp(`^${this.#regExpEmailId}@${this.#regExpDomain}$`).test(domain);
	}
	mobilePhone(number: string | number): boolean {
		return this.#regExpMobileNum.test(String(number));
	}
}

export default new Validation();
