

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
