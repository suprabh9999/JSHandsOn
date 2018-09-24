var a;
console.log(typeof a); //undefined
console.log(typeof b); // b is not declared hence it will give undefined

a = "Somevalue";
console.log(typeof a); //string

a = 10;
console.log(typeof a); //number

a = undefined;
console.log(typeof a); //undefined

a = null;
console.log(typeof a); //object, this is a special case.

a = Symbol();
console.log(typeof a); //symbol

a = function(){};
console.log(typeof a); // function

a = {};
console.log(typeof a); //object

console.log(typeof b);// undefined


if(typeof b !=='undefined'){ // safety check to prevent the code break if b is not declared
    console.log('...');
}


console.log(typeof typeof undefined);// string (typeof 'undefined')

a=10;
console.log(a.b);// undefined

// console.log(a.b.c);//This will break the code as you are trying to access c of undefined.

console.log(typeof typeof typeof typeof null); //string

console.log(typeof typeof typeof typeof typeof typeof n); //string

a = true;
console.log(typeof a); //boolean

a = [];

console.log(typeof a); //object





