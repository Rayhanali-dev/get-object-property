// Practice Problem map, filter, find

const oddNumber = [1, 3, 5, 7, 9];

const sum = oddNumber.map(number => number + 1);
console.log(sum);

const number = [33, 50, 79, 78, 90, 101, 30];
const disabledNumber = number.filter(number => number % 10 === 0);
console.log(disabledNumber);

const numbers = [33, 50, 79, 78, 90, 101, 30];
const findNumber = numbers.find(number => number % 10 === 0);
console.log(findNumber);

// Practice Problem reduce()
// const reduceNumber = [1, 9, 17, 22];
// const addNumber = reduceNumber.reduce((previous, current) => previous + current, 0);
// console.log(addNumber);

// Practice Problem reduce2()

const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22},
]

const ages = people.reduce((previous, current) => previous + current.age, 0);
console.log(ages);


// Practice Problem: Access Object
const student = {
    name: 'Fredie',
    age: 26
}

const age = student['age']
console.log(age);

// Practice Problem: Access Object values

let data = {
    location: [
        {
            latitude: '34.5 , 37.8',
            longitude: '98.77 , 58.7',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
}

const city = data.location[0].city;
console.log(city);

const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}

const email = user.email;
console.log(email);
const address = user.address;
console.log(address);
const citys = user.address.city;
console.log(citys);
const lat = user.address.geo.lat;
console.log(lat);
const companyName = user.company.name;
console.log(companyName);