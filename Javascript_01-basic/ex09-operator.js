// 연산자(실습편의상 let 대신 var를 사용)

// .(접근), ()(호출,그룹), [](참조) 연산자
var str = 'hello';
console.log(str.charAt(1)); // e

var ls = [1, 2, 3];
console.log(ls[1]); // 2

console.log(1 + 2 * 3); // 7
console.log((1 + 2) * 3); // 9

// 증감 연산자( ++, -- ) 
var a = 10;
var b = ++a; // 전위
var c = a++; // 후위

console.log(a, b, c); //12 11 11

//산술 연산자( + - * / % )
console.log(10 + 1); // 11
console.log(10 - 1); // 9
console.log(10 * 2); // 20
console.log(10 / 3); // 3.3333
console.log(10 % 3); // 1

// 비교(관계) 연산자 ( > >= < <= )
console.log(10 > 1); // true
console.log(10 >= 1); // true
console.log(10 < 1); // false
console.log(10 <= 1); // false

// 비교 연산자( ==, !=, ===, !== )
var a = 1;
var b = 2;
console.log(a == b);  // false
console.log(a != b); // true

var c = 3;
var d = "3";
console.log(c == d); // true
console.log(c === d); // type 까지 확인 // false

//논리 연산( && || ! )
var o1 = true && true; 
var o2 = true && false;
var o3 = true || false;
var o4 = 3 == 3 && 4 == 4;

console.log(o1); // true
console.log(o2); // false
console.log(o3); // true
console.log(o4); // true

console.log(true && "hello"); // hello
console.log(true || "welcome"); // true
console.log(false || "welcome"); // welcome

console.log(!true); //false
console.log(!undefined); //true
console.log(!null); //true
console.log(!0);    //true
console.log(!'hello'); //false

//다음 예시의 출력 결과 이해하기(실습)
var a = 5, b = 6, c = 10, d = 0;
var bo = false;
d = ++a * b--;
console.log(a, b, d); //-----------------(1) 6 5 36
d = a++ + ++c - b--;
console.log(a, b, c, d); //--------------(2) 7 4 11 12
a = 1;
b = 0;
bo = a++ > 0 || 1 < ++b * d-- / ++c;
console.log(a, b, c, d, bo); //----------(3) 2 0 11 12 true
bo = b++ > 0 && 1 < ++a / ++c * d++;
console.log(a, b, c, d, bo); //----------(4) 2 1 11 12 false

// 삼항 연산자( ? :)
let n = 5;
console.log(n < 4 ? "참" : "거짓");
console.log(n > 4 ? "참" : "거짓");

// 할당 연산자( = )
var a = 1;
var b = a;
a = 10;
b = 20;
console.log(a, b); // 10 20

// 복합 대입 연산자 ( [연산자]= )
var a = 10;
var b = 20;
a += b; //a = a + b 의미
a -= 3;
a *= 2;
a /= 3;
console.log(a); // 18




