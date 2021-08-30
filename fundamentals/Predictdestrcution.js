//problem 1
//the amount of commas will indicate the amount of skipped indexes
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
const [ ,,carcar ] = cars
//Predict the output
console.log(randomCar) //tesla
console.log(otherRandomCar) //mercedes
console.log(carcar) //honda

//problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//const { name: name } = employee;
//Predict the output
console.log(name); //wont work because it isnt declared only way for it to work if is declared liek this const{name: name} = employee
console.log(otherName);// Elon

//problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //12345 will log because its a string
console.log(hashedPassword);// undefined because it doesnt exist in the person object

//problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
//commas allow skipping that index
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //2
//Predict the output
//2 == 5
console.log(first == second); //false
//2 == 2
console.log(first == third); //true

//problem 5 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //'value'
const { secondKey } = lastTest; // [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; // 5 the amount of commas will indicate the amount of skipped indexes
//Predict the output
console.log(key); // value
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5

