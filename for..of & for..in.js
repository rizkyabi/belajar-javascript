    // for..of

// array
// const taruna = ['Rizky', 'Abi', 'Rendika'];

// for(let a = 0; a < taruna.length; a++) {
//     console.log(taruna[a]);
// }

// taruna.forEach(d => console.log(d));

// for (const c of taruna) {
//     console.log(c);
// }


// string
// const nama = 'Rendika';
// for(const n of nama) {
//     console.log(n);
// }


// const taruna = ['Rizky', 'Abi', 'Rendika'];
// taruna.forEach((t, i) => {
//     console.log(`${t} adalah taruna ke-${i + 1}`);
// });

// for(const  [i, t] of taruna.entries()) {
//     console.log(`${t} adalah taruna ke-${i + 1}`);
// }


// NodeList
// const liNama = document.querySelectorAll('.nama');

// // liNama.forEach(n => console.log(n. innerHTML));
// for(n of liNama) {
//     console.log(n. innerHTML);
// }


// arguments
// function jumlahAngka() {
//     // return arguments.reduce((a, i) => a + i );
//     // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }
// console.log(jumlahAngka(1,2,3,4,5));


    // for..in
const taruna = {
    nama: 'Rizky',
    umur: 20,
    hoby: 'Futsal'
}
for(a in taruna) {
    console.log(taruna[a]);
}





