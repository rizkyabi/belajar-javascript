// const angka =[-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
//      // for
// const newAngka = [];
// for( let a = 0; a < angka.length; a++ ) {
//     if( angka[a] >= 3) {
//         newAngka.push(angka[a]);
//     }
// }
// console.log(newAngka);


//     // Filter
// const newAngka = angka.filter( i => i >= 3 );
// console.log(newAngka);

// const newAngka = angka.filter ( function (i) {
//     return i >= 3;
// });
// console.log(newAngka);


//     // Map
// kalikan semua angka dengan 2
// const newAngka = angka.map ( a => a * 2 );
// console.log(newAngka);

// const newAngka = angka.map ( function (a) {
//     return a * 2;
// });
// console.log(newAngka.join(' - '));


//     // Reduce
// // jumlahkan semua elemen pada array
// // 0 + -1, 8, 9, 1, 4, -5, -4, 3, 2, 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);


// Method Chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const angka =[-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const hasil = angka.filter(a => a > 5) // 8,9,9
    .map(a => a * 3) // 24,27,27
    // .map(a => a / 2)
    .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);



