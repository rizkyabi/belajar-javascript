// function coba(a, ...cb) {
//     // return `a = ${a}, b = ${b}, cb = ${cb}`;
//     // return cb;
//     // return Array.from(arguments);
//     return [...arguments];
// }
// console.log(coba(1,2,3,4,5));

// function jumlah(...angka) {
//     // let total = 0;
//     // for(const a of angka) {
//     //     total += a;
//     // }
//     // return total;
//     return angka.reduce((a, b) => a + b);
// }
// console.log(jumlah(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['Rizky', 'Abi', 'Rendika', 'Ade'];
// const [ketua, wakil, ...anggota]= kelompok1;
// console.log(anggota);

// object destructuring
// const teamFutsal = {
//     kiper: 'Fajar',
//     anchor: 'Tio',
//     flank1: 'Rizky',
//     flank2: 'Riyan',
//     pivot: 'Fatur'
// }
// const {flank2, ...myfutsal}= teamFutsal;
// console.log(myfutsal); 

// filtering
function filterby(type, ...values) {
    return values.filter(a => typeof a == type);
}
console.log(filterby('number', 1, 2, 'Rizky', false, 10, true, 'Abi'));









