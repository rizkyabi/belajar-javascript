// var antrian = ['Rizky', 'Abi', undefined];
// var tambahAntrian = function(namaAntrian, antrian) {
//     if(antrian.length == 0) {
//         antrian.push(namaAntrian);
//         return antrian;
//     } else {
//         for(var a = 0; a < antrian.length; a++) {
//         if(antrian[a] == undefined) {
//             antrian[a] = namaAntrian;
//             return antrian;
//         } else if(antrian[a] == namaAntrian) {
//             console.log(namaAntrian + ' sudah ada di antrian ');
//             return antrian;
//         } else if(a == antrian.length -1) {
//             antrian.push(namaAntrian);
//             return antrian;
//         }
//     }            
//     }

// }

var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
            penumpang.push(namaPenumpang);
            return penumpang;
    } else {
        for( var a = 0; a < penumpang.length; a++) {
            if(penumpang[a] == undefined) {
                penumpang[a] = namaPenumpang;
                return penumpang;
            } else if (penumpang[a] == namaPenumpang) {
                console.log(namaPenumpang + ' sudah ada didalam angkot ');
                return penumpang;
            } else if (a == penumpang.length -1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
        }
    }


var hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length == 0) {
        console.log(' angkot masih kosong. ');
    } else {
        for(var a = 0; a < penumpang.length; a++) {
            if(penumpang[a] == namaPenumpang) {
                penumpang[a] = undefined;
                return penumpang;
            } else if(a == penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada di dalam angkot. ');
                return penumpang;
            }
        }
    }

    return penumpang;
}
