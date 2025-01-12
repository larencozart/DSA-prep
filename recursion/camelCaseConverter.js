/*
Camel Case Converter

You have been given a JSON object that contains keys in 4 cases (camelCase, snake_case,PascalCase, kebab-case). Your task is to implement a function that will normalize all the keys to camelCase.

Write a function `normalizeKeys(jsonObject)` that takes a JSON object as input and returns a
new JSON object with all keys converted to camelCase. You can assume that the input JSON
object only contains string keys, string values, and nested JSON objects as values (no arrays or
other types).

Notes
● The function should maintain the structure of the input JSON while changing the keys.

● You can assume that the input JSON is well-formed and the keys properly follow one of
the 4 casing conventions (camelCase, snake_case, PascalCase, kebab-case).
Constraints:
The input JSON object will have at most 100 keys.
The input JSON object will be limited to a depth of 5.
The length of each key is at most 50 characters.
Don’t use regex - this makes the problem more challenging which results in better practice.

ex input:
{
  "first_name": "John",
  "last_name": "Doe",
  "contact_info": {
    "email_address": "john@example.com",
    "phone_number": "123-456-7890"
  }
}

ex: output:
{
  "firstName": "John",
  "lastName": "Doe",
  "contactInfo": {
    "emailAddress": "john@example.com",
    "phoneNumber": "123-456-7890"
  }
}
*/

// function convertKey(key) {
//   return key[0].toLowerCase() + key.slice(1)
//     .replace
// }

// function caseConvert(obj, newObj) {
//   Object.keys(obj)
//     .forEach(key => {
//       let newKey = convertKey(key);
//       newObj[newKey] = obj[key];
//       if (typeof obj[key] !== "string") {
//         newObj[newKey] = {};
//         caseConvert(obj[key], newObj[newKey]);
//       } 
//     });
// }

function caseConvert(jsonObject) {
  const object = JSON.parse(jsonObject)
  const cameledObj = {}

  Object.keys(object).forEach((key, index) => {
    let newName = key[0].toLowerCase()

    for (let i = 1; i < key.length; i++) {
      if (key[i] === '-' || key[i] === '_') {
        newName += key[i + 1].toUpperCase()
        i++
      } else {
        newName += key[i]
      }
    }

    if (typeof object[key] === 'object') {
      cameledObj[newName] = caseConvert(JSON.stringify(object[key]))
    } else {
      cameledObj[newName] = object[key]
    }
  })

  return JSON.stringify(cameledObj)
}

// caseConvert(JSON.parse({
//   "first_name": "John",
//   "last_name": "Doe",
//   "contact_info": {
//     "email_address": "john@example.com",
//     "phone_number": "123-456-7890"
//   }
// }), {});


// LAREN

// function toCamelCase(key) {
//   let camelCasedKey = "";

//   if (key.includes("-") || key.includes("_")) {
//       camelCasedKey = key.split(/[-_]/)
//                           .map((word, idx) => idx === 0 ? word : word[0].toUpperCase() + word.slice(1))
//                           .join("");
//   } else if (key[0] === key[0].toUpperCase()) {
//       camelCasedKey = key[0].toLowerCase() + key.slice(1);
//   } else {
//       camelCasedKey = key;
//   }

//   return camelCasedKey;
// }

// function normalizeKeysHelper(object) {
//   for (let key in object) {
//       let value = object[key];
//       delete object[key];
//       if (typeof value === "string") {
//           object[toCamelCase(key)] = value;
//       }
      
//       if (typeof value !== "string") {
//           object[toCamelCase(key)] = normalizeKeysHelper(value);
//       }
//   }

//   return object;
// }

// function normalizeKeys(json) {
//   let obj = JSON.parse(json);

//   obj = normalizeKeysHelper(obj);

//   return JSON.stringify(obj);
// }





let p = console.log;

p(caseConvert(JSON.stringify({
  "first_name": "John",
  "last_name": "Doe",
  "contact_info": {
    "email_address": "john@example.com",
    "phone_number": "123-456-7890"
  }
}))); // test snake_case

p(caseConvert(JSON.stringify({
  "first-name": "John",
  "last-name": "Doe",
  "contact-info": {
    "email-address": "john@example.com",
    "phone-number": "123-456-7890"
  }
}))); // test kebab-case

p(caseConvert(JSON.stringify({
  "firstName": "John",
  "lastName": "Doe",
  "contactInfo": {
    "emailAddress": "john@example.com",
    "phoneNumber": "123-456-7890"
  }
}))); // test: if already camelCase, leave as is

p(caseConvert(JSON.stringify({
  "FirstName": "John",
  "LastName": "Doe",
  "ContactInfo": {
    "EmailAddress": "john@example.com",
    "PhoneNumber": "123-456-7890"
  },
  "DeeplyNested" : {
    "FirstObj" : {
      "SecondObj" : {
        "ThirdObj" : "done"
      }
    }
  }
}))); // test PascalCase & a deeply nested obj


// MASON FIXED
function normalizeKeys(jsonObject, jsonOutput = true) {
  const object = typeof jsonObject === 'string' ? JSON.parse(jsonObject) : jsonObject
  const cameledObj = {}

  Object.keys(object).forEach(key => {
    let newName = key[0].toLowerCase()

    for (let i = 1; i < key.length; i++) {
      if (key[i] === '-' || key[i] === '_') {
        newName += key[i + 1].toUpperCase()
        i++
      } else {
        newName += key[i]
      }
    }

    if (typeof object[key] === 'object') {
      cameledObj[newName] = normalizeKeys(JSON.stringify(object[key]), false)
    } else {
      cameledObj[newName] = object[key]
    }
  })

  return jsonOutput ? JSON.stringify(cameledObj) : cameledObj
}

// Scott's pyramid
/*
                          //obj 

//key string to camel case          // is the value an object
                              //convert string key      value an object?

*/