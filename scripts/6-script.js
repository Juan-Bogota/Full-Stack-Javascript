// JAvascript Switch

let num = 1;

switch(num) {
    case 1: console.log(`${num} tiene el valor de 1`);
    break;
    case 2: console.log(`${num}um tiene el valor de 2`);
    break;
    default: console.log(`${num}Numeros no es 1 ni 2`);
}

switch(num) {
    case 1:
    case 3:
    case 5:
    console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
    case 6:
    console.log(`${num} es par`);
    
}

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

/* What happens if I forgot a break?
If you forget a break then the script will run from the case where the criterion
is met and will run the cases after that regardless if a criterion was met.*/

var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
    // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}
/* Can I put a default between cases?
    Yes, you can! JavaScript will drop you back to the default if it can't find a match:
*/

var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    // fall-through
  case 1:
    console.log('1');
}
// Multi-case : chained operations
var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}


const action = 'say_hello';
switch (action) {
  case 'say_hello': { // added brackets
    let message = 'hello';
    console.log(message);
    break;
  } // added brackets
  case 'say_hi': { // added brackets
    let message = 'hi';
    console.log(message);
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
    break;
  } // added brackets
}
/* Sintaxis multiple encadenada*/