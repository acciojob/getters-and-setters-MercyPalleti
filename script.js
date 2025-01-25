//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	getname(){
		return this._name;
	}
	setage(newage){
		this._age=newage;
	}
}

class Student extends Person {
	study(){
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this._name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
