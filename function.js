// function jumlahVolumeDuaKubus(a, b){
//     return a*a*a + b*b*b;
// }
// alert(jumlahVolumeDuaKubus(3, 5));

// function jumlahVolumeDuaKubus( a, b) {
//     var total, volumeA, volumeB;

//     volumeA = a**3
//     volumeB = b**3
//     total = volumeA + volumeB;

//     return total;
// }
// console.log(jumlahVolumeDuaKubus(8, 3));
// alert( VolumeDuaKubus( 25, 15 ));
// ################################################################################

// function VolumeDuaKubus( c, d ) {
//     var total;
//     var volumeC;
//     var volumeD;

//     volumeC = c*c*c;
//     volumeD = d*d*d;
//     total = volumeC + volumeD;

//     return total;
// }
// var hasil = VolumeDuaKubus(20,15);
// alert(hasil);
// console.log(hasil);
// ################################################################################

// function tambah(a,b){
//     return a + b;
// }

// var a = parseInt( prompt ('Masukkan nilai 1:'));
// var b = parseInt( prompt ('Masukkan nila 2:'));
// var hasil = tambah (a,b);
// alert(hasil);
// ################################################################################

// function tambah(a,b) {
//     return a + b;
// }

// function kali(a,b) {
//     return a * b;
// }
// var hasil = kali(tambah(2,3), tambah(4,5));
// console.log(hasil);
// ################################################################################

// function tambah() {
//     var hasil = 0;
//     for(var i = 0; i < arguments.length; i++) {
//         hasil += arguments[i]; 
//     }
//     return hasil;
// }
// var coba = tambah(2,3,4,5,5,1);
// alert(coba);
// ################################################################################
   
    // Rekursif (sebuah fungsi yang memanggil dirinya sendiri)
            //  -semua looping bisa dibuat rekursif, tapi tidak sebaliknya.
// function tampilAngka(a) {
//     console.log(a);
//     return tampilAngka(a-1);
// }
// tampilAngka(10);

     // Base Case (kondisi akhir dari rekursif yang menghasilkan nilai)
// function cetakAngka(a) {
//     if( a == 0 ) {
//         return;
//     }
//     cetakAngka(a-1);
//     console.log(a);
// }
// cetakAngka(10); 

     // Function Declaration
// function tampilPesan(nama) {
//      alert('halo' + nama);
// }
// tampilPesan(' Rizky');

     // Function Expression
// var tampilPesan = function (nama) {
//      alert('halo' + nama);
// }
// tampilPesan(' Rizky');