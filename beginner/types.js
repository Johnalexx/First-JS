//Types -Strings and Integers

a = 12;         //defines 'a' as 12

a = a / 2;          //divides the previous value of 'a' and change it to 6

console.log(a);     //prints 6 on the console as an integer


//printing integers as strings 

a = 12;                         //defines 'a' as 12

a = a / 2;                      //divides the previous value of 'a' and change it to '6'

a = String(a);                  //this gives 'a' the ability to print as a string

console.log(a);                 //prints 6 on the console as a string


//printing integers as strings and integers 

a = 12;                         //defines 'a' as 12

a = a / 2;                      //divides the previous value of 'a' and change it to '6'

a = String(a);                  //this gives 'a' the ability to print as a string

b = Number(a);                  //gives 'b' the ability to print as an integer/a number

console.log(a);                 //prints 6 on the console as a string

console.log(b);                 //prints 6 on the console as an integer/a number


//alternative printing integers as strings and integers 

a = 12;                         //defines 'a' as 12

a = a / 2;                      //divides the previous value of 'a' and change it to '6'

a = a + "";                     //an alternative to print as a string

b = Number(a);                  //gives 'b' the ability to print as an integer/a number

console.log(a);                 //prints 6 on the console as a string

console.log(b);                 //prints 6 on the console as an integer/a number


/*To differentiate between the string and integer on the console is that 
The String prints in colour BLACK on the console while
The Integer prints in colour BLUE on the console.
*/




//Using Var and const
/*difference between var and constant(const)
the var can be changed while
the constant can never be changed
*/

var a = 20;     //a var-it can be changed


//const

const a = 10;       //a const- can never be changed,once defined it is permanent