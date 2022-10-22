//2.	Write a function that finds a perimeter of the rectangle given by two sides.
let a = 6
let b = 8
let perimeter = (a+b)*2
const rectangle = {
	a: a,
	b: b,
	perimeter: perimeter,
}
console.log(rectangle)


//9.	Write a function to check whether a given number is positive or negative.
let x = 0
if (x>=0){
	console.log("x is positive")
}
else {
	console.log("x is negative")
}

//15.	Write a function that returns the day of the week by its numbers.
let y = 5
if (y==1){
	console.log("Monday")
}
else if (y==2){
	console.log("Tuesday")
}
else if (y==3){
	console.log("Wednesday")
}
else if (y==4){
	console.log("Thursday")
}
else if (y==5){
	console.log("FriYAY")
}
else if(y==6){
	console.log("Saturday")
}
else if (y==7){
	console.log("Sunday")
}
else {
	console.log("Insert a number from 1 to 7")
}