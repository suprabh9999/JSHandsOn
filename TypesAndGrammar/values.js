var arr = [];
console.log(arr);// []
console.log(arr.length); // 0

arr[0] = 10;
console.log(arr.length); // 1

arr[100] = 30;
console.log(arr.length);// 101, this might be surprising but arr 

console.log(arr[90]); // undefined

arr['myname'] = 'John';
console.log(arr.length);/* 101, this won't add a new element rather it would add 'myname' as a property 
    name to arr as we know arrays are sub types of object hence, they can also have properties attached 
    with them.*/
console.log(arr.myname); // John

console.log(arr[0]);//10

console.log(delete arr[0]); // true

console.log(arr.length); //101, it will still 101 as delete keyword will delete the value and subtitute undefined.

console.log(arr[0]);// undefined

arr['101'] = 852;// It will store the value to 101 numeric index assuming that the user want to store it at 101 rather as a string index
console.log(arr.length); //102
console.log(arr[101]);



