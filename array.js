// var sepatu = ['ventela','getzke','compass','piero',['adidas','nike']];
// alert(sepatu[4] [1]);

    // Manipulasi Array

// 1. Menambah isi array
// var coba = [];
// coba[0] = 'Rizky';
// coba[1] = 'Abi';
// coba[2] = 'Rendika';
// coba[5] = 'ade';
// console.log(coba);

// 2. Menghapus isi array
// var coba = ['Rizky','Abi','Rendika','ade'];
// coba[3] = undefined;
// console.log(coba);

// 3. Menampilkan isi array
// var coba = ['Rizky','Abi','Rendika',]
// console.log(coba);

// for(a = 0; a < coba.length; a++) {
//     consPole.log('Taruna ke-' + (a+1) + ' : ' + coba[a] );
// }

// Method pada array 
// 1.join
// var coba = ['Rizky','Abi','Rendika'];
// console.log(coba.join());

// 2.push & pop
// var coba = ['Rizky','Abi','Rendika'];
// coba.push('ade','acil');
// coba.pop();
// console.log(coba.join());

// 3.unshift & shift
// var coba = ['Rizky','Abi','Rendika'];
// coba.unshift('ade');
// coba.shift();
// console.log(coba.join());  

// 4.splice
// splice(indexAwal, mauDihapusBerapa, alemenBaru1, elemenBaru2, ...);
// var coba = ['Rizky','Abi','Rendika'];
// coba.splice(2, 1, 'ade');
// console.log(coba.join()); 

// 5.slice
// slice(awal, akhir);
// var coba = ['Rizky','Abi','Rendika','ade','acil'];
// var coba2 = coba.slice(1, 4);
// console.log(coba2.join(' - '));
// console.log(coba.join(' - '));

// 6.forEach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Rizky','Abi','Rendika'];
// for (var a = 0; a < angka.length; a++) {
//     console.log(angka[a]);
// }

// angka.forEach(function(b) {
//     console.log(b);
// });
// nama.forEach(function(b, a) {
//     console.log('Taruna ke-' + (a+1) + ' adalah : ' + b);
// }) 

// 7.map
// var angka = [1,2,3,4,7,8,4];
// var angka2 = angka.map(function(a) {
//     return a * 2;
// });
// console.log(angka2.join(' - '));

// 8.sort
// var angka = [1,3,2,4,5,9,7,8];
// angka.sort();
// var angka = [1,2,10,20,25,3,4,7,8,4];
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join(' - ')); 

// 9.filter
// var angka = [1,2,3,4,9,23,7,8,5,6];
// var hasil = angka.filter(function(a){
//     return a < 5;
// })
// console.log(hasil.join(' - '));

// 10.find
// var angka = [1,2,3,4,9,23,7,8,5,6];
// var hasil = angka.find(function(a){
//     return a == 5;
// })
// console.log(hasil);

// 11.concat
// concat(value0,value1,value2,...)
// var angka = [1,2,3,4,];
// var angka2 = [5,6,7];
// var angka3 = [10,20,30];
// var hasil = angka.concat(angka2, angka3);
// console.log(hasil);

// 12.includes
// includes(searchElement, fromIndex);
// var nama = ['Rizky','Abi','Rendika'];
// var hasil = nama.includes('Abi');
// console.log(hasil);

// 13.copyWithin
// copyWithin(target, start, end);
// var angka = ['a','b','c','d','e'];
// var hasil = angka.copyWithin(2, 3, 4);
// console.log(hasil.join(' - '));



// var penumpang = ['Rizky', undefined, 'Rendika'];
// var tambahPenumpang = function(namaPenumpang, penumpang) {
//     if (penumpang.length == 0) {
//             penumpang.push(namaPenumpang);
//             return penumpang;
//     } else {
//         for( var a = 0; a < penumpang.length; a++) {
//             if(penumpang[a] == undefined) {
//                 penumpang[a] = namaPenumpang;
//                 return penumpang;
//             } else if (penumpang[a] == namaPenumpang) {
//                 console.log(namaPenumpang + ' sudah ada didalam angkot ');
//                 return penumpang;
//             } else if (a == penumpang.length -1) {
//                 penumpang.push(namaPenumpang);
//                 return penumpang;
//             }
//         }
//         }
//     }







