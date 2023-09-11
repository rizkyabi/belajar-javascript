// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah evnet yang asynchronous di masa yang akan datang.
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected /pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

    // contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati');
//     } else {
//         reject('Ingkar janji..');
//     }
// });
// janji1
//  .then(response => console.log('OK! : ' + response ))
//  .catch(response => console.log('NOT OK! : ' + response));

    // contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });
// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//  .finally(() => console.log('selesai menunggu!'))
//  .then(response => console.log('OK! : ' + response ))
//  .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai');

    // Promise.all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Football',
            sutradara: 'Rendika',
            pemeran: 'Rizky, Abi'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Cirebon',
            temp: 28,
            kondisi: 'Cerah berawan'
        }])
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
//  .then(response => console.log(response));
 .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
 });



