// STRINGS IN JAVASCRIPT:
// Strings are collection of charaters, in javascript we have a primitive datatype "string".We can store set of characters in variables in javascript using this primitive datatype "string"

// We can use '',"" or ``(also called template literals) to define strings in javascript
// let name = "Pruthvi";
// let name2 = 'Vishva';
// console.log(name);
// console.log(name[3]);
// name2[0] = 's';// this is not possible as strings are immutable in javascript
// console.log(name2);
// console.log(name+" "+name2);

// '' and "" work same but template literals (``) work a bit different.We can directly put values of varibles in strings using template literals.
// String interpolition: String interpolition means to inject values directly in strings.
// const person = {
//     name: "Siddhant",
//     age: 13,
//     hobby: "Coding",
//     goal: "to become the CEO of several multi billion dollar companies"
// };
// const statement = `My name is ${person.name}.I am ${person.age} years old, I love ${person.hobby} and my dreame is ${person.goal}`;

// console.log(statement);

// string methods: Javascript provides some string methods to work with strings
const str = "Pruthvi";
const str2 = "  is a good boy   ";
const str3 = "Siddhant";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.slice(3));
// console.log(str.slice(3,5));
// console.log(str.concat(str2));
// console.log(str2.trim());// removes all white
console.log(str.includes("P"));
console.log(str.replace("P", "S"));
console.log(str3.indexOf("d"));
console.log(str3.lastIndexOf("d"));

        // Note: any string method doesn't changes actual string it just returns new string.