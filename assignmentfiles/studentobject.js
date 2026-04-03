const student = {

    rollno: "",
    course: "",
    duration: "",
    startDate: "",
    endDate: "",
    grade: "",

    setStudentData: function(rollno, course, duration, startDate, endDate, grade) {
        this.rollno = rollno;
        this.course = course;
        this.duration = duration;
        this.startDate = startDate;
        this.endDate = endDate;
        this.grade = grade;
    },

    getStudentData: function() {
        return `Roll No: ${this.rollno}, Course: ${this.course}, Duration: ${this.duration},
        Start: ${this.startDate}, End: ${this.endDate}, Grade: ${this.grade}`;
    }
};


student.setStudentData(86, "B.Tech", "4 years", "2020", "2024", "A");

console.log(student.getStudentData());