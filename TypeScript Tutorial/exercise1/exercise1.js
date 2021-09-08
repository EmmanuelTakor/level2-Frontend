// let firstName:string = "Emmanuel";
// let lastName:string = "Takor";
// let phoneNumber :number = 678548965;
// let isMarried:boolean = true;
// class Person {
//    private firstName:string = "Emmanuel";
//     private lastName:string = "Takor";
//     private phoneNumber :number = 678548965;
//     private isMarried:boolean = true;
// }
// class Collection{
//     private value1;
//     private value2;
//     add(){
//         return this.value1 + this.value2;
//     }
//     substract(){
//         return this.value1 - this.value2;
//     }
//      divide(){
//         return this.value1 / this.value2;
//     }
//      multiply(){
//         return this.value1 * this.value2;
//     }
// }
// class Operator extends Collection {
//     constructor(){
//         super()
//     } 
// }
var Student = /** @class */ (function () {
    function Student() {
        Student.counter++;
    }
    // firstName:string;
    // lastName:string;
    Student.counter = 0;
    return Student;
}());
new Student();
console.log(Student.counter);
