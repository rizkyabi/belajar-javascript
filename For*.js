var b = '';

for(var a = 1; a <= 5; a++) {
    for(var i = 1; i <= a; i++) {
        b += '*';
    }
    b += '\n';
}
console.log(b);



// var b = '';
// var pola = 5;

// for( var a = 1; a <= pola; a++) {
//     for( var i = pola-1; i >= a; i--) {
//         b += ' ';
//     }
//     for(var c = a; c > 0; c--){
//         b += '*';
//     }
//     b +='\n';
// }
// console.log(b);

// function segitiga1(panjang) {
//     let hasil = '';
//     for (let i = 0; i < panjang; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(segitiga1(5));



// var s = '';

// for ( var i = 5; i > 0; i-- ) {
//     for( var j = 0; j < i; j++){
//             s += '*';   
//     }
//     s +='\n';
// }
// console.log(s);

// function segitiga2(panjang) {
//     let hasil = '';
//     for (let i = 0; i < panjang; i++) {
//         for (let j = panjang; j > i; j--) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(segitiga2(5));



// function segitiga3(panjang) {
//     let hasil = '';
//     for( let a = panjang; a > 0; a-- ) {
//         for( let b = 1; b <= panjang; b++) {
//             if(b >= a) {
//                 hasil += '*';
//             } else {
//                 hasil += ' ';
//             }
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(segitiga3(5));


// function segitiga4(panjang) {
//     let hasil = '';
//     for (let i = panjang; i > 0; i--) {
//         for (let j = panjang; j > 0; j--) {
//             if (j > i) {
//                 hasil += ' ';
//             } else {
//                 hasil += '* '
//             }
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(segitiga4(10));







