//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get name(name){
		return name;
	}
	set age(age){
		return age;
	}
}

class Student extends Person {
	study(name){
		return name+" is studying";
	}
}

class Teacher extends Person {
	teach(name){
		return name +"is teaching";
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
