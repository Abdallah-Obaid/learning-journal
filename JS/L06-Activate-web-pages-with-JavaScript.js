
var Name = window.prompt("Enter your name pls");
console.log("The name is=",Name);
var age = window.prompt("your age pls");
console.log("The name is=",age);
var pet = window.prompt("Do you have a pit");
console.log("The name is=",pet);
var age1; 
var note;
 
if (age > 69 ) {
    note= 'You live alot! go and die!!'
    age1 = age;
    console.log("true0")
  } else if (age >17 ) {
    note= 'Dont waste your time in this site'
    age1 = age;
    console.log("true")
  } else if (age <= 17) {
    note= 'you still young Find a Jop dont waste your time in a schoole'
    console.log("true2")
    age1 = age;
  } else {    age1 = 'WT*';
  console.log("false")
  }
 document.write('<h1>  Note:  '+note+'   </h1>');

 document.write('<h2> Name:    '+Name+'                       Age:   ' +age+'                     Pet Name: '+pet+'</h2>');
//  the reason is  to print  client data after entring the wibsite.