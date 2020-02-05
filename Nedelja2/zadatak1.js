let matematicka_operacija = '^';
let a = 2;
let b = 3;
switch(matematicka_operacija) {
    case'+':
    console.log(a + b);
    break;
    case'-':
    console.log(a - b);
    break;
    case'*':
    console.log(a * b);
    break;
    case'/':
    console.log(a / b);
    break;
    case'%':
    console.log(a % b);
    break;
    case'^':
    console.log(Math.pow(a,b));
    break;
}