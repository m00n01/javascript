class student{

    constructor(name, gradeLevel, gpa){
        this.name = name;
        this.gradeLevel = gradeLevel;
        this.gpa = gpa;
    }

    get Name(){
        return this.name;
    }

    get GradeLevel(){
        return this.gradeLevel;
    }

    get GPA(){
        return this.gpa;
    }

    toString(){
        return "Name: " + this.name + "\nGrade Level: " + this.gradeLevel + "\nGPA: " + this.gpa + "";
    }
}

let classroomList = [];

class classroom{

    constructor(){}
    
    add(student){
        classroomList.push(student);
    }
    
    remove(student){
        let index = classroomList.indexOf(Daniel);
        classroomList.splice(index, 1);
    }

    getClassSize(){
        return classroomList.length;
    }

    findStudent(student){
        for (var i = 0 ; i < classroomList.length ; i++){
            if (classroomList[i] == student){
                return i;
            }
        }
        return -1;
    }

    getAverage(){
        
        var average = 0.0;

        for (var i = 0 ; i < classroomList.length ; i++){
            average+=classroomList[i].GPA;
            average = average/classroomList.length;
        }

        return average;

    }

}

// JS Classroom
const Daniel = new student("Daniel", 12, 1.85);
const Melissa = new student("Melissa", 12, 3.98);
const Tiffany = new student("Tiffany", 12, 3.98);
const Vincent = new student("Vincent", 12, 4.02);

let myClass = new classroom();

console.log(Daniel.Name);
myClass.add(Daniel);
myClass.add(Melissa);
myClass.add(Tiffany);
myClass.add(Vincent);
console.log(classroomList);
myClass.remove(Daniel);
console.log(classroomList);
console.log(myClass.findStudent(Tiffany));
console.log(myClass.getClassSize());
console.log(myClass.getAverage());
