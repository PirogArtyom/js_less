// var myString = "Artyom";
// console.log(myString.toUpperCase());
// console.log(myString);

// var a = 2;
// var b = 5;
// var c = a + b;
// console.log(c);

// var a, b, c, d;
// a = b = c = d = 5;
// console.log(a);

// function calcTotalDistance(time, speedOne, speedTwo)
// {
//     var OneDistance = time * speedOne;
//     var TwoDistance = time * speedTwo;
//     var TotalDistance = OneDistance + TwoDistance;

//     return TotalDistance;
// }
//     console.log(calcTotalDistance(4,5,8));

// console.log(2 << 8);
// console.log(30000);
// console.log(-10);
// console.log(0xfffcc);
// console.log(0345);
// console.log(12.45);
// console.log(.55);
// console.log(1.34e4);

// var N = new Number(4000);
// var n = 12.55;
// // console.log(typeof N);
//
// console.log(n.toFixed(7));
// console.log(n.toExponential(4));
// console.log(n.toPrecision(9));

// var i = 10;
// console.log(++i);
// console.log(i);
// console.log(i++);

// console.log(3<5);

// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// var lines = 15;
// var line = "";
// var symbol = "-";
// var cnt = 1;
// while (cnt <= lines)
// {
//     line += symbol;
//     console.log(line);
//     cnt++;
// }

// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// Lab 2-2
// for (num = 2, exp = 9, result = 2, cnt = 1;  // A
//      cnt <= exp;                             // B
//      result *= num, cnt++) {}                // C
// console.log(result);

// for (i = 0; i < 10; i++) {
// 		if (i % 2 !== 0) {
//     console.log(i + ": не четное");
//     }
//     else if (i == 0) {
//     	// console.log(i + ": zero");
//     	continue;
//     }
// 		else {
//     console.log(i + ": четное");
//     }
// }

// Lab 2-3
// var age = 60;
// if (age <= 17) {
// 	console.log("Вам еще рано работать - учитесь");
// }
// else if (age <= 59) {
// 	console.log("Вам еще работать и работать");
// }
// else {
// 	console.log("Вам пора на пенсию");
// }

// for (i = 322; i < 366; i++) {
// 	if (i % 3 != 0)
// 		continue;
// 	console.log(i);
// 	break;
// }

// var x = 33;
// switch(x){
// 	case 0:	console.log("Zero"); break;
// 	case 1:	console.log("One"); break;
// 	case 2:	console.log("Two"); break;
// 	case 3:	console.log("Three"); break;
// 	case 4:	console.log("Four"); break;
// 	default: console.log("...");
// }

// var num = 1;
// var str = "На ветке сидит " + num + " ворон";
// var x = "";

// if (num%100<11 || num%100>14) {
// 	switch(num%100){
// 		case 1: x = "a"; break;
// 		case 2:
// 		case 3:
// 		case 4: x = "ы";
// 	}
// }
// console.log(str + x);

// function sayHello(name){
// 	name = name || "Guest";
// 	console.log("Hello, " + name + "!");
// 	}
// 	sayHello("Artyom");
// 	var n = "Mike";
// 	sayHello(n);
// 	sayHello();

// function print(data) {
// 	console.log(data);
// }

// function sum(n1, n2) {
// 	return n1 + n2;
// }
// var res = sum(2, 2);
// console.log(res);

// function sum(n1, n2) {
// 	var res = n1 + n2;
// 	 return res;
// }
//  console.log(sum(2, 2));

// function abc (num) {
//  if (num < 0)
// 	  return -num;
// 	  return num;
// 	}
//  console.log(abc(-5));
//  console.log(abc(5));

// Lab 3-1
// function power(n1, n2) {
// 	for(var result = 1, cnt = 1;
// 			cnt <= n2;
// 			result *= n1, cnt++);
// 	return result;
// }
// console.log(power(2, 10));
// console.log(power(3, 10));
// console.log(power(4, 10));

// var x = "X";
// var y = "Y";

// function outer(){
// 	var x = "x";
// 	console.log("x:  " + x); //x
// 	console.log("y:  " + y); //Y
// 	}
// outer();
// console.log("x:  " + x); //X
// console.log("y:  " + y); //Y

// var y = 0;
// function foo(x) {
// 	if(x) {
// 		// y = 1;
// 	  console.log(y);
// 	} else {
// 		var y = 2;
// 		console.log(y);
// 		}
// }
// foo(true)

// function outer() {
// 	return function inner(x) {console.log(x);}
// 	}
// 	var x = outer();
// 	x("Hello");

// function say(greet) {
// 	return function(name) {
// 		return greet + " " + name;
// 	};
// }
// var en = say ("Hello");
// console.log( en("John"));
// console.log( en("Mike"));

// var ru = say ("Privet");
// console.log( en("Vasya"));
// console.log( en("Petya"));

// Lab 3-2
// function compare(x) {
// 	return function(y) {
// 		if (y > x) {
// 			return true;
// 			}
// 		if (y < x) {
// 			return false;
// 			}
// 		else {
// 			return null;
// 			}
// 	}
// }
// var n = compare(5);
// console.log(n(1));

// var m = compare(88);
// console.log(m(888));

// power (2,3);
// function power (base, exp) {
// 	if (exp == 0) return 1;
// 	return base * power (base, exp-1);
// 	}

// function countLine(count) {
// 	if (count > 5)
// 		return;
// 	else
// 		console.log("Line: " + count++);
// 		countLine(count);
// }
// countLine(3);

// var user = {};
// user.name = "John";
// user.age = 25;
// console.log(user);
// console.log(user.name);

// var user1 = {name: "Mike", age: 23};
// user1.admin = true;
// console.log(user1);

// var user = {
// 	"x": "a",
// 	"y": "b",
// 	"z": "c",
// };
// for(var i in user)
// console.log(i +  ": "  + user[i]);
// // for(var i=0; i in user; i++)

// var book1 = {};
// book1.title = "Horor";
// book1.pubYear = 1964;
// for (i in book1)
// console.log(i + ": " + book1[i]);
// console.log("");

// var book2 = {
// 	title: "sex",
// 	pubYear: 1855,
// 	price: 50
// };
// for(var i in book2)
// console.log(i + ": " + book2[i]);

// var book1 = {
// 	title: "Техника орального секса",
// 	pubYear: 1855,
// 	price: "500 evros",
// 	show: function(word) {
// 				console.log(word + this.title + " - " + this.price + ";");
// 			}
// };
// book1.show("Продается книга: ")

// function showbook(word) {
// 		console.log(word + this.title + " - " + this.price + ";");
// }
// var book2 = {
// 	title: "Техника анального секса",
// 	pubYear: 1955,
// 	price: "50 dollars",
// 	show: showbook,
// 	};
// 	book2.show("Продается книга: ");

// var book1 = {
// 	title: "Anal sex",
// 	price: "5000 руб",
// }
// book1.x = book2.show;
// book1.x("Продается книга: ")

// var o = {
// 	param: 884,
// 	method: function() {
// 		// var self = this;
// 		function test() {
// 			console.log(this.param);
// 			}
// 			test();
// 	}
// }
// o.method();

// var user = ["a", "b", "c"];
// user[5] = "x";
// for(i in user)
// console.log(i + ": " + user[i]);

// var a = [5, 77, 888, 7];
// function mySort(a, b) {return a - b}
// a.sort(mySort);
// console.log(a);

// console.log(Math.PI);
// console.log(Math.pow(2, 10));

// var a = [5, 12];
// var b = [];
// a[99] = 7;

// for(var i in a) {
// 	Math.pow(a[i], 2);
// 	}
// 		console.log(a);
// b = a;
// console.log(b);


// var a = [5, 12, 7];
// var b = [];

// for(var i in a) {
// 	b.push(Math.pow(a[i], 2));
// }
// console.log("Массив b: " + b);


// var a = [5, 12, 7];

// for(var i in a) {
// 	a[i] = Math.pow(a[i], 2);
// }
// console.log("Массив a: " + a);

// function () {
// 	console.log.apply(console, agruments);
// 	}

// (function() {


// }) ();

// function foo() {
// var a = [];

// for(var i = 0; i < 3; i++)
// 	(function (j) {
// 	a.push( function() {console.log(j)} );
// }) (i);
// return a;
// }
//  var x = foo();
//  x[0]();
//  x[1]();
//  x[2]();

// var s = 'Мы знаем, что монохромный цвет - это градации серого';
// var txt = 'Мы';
// var sumWords = 2;
// var word = s.slice(s.indexOf(txt), s.indexOf(txt) + sumWords);

// console.log(word);

var s = 'Мы знаем, что монохромный цвет - это градации серого';

function search(txt, sumWords) {
    return word = s.slice(s.indexOf(txt), s.indexOf(txt) + sumWords);
}
console.log(Anword = search('хром', 4));




