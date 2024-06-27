let marks_class=[87,65,43,55,false,"not present"];
console.log(marks_class[0]);
console.log(marks_class[1]);
console.log(marks_class[2]);
console.log(marks_class[3]);
console.log(marks_class[4]);
console.log(marks_class[5]);
console.log(marks_class[6]);//undefined because it doesnot exist.
console.log("The legth of marks is",marks_class.length );
marks_class[6]=89;//adding a new value to the array.
marks_class[0]=96;
console.log(marks_class);
console.log(typeof marks_class);