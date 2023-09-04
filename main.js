//task 1
// function t1() {
//     alert("Welcome")
// }


//task 2
// function hour(){
//     console.log(new Date().getHours())
// }


//task 3
// function t3(){
//     myH3.style.color = "purple"
// }

//task 4
// function t4(){
//     p.style = "width: 200px"
// }

//task 5
// function changeText (){
//     firstText.innerText = "yeah yeah yeah"
// }

//task 6 
// var userName = prompt("insert your name");
// function printName (userName){
//     myDiv.innerText = userName
// }

//challange 6
// function printName (){
//     myDiv.innerText = myInput.value
// }

//task 7
// function browserColor () {
//     var hour = +(myInput.value)
//     if (hour < 12) {
//         document.body.style = "background-color: yellow"
//         myP.innerText = "Good Moorning"
//     }
//     else {
//         document.body.style = "background-color: blue"
//     }
// }

//task 8
// var userAge = +prompt("What's your age?")
// function welcome (userAge){
//     if (userAge >= 18){
//         myP.innerText = "welcome"
//         myP.style = "color: blue"
//     }
//     else {
//         myP.innerText = "welcome"
//         myP.style = "color: red"
//     }
// }
// welcome(userAge)

// function changeToGreen (){
//     myP.style = "color: green"
// }

//task 9 
// function printUserNum () {
//     for(i = 0; i < 5; i++){
//         myDiv.innerText =  +(myInput.value)
        
//     }
//     if (+(myInput.value) == Math.floor(Math.random() * 57) ){
//         myDiv.innerText += "CONGRATULATIONS!"
//         return
//     }
//     else {
//         myDiv.innerText += "Wrong number"
//         return
//     }
// }

//task 10 
// function printUserNum () {
//     for(i = 0; i < 5; i++){
//         myDiv.innerText =  +(myInput.value)
//         if (+(myInput.value) == Math.floor(Math.random() * 57) ){
//             myDiv.innerText += "CONGRATULATIONS!"
//             return
//         }
//         else {
//             myDiv.innerText += "Wrong number"
//             return
//     }
//     }
// }

//task 11???????
var userName = prompt("insert your name")
var bornDate = prompt("Quando você nasceu? (m/d/a)");
var bornDateArray = bornDate.split('/'); 
var bornYear = bornDateArray[2];
function checkAge (){
    var today = +2023;
    var userage = (today - bornYear);
    console.log(userage)
    if (userage >= 18){
        myP.innerText = "welcome" + " " + userName + ":)"
        myP.style = "color: blue"
        naruto.style = "display: none"
        
    }
    else {
        myP.innerText = "you're too young"
        myP.style = "color: red"
        naruto.style = "display: block"
        
    }
}
function changeToGreen (){
    myP.style = "color: green"
}
checkAge()






//-----------------------class exercises about EVENTS 'handler'-----------------//

// function printColor(color) {
//     console.log(color)
//     myColors.innerText += " " + color
// }

// function printText(string) {
//     console.log(string)
//     myDiv.innerHTML += " " + string
// }


// function changeH1(value) {
//     myH1.innerHTML = myInput.value
// }