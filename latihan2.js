var tanya = true;
while( tanya ) {
    var p = prompt('pilih : kertas, batu, gunting');
    
    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'kertas';
    } else if ( comp >= 0.34 && comp < 0.64) {
        comp = 'batu';
    } else {
        comp = 'gunting';
    }

    var hasil = '';
    if( p == comp ) {
        hasil = 'SERI!';
    } else if( p == 'kertas' ) {
        hasil = ( comp == 'gunting' ) ? 'KALAH!': 'MENANG!';
    } else if ( p ==" gunting" ) {
        hasil = ( comp == 'kertas') ? 'MENANG!': 'KALAH!';
    } else if( p == 'batu' ) {
        hasil = ( comp == 'gunting') ? 'MENANG!': 'KALAH!';
    } else {
        hasil = 'memasukkan pilihan yang salah!!';
    }

    alert(' kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);
    
    tanya = confirm('lagi?');

}

alert('terimakasih sudah bermain.')