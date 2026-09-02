const person={name:'Alice',age:30,city:'New York'};

// const {name,age,city}=person;

console.log('Name:',person.name);
console.log('Age:',person.age);
console.log('City:',person.city);


const person2={name:'Alice',info:{age:30,occupation:'Engineer' }};
console.log('Name:',person2.name);
// const {age,occupation}=person2.info;
const {name,info:{age,occupation}}=person2;
console.log('Age:',age);
console.log('Occupation:',occupation);
