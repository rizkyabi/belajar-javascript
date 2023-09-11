// var ulang = true;
// while(ulang) {
//     var giliran = 3;
//     var c = Math.floor(Math.random()* 10) + 1;
//     var hasil = '';

//     while( giliran >= 1 ) {
//         alert(' memulai permainan dengan ' + giliran + ' kesempatan');
//         var p = parseInt( prompt('tebak angka 1-10'));
//         if( p == c ) {
//             hasil = 'BENAR';
//             alert('anda ' + hasil + ' angka yang di tebak adalah ' + c);
//             break;
//         } else if( p < c ) {
//             hasil = 'RENDAH';
//             giliran -= 1;
//             alert('terlalu ' + hasil + '\ntersisa ' + giliran + ' kesempatan.');
//         } else if( p > c ) {
//             hasil = 'TINGGI';
//             giliran -= 1;
//             alert('terlalu ' + hasil + '\ntersisa ' + giliran + ' kesempatan lagi.');
//         }

//         if(giliran == 0) {
//             alert('anda GAGAl \nangka yang dicari adalah ' + c);
//         }
//     }
//     ulang = confirm('lagi?');
// }
// alert('terimakasih');

// var ulang = true;

// while(ulang) {
//     var random = Math.floor(Math.random()* 10)+ 1;
//     var tanya = prompt('pilihlah angka antara 1-10! \n(anda memiliki 3 kali kesempatan)');
//     var hasil = '';

//     for(var giliran = 3; giliran >= 1; giliran--) {
//         if( tanya == random ) {
//             hasil = 'BENAR';
//             alert('angka tebakan anda ' + hasil );
//             break;
//         } else if( tanya != random && giliran > 1) {
//             hasil = ( tanya < random ) ? 'terlalu RENDAH': 'terlalu TINGGI';
//             tanya = prompt('angka tebakan anda ' + hasil + '\ncoba tebak lagi');
//         } else if( tanya != random && giliran == 1) {
//             hasil = 'SALAH';
//             alert('angka tebakan anda ' + hasil + '\nkesempatan anda sudah habis');
//         }
//     }
//     ulang = confirm('apakah anda ingin main lagi?');
// }
// alert('terimakasih sudah bermain');


let ulang = true;
while(ulang) {
alert('bermain tebak angka');
let giliran = 3;
while( giliran >= 1 ) {
    let p = prompt('masukan angka mulai dari 1-10');
    let bot = Math.floor(Math.random()* 10) + 1;

    if( p == bot ) {
        alert ('tebakan anda benar');
        break;
    } else {
        alert('tebakan anda salah');
    }
    giliran--;
}
ulang = confirm('lagi?');

}
alert('terimakasih sudah bermain');





