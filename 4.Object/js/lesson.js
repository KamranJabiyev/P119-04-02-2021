// let name="Ferid",
//     surname="Memmedov",
//     age=22

// let name1="Sadiq",
//     surname1="Abdullayev",
//     age1=15

// let stu1={
//     Id:1,
//     name:"Ferid",
//     surname:"Memmedov",
//     age:22,
//     knowledge:[{Csharp:"80%"},"ASP.Net","JS","Eslinde hech birini bilmir"],
//     "Test Test":"10.10.2009",
//     getInfo:function(){
//         return `Adi:${this.name}, Soyadi:${this.surname}`
//     },
//     test:100,
//     hobbies:undefined,
//     getAge:function(){
//         return this.age
//     }
// }

// let stu2={
//     Id:2,
//     name:"Sadiq",
//     surname:"Abdullayev",
//     age:15,
//     getInfo:function(){
//         return `Adi:${this.name}, Soyadi:${this.surname}`
//     }
// }

// let stu3={
//     Id:3,
//     name:"Sadiq1",
//     surname:"Abdullayev",
//     age:15,
//     getInfo:function(){
//         return `Adi:${this.name}, Soyadi:${this.surname}`
//     },
//     getAge:function(){
//         return this.age
//     }
// }

// let stu4={
//     Id:4,
//     name:"Orxan",
//     surname:"Abdullayev",
//     age:15,
//     getInfo:function(){
//         return `Adi:${this.name}, Soyadi:${this.surname}`
//     },
//     getAge:function(){
//         return this.age
//     }
// }

// let P119={
//     name:"P119",
//     MaxStuCount:3,
//     students:[],
//     addStudent:function(student){
//         if(this.students.find(s=>s.Id==student.Id)!=undefined){
//             console.log(`${student.name} adli telebe ${this.name} qrupuna artiq elave olunub`);
//             return;
//         }
//         if(this.students.length!=this.MaxStuCount){
//             this.students.push(student)

//             return;
//         }
//         console.log(`Doludur. ${student.name} adli telebeni bashqa qrupa elave edin`)
//     },
//     getAge:function(){
//         return this.age
//     }
// }

// P119.addStudent(stu1)
// P119.addStudent(stu2)
// P119.addStudent(stu1)

// console.log(P119.students)


// console.log(stu1["hobbies"])
// console.log("hobbies" in stu1)

// console.log(stu1.knowledge[0]["Csharp"])
// console.log(stu1.getInfo())
// console.log(stu1["Test Test"])
// console.log(stu2.name)

// for (const key in stu1) {
//     console.log(stu1[key])
// }
class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, surname, age) {
        super(name, surname, age);
    }
    getInfo() {
        return `${this.name} ${this.surname} ${this.age}`
    }
}

// let stu1=new Student("Sadiq","Abdullayev",15)
// let stu2=new Student("Ferid","Memmedov",22)
// console.log(stu1.getInfo())
// console.log(stu2.getInfo())

let arr = new Array(1, 2, 3, 4, 5)
// console.log(arr[0])

class CustomArray {
    elements;
    constructor() {
        this.elements = arguments
    }
    find(callback) {
        let result;
        for (const item of this.elements) {
            if (callback(item)) {
                result = item;
                break;
            }
        }
        return result;
    }

    push(elm){
        this.elements[this.elements.length]=elm
    }
}

let arr1 = new CustomArray(1, 2, 3, 4, 5);

let result=arr1.find(n=>n==7);
console.log(result)