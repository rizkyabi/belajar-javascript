// Destructuring Variable / Assignment

    // // Destructuring Array
// const mapel = ['seni budaya', 'matematika', 'bahasa indonesia', 'simulasi digitlal'];
// // console.log(mapel[3]);

// // const [a, b, c, d] = mapel;

    // // skpping items
// const [a, , , d] = mapel;
// console.log(a);

    // swap items
// let a = 'Abi';
// let b = 'Rizky';
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

    // return value pada function
// function coba() {
//     return ['Rendika', 'Abi'];
// }
// const [a, b] = coba();
// console.log(b);

    // // Rest parameter
// // const [a, b, c] = [1,2,3,4,5];
// const [a, ...sisa] = [1,2,3,4,5];
// // console.log(a);
// console.log(sisa);

    // Destructuring Object 
// const taruna = {
//     nama: 'Rendika',
//     hoby: 'futsal'
// }
// const {nama, hoby} = taruna;
// console.log(hoby);

    // Assignment tanpa deklarasi object
// ({nama, hoby} = { nama: 'Rendika', hoby: 'futsal' });
// console.log(nama);

    // Assign ke variabel baru
// const taruna = {
//     nama: 'Rendika',
//     hoby: 'futsal'
// }
// const {nama: a, hoby: b} = taruna;
// console.log(b);

    // Memberikan Default Value
// const taruna = {
//     nama: 'Rendika',
//     hoby: 'futsal',
//     kelas: 3
// }
// const {nama, hoby, kelas = 'dua@default'} = taruna;
// console.log(kelas);

    // Memberi nilai default + assign ke variabel baru
// const taruna = {
//     nama: 'Rendika',
//     hoby: 'futsal',
//     kelas: 3
// }
// const {nama: a, hoby: b, kelas: c = 'dua@default'} = taruna;
// console.log(a);

    // Rest parameter
// const taruna = {
//     nama: 'Rendika',
//     hoby: 'futsal',
//     kelas: 3
// }
// const {nama, ...value} = taruna;
// console.log(value);   

    // Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const taruna = {
//     nama: 'Rendika',
//     hoby: 'futsal',
//     kelas: 3,
//     mapel: 123
// }
// function contoh({ nama, hoby }) {
//     return hoby;
// }
// console.log(contoh(taruna));


    // Destructuring Function
// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }
// const jumlah = penjumlahanPerkalian(2, 3) [0];
// const kali = penjumlahanPerkalian(2, 3) [1];
// console.log(kali);
// console.log(jumlah);

// function kalkulasi(a, b) {
//     return [a + b, a * b, a - b, a / b];
// } 
// const [tambah, kali, kurang, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }
// const {bagi, kali, kurang, tambah} = kalkulasi(2, 3);
// console.log(tambah);


    // Destructuring function arguments
const taruna = {
    nama: 'Rendika',
    kelas: '12 TKJ',
    jurusan: 'Futsal',
    nilai: {
        tugas: 80,
        uas: 82,
        uts: 90
    }
}
// function hasil(coba) {
//     return `Halo, nama saya ${coba.nama}, kelas ${coba.kelas}.`;
// }
// console.log(hasil(taruna));

function hasil({nama, kelas, nilai: {tugas, uas, uts}}) {
    return `Halo, nama saya ${nama}, kelas ${kelas}, dan nilai uts saya adalah ${uts}.`;
}
console.log(hasil(taruna));
