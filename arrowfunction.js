    // function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Rendika'));


// const tampilNama = (nama) => { return `Halo, ${nama}`; }
// console.log(tampilNama('Rendika'));


// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Rizky','Siang'));

    
    // implisit return
// const tampilNama = nama =>  `Halo, ${nama}`; 
// console.log(tampilNama('Rendika'));


// const tampilNama = () => `Selamat Datng`;
// console.log(tampilNama());


// let taruna = ['Rendika', 'Abi ade', 'Rizky ramadhan'];

// let jumlahHrf = taruna.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHrf);

// let jumlahHrf = taruna.map ( nama => nama.length );
// console.log(jumlahHrf); 

    // dalam bentuk object
// let jumlahHrf = taruna.map ( nama => ({ nama, jumlahHrf: nama.length }));
// console.table(jumlahHrf);


    // konsep this pada Arrow Function

// Constructor function
// const Taruna = function() {
//     this.nama = 'Rizky';
//     this.umur = 20;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama} dan saya umur ${this.umur} tahun.` );
//     }
// }

// const rizky = new Taruna();


// Arrow Function
// const Taruna = function() {
//     this.nama = 'Rizky';
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama} dan saya umur ${this.umur} tahun.` );
//     }
// }

// const rizky = new Taruna();


// Object literal
// const taruna1 = {
//     nama : 'Rendika',
//     umur : 20,
//     sayHello: () => {
//         // console.log(`Halo, nama saya ${this.nama} dan saya umur ${this.umur} tahun.` ); 
//     console.log(this);
//     }
// }


// const Taruna = function() {
//     this.nama = 'Rizky';
//     this.umur = 20;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama} dan saya umur ${this.umur} tahun.` );
//     }

//     setInterval( () => {
//         console.log(this.umur++); 
//     }, 1000)

// }

// const rizky = new Taruna();


// const box = document.querySelector('.box');
// box.addEventListener('click', function () {
//     let satu = 'size';
//     let dua = 'caption';

//     if(this.classList.contains(satu)) {
//         [satu, dua] = [dua, satu];
//     }

//     this.classList.toggle(satu);
//     setTimeout(() => {
//         this.classList.toggle(dua);
//     }, 600);

// });
