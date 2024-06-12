interface studentDetails {
    firstName : string
    lastName : string
    grade : number
}

export class Student{
    firstName :string
    lastName :string
    grade :number
    lateCount : number
    marks : number[]
    constructor({
        firstName,
        lastName,
        grade
    } : studentDetails) {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = grade
        this.lateCount = 0
        this.marks = new Array()
    }
    fullName() {
        console.log(`your name is ${this.firstName} ${this.lastName}`)
    }
    markLate(){
        this.lateCount += 1
        if(this.lateCount > 3){
            return console.log(`LAST WARNING, DON'T COME LATE AGAIN`);
        }
        return console.log(`you're ${this.lateCount} times late`)
    }
    addMarks(value : number) {
        this.marks.push(value)
        return console.log(`you're marks were ${this.marks}`);   
    }
    calculateAverage(){
        const sum = this.marks.reduce((a,b) => a+b);  
        return console.log("you're average is " + (sum/this.marks.length).toFixed(2));
    }
}

const pranav = new Student({
    firstName : "pranav",
    lastName : "chaitu",
    grade : 2
})

console.log(`-----------------------------------------`);
console.log(`here the instance will be :`);
console.log(pranav);
console.log(`-----------------------------------------`);
pranav.fullName()
console.log(`-----------------------------------------`);
pranav.markLate();
pranav.markLate();
pranav.markLate();
pranav.markLate();
console.log(`-----------------------------------------`);
//you know it is the wrong way
//as no developer would ever let the user modify the classes instead they provide methods to manipulate instance vriables like we did
// console.log(pranav.marks.push(3));
pranav.addMarks(5)
pranav.addMarks(81)
pranav.addMarks(99)
console.log(`-----------------------------------------`);
pranav.calculateAverage()
console.log(`-----------------------------------------`);




