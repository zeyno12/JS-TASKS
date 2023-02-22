// ///js_testing_rest_funksiya
// function printName(home, ...allNames) {
//   allNames.forEach((name) => console.log(name));
// }
// printName("zeynab", "sevda", "zahra");

// //js_testing_array_destructure
// let names = ["rauf", "zeynab", "mama", "papa"];
// // let  [name1,name2,name3,name4]=names
// // console.log(name1,name2,name3,name4);
// //bize name2 lazimdirsa
// let [name1, ...renamigNames] = names;
// console.log(renamigNames);

// //js_testing_object_destructure
// let person = { age: 21, name: "Zeynus" };
// let { age, name } = person;
// console.log(person);

// //js_testing_spread_syntacs(yaymaq)
// function helloNames(name1, name2, name3) {
//   console.log(name1, name2, name3);
// }
// let naming = ["zezi", "zuzu", "zaza"];
// helloNames(...naming);

// //js_testing_typeof
// typeof 1; //number
// typeof true; //boolean
// typeof "zeynus"; //string
// typeof (() => {}); //function
// typeof {}; //object
// typeof null; //object
// typeof undefined; //undefined
// typeof NaN; //number(yeni her hansi riyazi emeliyat olduqda js deyerin oldiqin reqem oldugun gorur error qaytarmir ama duzgun olmadiqda qaytarir)

// //js_testing_function_expressions
// function showMessaje() {}
// //ferg odurki deiwen teyin etmekle funksiya yaziqir
// let fn = function () {};
// //return
// let square = function (a) {
//   return a * a;
// };
// let res = square(6);
// console.log(res);

// //js_testing_immendiately_invoked_function_expession(iife)(yeni,derhal icra olunan fucntion)
// (function () {
//   console.log("salam zuzu");
// })();
// //securty_code

// //js_tsting_closure
// let car = (function () {
//   let brand = "bmw";
//   let getBrand = function () {
//     return brand;
//   };
//   return {
//     getBrand: getBrand,
//   };
// })();
// car.getBrand();
// console.log(car.getBrand());
// //js_this keyword
// const persons = {
//   firstName: "zulinka",
//   lastName: "bagirova",
//   fullName() {
//     return this.firstName + "" + this.lastName;
//   },
// };
// console.log(persons);

// //js_call and apply functions
// const person1 = {
//   firstName: "zulinka",
//   lastName: "bagirova",
//   fullName() {
//     return this.firstName + "" + this.lastName;
//   },
// };
// const person2 = {
//   firstName: "rauf",
//   lastName: "bagirov",
// };
// person1.fullName.call(person2); //call apply funksiyasina benzeyir fergi odurki,arrayda elemetnleri gondermek olur applyde
// //bind()
// const perso1 = {
//   firstName: "zulinka",
//   lastName: "bagirova",
//   fullName() {
//     return this.firstName + "   " + this.lastName;
//   },
// };
// const perso2 = {
//   firstName: "zerus",
//   lastName: "bagirovaa",
// };
// let newFn = perso1.fullName.bind(perso2);
// console.log(newFn());
// //funksiyaya obyekt gonderende Pass by reference deilir yeni:
// let human = {
//   name: "tolga",
//   age: 25,
// };
// function incrementAge(human) {
//   human.age++;
//   console.log("inside fn", human.age);
// }
// incrementAge(human);

// ///constructor function
// function Person(name) {
//   this.name = name;
//   this.greet = function () {
//     console.log("hi geerting", this.name);
//   };
// }
// let personss = new Person("fifi");
// personss.greet();
// //prototype
// function Woman(name) {
//   this.name = name;

//   Woman.prototype.greet = function () {
//     console.log("hi geerting", this.name);
//   };
// }
// let woman = new Woman("beauty");
// woman.greet();
// //expanding object using prototypes
// String.prototype.hello = function () {
//   return this.toString() + "fuck";
// };
// console.log("cat".hello());
// //array loop
// let elements = ["a", "b", "c", "z", "q", "d"];
// let filteredEl = elements.filter(function (item) {
//   return item > "b";
// });
// console.log(filteredEl);

// //class js
// var id = 777;
// class Car {
//   constructor(carId) {
//     this.id = carId;
//   }
// }
// let cars = new Car(777);
// console.log(cars.id);

// //inheritance
// class Vehicle {
//   constructor() {
//     this.type = " car";
//   }
//   start() {
//     console.log(`startimg ${this.type}... max is spper ${this.speed}.`);
//   }
// }
// class Care extends Vehicle {
//   constructor() {
//     super();
//     this.speed = 240;
//   }
// }
// let carr = new Care();
// carr.start();

////
// import { Person } from "../modules/modules.js";
// function valodateForm(e) {
//     e.preventDefault();
//   let name = document.forms["myForm"]["fname"].value;
//   let person= new Person(name)
//   if (person.name == "") {
//     alert("name is not defined");
//     return false;
//   }
// }
// const form = document.forms["myForm"];
// form.addEventListener("submit", valodateForm);




// let arr=[1,2,3,4,5,6,7,8,9,10]
// const odds = arr.filter((number) => number % 2 === 1);
// console.log(odds);
// let arr2=[1,2,3,4,5,6,7,8,9,10]
// const evens = arr2.filter((number) => number % 2 === 0);
// console.log(evens);

let array=["a","b","c","d","e","f","g"],
    odd = [],
    even = [];

for (var i = 0; i < array.length; i++) {
  i % 2 === 1
    ? even.push(array[i]) 
    : odd.push(array[i])
}
console.log(odd)
console.log(even)
