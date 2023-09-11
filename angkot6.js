var jmlAngkot = 10;
var angkotBeroperasi = 6;

// cara 1
for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log(' Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else if( noAngkot == 8 || noAngkot == 10 || noAngkot == 5 ) {
        console.log(' Angkot No. ' + noAngkot + ' sedang lembur.');
    } else {
        console.log(' Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }

}


// cara 2
var angkotlembur = [7, 8];

// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log(' Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     } else if( angkotlembur.includes(noAngkot) ) {
//         console.log(' Angkot No. ' + noAngkot + ' sedang lembur.');
//     } else {
//         console.log(' Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//     }
// }
