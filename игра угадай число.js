 'use strict';



 // console.log(leftBorderWidth);
 // var leftBorderWidth = 1;
 // var string = "Hello";

 // let second = 2;
 // const pi = 3.14;

 // console.log(3 / 0);
 // console.log(string * 3);

 // let computer = {
 //     motherboard: "asus",
 //     CPU: "AMD",
 //     isAudio: true
 // };
 // // console.log(computer["motherboard"]);
 // let arr = ['ps.png','Aleks.jpg','Kirill.bmp'];
 // console.log(arr[0]);
 // //alert("Hello World");

 // // let answer = confirm("Are you ready?");
 // // console.log(answer);


 // let answer = prompt("Are you eighteen?", "Yes");
 // console.log(answer);

 //  console.log(typeof(String(null)));
 // console.log(typeof( ""+5));
 //let ans = prompt("Hello?", '');
 // let switcher = null;
 // if (switcher) {
 //     console.log("Working...");
 // }
 // switcher = 1;
 // if (switcher) {
 //     console.log("Working...");
 // }


 // console.log(5%4);
 // console.log(1===2);


 // let isChecked = true,
 //     isClose = false;

 //     console.log(isChecked && isClose);
 // let k = 50;
 // let a = 100;
 // if ( k>50) {
 //     console.log("Wrong");
 // }
 // else if (a>100) {
 //     console.log("Too more");
 // }
 // else {
 //     console.log("Right");
 // };

 // (k==50) ? console.log(k) : console.log("Wrong");

 //Игра угадай число


 let i = (Math.floor(Math.random() * 101));
 let k = +prompt("Угадай число", " ");
 switch (true) {
     case k < i:
         alert("Слишком мало");
         break;
     case k > i:
         alert("Слишком много");
         break;
     case i:
         alert("Верно!");
         break;
     default:
         alert("Что-то пошло не так");
         break;
 }
// let num=50;
// while (num<55) {
//     console.log(num);
//     num++;
    
// }
// let a = [1, 2, 3], b = [1, 2, 3];
// console.log( 0 || "" || 2 || undefined || true || falsе );
// // let y = 1; let x = y = 2; alert(x)
// alert( +"Infinity" );