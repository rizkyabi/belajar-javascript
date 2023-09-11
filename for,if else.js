var jmlAngkot = 10;
var angkotBeroperasi = 5;

for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {

    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
}

// let hasil = prompt("Apakah berjalan dengan baik?");

// if (hasil == "Ya") {
//   alert("Bersyukur");
// } else {
//   alert("Coba lagi, jangan pernah menyerah!.");
// }
