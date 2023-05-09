import log, { appName, dummyFunction, weatherTag, genericFunction, Person, CustomMath, User } from './tools.js'

//log(weatherTag`The temperature is ${25} degrees centigrade. The day is `);

//log(genericFunction());

let person1 = new Person("Pius", "Onobhayedo", "Male", 1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
person1.firstName = "peter";
person2.firstName = "maria";
/*
log(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is ${person2.getFirstName()} whose height is ${person2.height}`);

log(CustomMath.sqrt(100));

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am sending a <em>reject</em> instead of a <em>resolve</em>!")
    }, 1000)
}).then((data) => {
    log(`${data}`);
}).catch((error) => {
    log(`Error message received: ${error}`);
})

let user1 = new User("cruz", "mypassword", "Miracle", "Nnadiukwu", "Male", undefined);
log(`The username of ${user1.firstName} is ${user1.username}`)
*/

let url = 'https://jsonplaceholder.typicode.com/users/3';
fetch(url) 
 .then(response => response.json())
 .then(data => log(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email},
                    Extra details: Longitude = ${data.address.geo.lng}, Latitude = ${data.address.geo.lat}`))
 .catch(error => log(`Error: ${error}`)); 