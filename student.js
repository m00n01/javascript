class student{
    constructor(name, gradeLevel, gpa){
        this.name = name;
        this.gradeLevel = gradeLevel;
        this.gpa = gpa;
    }

    getName(){
        return name;
    }

    getGradeLevel(){
        return this.gradeLevel;
    }

    getGPA(){
        return this.gpa;
    }

    toString(){
        return "Name: " + this.name + "\nGrade Level: " + this.gradeLevel + "\nGPA: " + this.gpa + "";
    }
}