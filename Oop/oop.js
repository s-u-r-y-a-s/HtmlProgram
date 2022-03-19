// class Student {
//     constructor() {
//         document.writeln('lsdls')
//     }

//     details(name, age) {
//         this.name = name;
//         this.age = age;
//         document.writeln(this.name)
//     }
//     new(course, mark) {
//         this.course = course;
//         this.mark = mark;
//         document.writeln(this.mark)
//     }
// }
// class Parents extends Student {
//     constructor() {
//         super();
//     }
//     family(father, mother) {

//         this.father = father;
//         this.mother = mother;
//         document.writeln(this.mother)

//     }




// }
// var x = new Parents();
// x.new('ece', 34)


// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         document.write(this.carname)
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");
// myCar.present();




//polymorphism
// class First {
//     invoke() {
//         document.writeln("A is invoked");
//     }
// }
// class Second extends First {
//     invoke() {
//         document.writeln("B is invoked");
//     }
// }

// var a = [new First(), new Second()]
// a.forEach(function(msg) {
//     msg.invoke();
// });



//polymorphism with args

// class First {
//     invoke() {
//         document.writeln("A is invoked");
//     }
// }
// class Second extends First {

//     invoke(args) {
//         document.writeln("B is invoked " + args);
//     }
// }

// var a = new Second()
// var b = new First()
// a.invoke("first");
// b.invoke();



//ABSTRACTON
function Student() {
    this.Name = Name;
    throw new Error("You cannot create an instance of Abstract Class");
}
Student.prototype.print = function() {
    return "Student is: " + this.Name;
}

function KG(Name) {
    this.Name = Name;
}
KG.prototype = Object.create(Student.prototype);
var kg = new KG("Asif");
document.writeln(kg.print());