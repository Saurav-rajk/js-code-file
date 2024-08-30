

// course.courseInstructor

// const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// it is known as JSON
// [
//     {},
//     {},
//     {}
// ]

// If you dont know how much argument should be passed in function then
// function calPrice(...num1){
//     return num1
// }
// console.log(calPrice(200,400,500))

// // How to pass the object in function.
// const obj1 = {
//     usr: "Saurav",
//     price:  1999
// }

function handleObject(obj){
    console.log(`Username is ${obj.usr} and price is ${obj.price}`);

}
// handleObject(obj1);

// const arr1 = [200,300,400,500]

// function valueOf(getArr){
//     return getArr[2];
// }
// console.log(valueOf(arr1));

if(true){
    let a = 10;
    const b=20;
    var c= 30;
}
// console.log(a);// Error
// console.log(b);  //  Error
console.log(c); //It will print the value

// Cond - 2
var c=300
if(true){
    let a = 10;
    const b=20;
    var c= 30;
}
console.log(c); // It is giving two times 30

// Scope Concept

if(true){
    const usr="Saurav"
    if(usr ==="Saurav"){
        const web = " youtube"
        console.log(usr+web);
    }
    // console.log(web); Error
}
// console.log(usr);  Error

// console.log(addone(5)); // It will give the value 6
// function addone(num){
//     return num +1
// }

// // addone(5)

// // addTwo(5)  // But in this condition it will give error.
// const addTwo = function(num){
//     return num + 2;
// }

// addTwo(5)

// Arrow function and this keyword.
// const user = {
//     username: "saurav",
//     price: 888,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()


// const chai = function(){
//     let usr = "andf"
//     console.log(this.usr);
// }
// chai() // It will give undefined.

// const v1 = () => {
//     let usr = "andf"
//     console.log(this.usr);
// }
// v1() // It will also give undefined.

// const addTwo = (num1, num2) => {
//     return num1 + num2  // Explicit return
// }

// const addTwo = (num1, num2) => (num1 + num2) // It is known as implicit return.
    
const addTwo = (num1, num2) => ({username: "Saurav"})

console.log(addTwo(3,4))

//Loop Basics

// For of loop 
// const arr = [1,2,3,4,5,6]
// for(const num of arr){
//     console.log(num);
// }

// const greeting = "Hello world!"
// for(const greet of greeting){
//     console.log(`Each char is ${greet}`)
// }

// MAPs
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
console.log(map);

// Destructure of array
for (const [key, value] of map){
    console.log(key, ':-', value);
}

// Loop for object

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift"
}

// for(const key in myObject){
//     console.log(`${key} value is ${myObject[key]}`);
// }

// const pr = ["js", 'rb', "java", "javascript", "swift"]
// for(const key in pr){
//     console.log(pr[key]);
// }

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

const coder = [
    {
        Name: "java",
        FileName: "java"
    },
    {
        Name: "Python",
        FileName: 'py'
    },
    {
        Name: 'C++',
        FileName: 'cpp'
    }
]
coder.forEach( (item) =>{
    console.log(item.FileName);
})