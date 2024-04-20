// JSON

// JSON, short for JavaScript Object Notation

// is a lightweight data interchange format commonly used for transmitting data between a server and a web application, as well as for storing data


// {
//     "name": "John Doe",
//     "age": 30,
//     "isStudent": false,
//     "skills": ["programming", "writing", "problem-solving"],
//     "address": {
//         "city": "New York",
//         "country": "USA"
//     },
//     "isEmployed": null
// }

// It's a text-based format that is easy for humans to read and write, and easy for machines to parse and generate.



// Data Structure: JSON represents data as key-value pairs. Each pair consists of a key (a string) followed by a colon and then a value. The key-value pairs are separated by commas, and the whole structure is enclosed in curly braces {}.


// Data Types: JSON supports the following data types:

// String: A sequence of characters enclosed in double quotes.

// Number: An integer or floating-point number.

// Boolean: Either true or false.

// Array: An ordered list of values enclosed in square brackets []. Values can be of any JSON data type, including other arrays or objects.

// Object: A collection of key-value pairs enclosed in curly braces {}. Keys must be strings, and values can be any JSON data type, including other arrays or objects.

// Null: Represents an empty value.



// Usage 

// Data Interchange: JSON is widely used for transmitting data between a server and a web application in AJAX requests and responses.

// Configuration Files: Many applications use JSON for configuration files due to its simplicity and readability.

// Data Storage: JSON is often used for storing semi-structured data in databases or flat files.




// How JSON Works with JavaScript


// Now , the major application of this JSON format is to pass data from one System to another , As Most of the internet's data transmission protocols, like HTTP, are text-based. They are designed to transmit data as text rather than in proprietary formats (objects or arrays). JSON, being a text-based format, fits seamlessly into this architecture.



var toys = {
  toy1: {name: "Teddy Bear", color: "Brown"},
  toy2: {name: "Race Car", color: "Red"},
  toy3: {name: "Doll", color: "Pink"}
};

// Now Here this is in  Javascript object Format and in this format data cannot be sent over the internet as this is not universally understood by the data transfer protocols like http 

// Pack our toys into a box (convert our toys object into a JSON string)

var toysJSONString = JSON.stringify(toys);

console.log(toysJSONString);


// Here We have converted the javascript object into JSON string now this is understood by the protocolos




// Now, let's say this JSON string is sent over the internet.
// On the other side, we receive this packed box of toys as a JSON string.




// Now as we are recieving a JSON string , so while writing javascript code we will not be able to apply object properties in a JSON string , so now to convert the string again to object we will parse it



// Unpack our toys from the box (parse the JSON string back into a JavaScript object)


var unpackedToys = JSON.parse(toysJSONString);
console.log("Unpacked Toys:",unpackedToys);



console.log("Lets play with the ",unpackedToys.toy1.name);


// 4. Why Use JSON?



// JSON is popular for several reasons:

// It is text, and can be read and written by humans.
// It is easy for machines to parse and generate.
// It is fully compatible with JavaScript and many other languages, making it a good choice for data interchange on the web.


// In summary, JSON is a universally accepted format for structuring data, making it an essential part of modern web development. Its simplicity, ease of use, and compatibility with many programming languages have made it a preferred choice for data interchange on the internet.

