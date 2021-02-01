// Expresiones Regulares

let cadena = 'Lorem.vlorem and lorem'

let expReg = new RegExp('lorem', 'ig'); // g => global busca todas las coincidencias, i => insesitive case

let expReg2 = /lorem/ig;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));
console.log(cadena.match(expReg));
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
console.log(cadena.match(expReg2));
//let expReg3 = /\d/ig; //=> validar si hay digito
//let expReg3 = /lorem(1,3)/ig; //=> rango de valores repetidos enrtre 1 a 3

let expReg3 = /lorem(1,)/ig; //=> rango de valores repetidos mas de 1
console.log(expReg3.test(cadena));
console.log(expReg3.exec(cadena));


// Using Regex boundaries to fix buggy string.
let buggyMultiline = `tey, ihe light-greon apple tangs on ihe greon traa`;

// 1) Use ^ to fix the matching at the begining of the string, and right after newline.
buggyMultiline = buggyMultiline.replace(/^t/gim,'h');
console.log(1, buggyMultiline); // fix 'tey', 'tangs' => 'hey', 'hangs'. Avoid 'traa'.

// 2) Use $ to fix matching at the end of the text.
buggyMultiline = buggyMultiline.replace(/aa$/gim,'ee.');
console.log(2, buggyMultiline); // fix  'traa' => 'tree'.

// 3) Use \b to match characters right on border between a word and a space.
buggyMultiline = buggyMultiline.replace(/\bi/gim,'t');
console.log(3, buggyMultiline); // fix  'ihe' but does not touch 'light'.

// 4) Use \B to match characters inside borders of an entity.
fixedMultiline = buggyMultiline.replace(/\Bo/gim,'e');
console.log(4, fixedMultiline); // fix  'greon' but does not touch 'on'.

let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];


//Filtrar en array
// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

let fruitsStartsWithA = fruits.filter(fruit => /^A/.test(fruit));
console.log(fruitsStartsWithA); // [ 'Apple', 'Avocado' ]

fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Selecting fruits that dose not start by 'A' by a /^[^A]/ regex.
// In this example, two meanings of '^' control symbol are represented:
// 1) Matching begining of the input
// 2) A negated or complemented character set: [^A]
// That is, it matches anything that is not enclosed in the brackets.

let fruitsStartsWithNotA = fruits.filter(fruit => /^[^A]/.test(fruit));

console.log(fruitsStartsWithNotA); // [ 'Watermelon', 'Orange', 'Strawberry' ]

let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
let enEdSelection = fruitsWithDescription.filter(descr => /(en|ed)\b/.test(descr));

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]

// JS Lookahead assertion x(?=y)
//Las aserciones incluyen límites, que indican el comienzo y el final de líneas y palabras,
//y otros patrones que indican de alguna manera que el reconocimiento es posible
//(incluidas las expresiones anticipadas, inversas y condicionales).

let regex = /First(?= test)/g;

console.log('First test'.match(regex)); // [ 'First' ]
console.log('First peach'.match(regex)); // null
console.log('This is a First test in a year.'.match(regex)); // [ 'First' ]
console.log('This is a First peach in a month.'.match(regex)); // null

//Basic negative lookahead assertion
//For example, /\d+(?!\.)/ matches a number only if it is not followed by a decimal point.
// /\d+(?!\.)/.exec('3.141') matches "141" but not "3.

console.log(/\d+(?!\.)/g.exec('3.141')); // [ '141', index: 2, input: '3.141' ]

//Different meaning of '?!' combination usage in Assertions and  Ranges 
//Different meaning of ?! combination usage in Assertions /x(?!y)/ and Ranges [^?!].
let orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a lemon!";

// Different meaning of '?!' combination usage in Assertions /x(?!y)/ and  Ranges /[^?!]/
let selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

let selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]

let oranges = ['ripe orange A ', 'green orange B', 'ripe orange C',];

let ripe_oranges = oranges.filter( fruit => fruit.match(/(?<=ripe )orange/));
console.log(ripe_oranges); // [ 'ripe orange A ', 'ripe orange C' ]

//  RegExp Character classes
const chessStory = 'He played the King in a8 and she moved her Queen in c2.';
const regexpCoordinates = /\w\d/g;
console.log(chessStory.match(regexpCoordinates));
// expected output: Array [ 'a8', 'c2']


const moods = 'happy 🙂, confused 😕, sad 😢';
const regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu;
console.log(moods.match(regexpEmoticons)); // expected output: Array ['🙂', '😕', '😢']


// Looking for a series of digits

var randomData = "015 354 8787 687351 3512 8735";
var regexpFourDigits = /\b\d{4}\b/g;
// \b indicates a boundary (i.e. do not start matching in the middle of a word)
// \d{4} indicates a digit, four times
// \b indicates another boundary (i.e. do not end matching in the middle of a word)

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']

//Looking for a word (from the latin alphabet) starting with A

var aliceExcerpt = "I’m sure I’m not Ada,’ she said, ‘for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all.";
var regexpWordStartingWithA = /\b[aA]\w+/g;
// \b indicates a boundary (i.e. do not start matching in the middle of a word)
// [aA] indicates the letter a or A
// \w+ indicates any character *from the latin alphabet*, multiple times

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']

//Looking for a word (from Unicode characters)
var nonEnglishText = "Приключения Алисы в Стране чудес hola";
var regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
//[ 'Приключения', 'Алисы', 'в', 'Стране', 'чудес' ]


// Groups and ranges indicate groups and ranges of expression characters.

 aliceExcerpt = 'The Caterpillar and Alice looked at each other';
const regexpWithoutE = /\b[a-df-z]+\b/ig;
console.table(regexpWithoutE);
console.log(aliceExcerpt.match(regexpWithoutE));
// expected output: Array ["and", "at"]

const imageDescription = 'This image has a resolution of 1440×900 pixels an other image 1250x600 pixeles';
const regexpSize = /([0-9]+)×([0-9]+)/;
const match = imageDescription.match(regexpSize);
console.table(match);
console.log(`Width: ${match[1]} / Height: ${match[2]}.`);
// expected output: "Width: 1440 / Height: 900."

// Counting vowels
aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";
const regexpVowels = /[aeiouy]/g;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 25

//Using groups

let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith
First_Name: Juan, Last_Name: Lopez`;

let regexpNames =  /First_Name: (\w+), Last_Name: (\w+)/mg;
let match1 = regexpNames.exec(personList);
do {
  console.log(`Hello ${match1[1]} ${match1[2]}`);
  console.table(match1);
} while((match1 = regexpNames.exec(personList)) !== null);

//Using named groups

regexpNames =  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/mg;
match1 = regexpNames.exec(personList);
do {
  console.log(`Hello ${match1.groups.firstname} ${match1.groups.lastname}`);
} while((match1 = regexpNames.exec(personList)) !== null);

// REGEXP QUANTIFIERS

const ghostSpeak = 'booh boooooooh boooh';
const regexpSpooky = /bo{3,}h/g;
console.log(ghostSpeak.match(regexpSpooky));
// expected output: Array ["boooooooh"]

const modifiedQuote = '[He] ha[s] to go read this novel [Alice in Wonderland].';
const regexpModifications = /\[.*?\]/g;
console.log(modifiedQuote.match(regexpModifications));
// expected output: Array ["[He]", "[s]", "[Alice in Wonderland]"]

const regexpTooGreedy = /\[.*\]/g;
console.log(modifiedQuote.match(regexpTooGreedy));
// expected output: Array ["[He] ha[s] to go read this novel [Alice in Wonderland]"]

// Repeated pattern
var wordEndingWithAs = /\w+a+\b/;
var delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]

// Counting characters

var singleLetterWord = /\b\w\b/g;
var notSoLongWord = /\b\w{1,6}\b/g;
var loooongWord = /\b\w{13,}\b/g;

var sentence = "Why do I have to learn multiplication table?";

console.table(sentence.match(singleLetterWord)); // ["I"]
console.table(sentence.match(notSoLongWord));    // [ "Why", "do", "I", "have", "to", "learn", "table" ]
console.table(sentence.match(loooongWord));      // ["multiplication"]

// Optional character

var britishText = "He asked his neighbour a favour.";
var americanText = "He asked his neighbor a favor.";

var regexpEnding = /\w+ou?r/g;
// \w+ One or several letters
// o   followed by an "o",
// u?  optionally followed by a "u"
// r   followed by an "r"

console.table(britishText.match(regexpEnding));
// ["neighbour", "favour"]

console.table(americanText.match(regexpEnding));
// ["neighbor", "favor"]


// Greedy versus non-greedy
var text = "must be getting somewhere near the centre of the earth. ";
var greedyRegexp = /[\w ]+/;
// [\w ]      a letter of the latin alphabet or a whitespace
//      +     one or several times

console.table(text.match(greedyRegexp));
// "I must be getting somewhere near the centre of the earth"
// almost all of the text matches (leaves out the dot character)

var nonGreedyRegexp = /[\w ]+?/; // Notice the question mark
console.log(text.match(nonGreedyRegexp));
// "m"
// The match is the smallest one possible

// RegExp Unicode property escapes

const sentence1 = 'A ticket to 大阪 costs ¥2000 👌.';

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence1.match(regexpEmojiPresentation));
// expected output: Array ["👌"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence1.match(regexpNonLatin));
// expected output: Array [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence1.match(regexpCurrencyOrPunctuation));
// expected output: Array ["¥", "."]

/*
// Non-binary values
\p{UnicodePropertyValue}
\p{UnicodePropertyName=UnicodePropertyValue}

// Binary and non-binary values
\p{UnicodeBinaryPropertyName}

// Negation: \P is negated \p
\P{UnicodePropertyValue}
\P{UnicodeBinaryPropertyName}
*/

// finding all the letters of a text
let story = "It’s the Cheshire Cat: now I shall have somebody to talk to.";

// Most explicit form
console.log(story.match(/\p{General_Category=Letter}/gu));

// It is not mandatory to use the property name for General categories
story.match(/\p{Letter}/gu);

// This is equivalent (short alias):
story.match(/\p{L}/gu);

// This is also equivalent (conjunction of all the subcategories using short aliases)
console.log(story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu));


//Scripts and script extensions
let mixedCharacters = "aεЛ";

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u); // a

// Using a short alias for the script
mixedCharacters.match(/\p{Script=Greek}/u); // ε

// Using the short name Sc for the Script property
mixedCharacters.match(/\p{Script=Cyrillic}/u); // Л

// ٢ is the digit 2 in Arabic-Indic notation
// while it is predominantly written within the Arabic script
// it can also be written in the Thaana script

"٢".match(/\p{Script=Thaana}/u);
// null as Thaana is not the predominant script        super()

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]


// Trying to use ranges to avoid \w limitations:

const nonEnglishText1 = "Приключения Алисы в Стране чудес";
const regexpBMPWord1 = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText1.match(regexpBMPWord1));

// Using Unicode property escapes instead
const regexpUPE = /\p{L}+/gu;
console.table(nonEnglishText1.match(regexpUPE));