 //problem 1 print the marks using loop 
let marks = {
  Alex : 76,
  Rohan : 56,
  Rahul : 45,
  Raj : 34, 
}
for(let i=0; i<Object.keys(marks).length; i++){
  console.log("The marks are" +Object.keys(marks)[i]+"are"+marks[Object.keys(marks)[i]]);
}
//problem 2 solve problem 1 using for in loop
for(let key in marks){
  console.log("The marks of "+key+"are"+marks[key]);
}
//problem 3
let correct = 5;
let i;
while(i<correct ){
  console.log("Try again");
  i=prompt("Enter the number");
}
//problem 4
const mean = (a,b,c,d)=>{
  return (a+b+c+d)/4;
}
console.log(mean(4,5,6,7));
