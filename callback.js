    // Synchronous Callback
// // function halo(nama) {
// //     alert(`Halo, ${nama}`);
// // }
// function tampilkan(pesan) {
//     const nama = prompt('Masukan Nama : ');
//     pesan(nama);
// }
// // tampilkan(halo);
// tampilkan(nama => {
//     alert(`Halo, ${nama}`);
// });


// Asynchronous Callback
function getDataTaruna(url, success, error) {
    let trn = new XMLHttpRequest();

    trn.onreadystatechange = function () {
        if (trn.readyState === 4) {
            if(trn.status === 200) {
                success(trn.response);
            } else if(trn.status === 404) {
                error();
            }
        }
    }
    trn.open('get', url);
    trn.send();
} 

 













