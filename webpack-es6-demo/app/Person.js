class Person{

	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	say(){
		return `我是${this.name},我今年${this.age}岁了。`;
	}

	setName(age) {

		let number = 0;

		if(Number.isNumber(age)) {
			number = age;
		}

		this.age = number;
	}
}

export default Person;
