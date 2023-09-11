    // membuat object
// var taruna ={
//     nama : 'Rizky Abi Rendika',
//     umur : 20,
//     hobi : ['futsal','sepak bola'],
//     jurusan : 'Teknik komputer dan Jaringan',
//     alamat : {
//         jalan : 'jl. kalijaga suci',
//         kota : 'Cirebon',
//         provinsi : 'Jawa Barat'
//     }
// };

    

// 1.     object Literal
// PROBLEM : tidak efektif untuk project yang banyak
// var taruna1 = {
//     nama : 'Rizky Abi Rendika',
//     kelas : "TKJ 2",
//     sekolah : 'SMKN 1 Mundu',
// }

// var obj = {no : 4, nama :'Rizky'};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
    // this mengembalikan object yang bersangkutan

// let Taruna = {
//     nama : 'Rizky',
//     energi : 13,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let Taruna2 = {
//     nama : 'Abi',
//     energi : 18,
//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }
    
    

//  2.   Function Declaration
// function buatObjectTaruna(nama, kelas, sekolah) {
//     var taruna = {};
//     taruna.nama = nama;
//     taruna.kelas = kelas;
//     taruna.sekolah = sekolah;
//     return taruna;
// }
// var taruna3 = buatObjectTaruna('Rendika','xii','SMKN 1 cirebon');
// var taruna4 = buatObjectTaruna('Ade','xii','SMA 1 sumber');

// function halo() {
//     console.log(this);
//     console.log('selamat datang');           
// }    
// this.halo();
    // this mengembalikan object global
    


// const methodTaruna = {
//     makan : function(porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//     },
    
//     main : function(jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur : function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }


// }

// function Taruna(nama, energi) {
//     let taruna = {};
//     // let taruna = Object.create(methodTaruna);
//     taruna.nama = nama;
//     taruna.energi = energi;
//     // taruna.makan = methodTaruna.makan;    
//     // taruna.main = methodTaruna.main;
//     // taruna.tidur = methodTaruna.tidur;
//     taruna.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
        
//     taruna.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
    
//     return taruna;
// }
// let Rendika = Taruna('Rendika', 12);
// let Rizky = Taruna('Rizky', 21);

    
    
    // 3.    Constructor Function
// function Taruna(nama, kelas, sekolah) {
//     this.nama = nama;
//     this.kelas = kelas;
//     this.sekolah = sekolah;
// }
// var taruna5 = new Taruna('wahyu','xi','SMK Islamic center'); 

// function Halo() {
//     console.log(this);
//     console.log('apa kabar')
// }

// var obj1 = new Halo();
// var obj2 = new Halo();
    // mengembalikan object yang baru dibuat

// function Taruna(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
    
//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// }
// let Rendika = new Taruna('Rendika', 10);



    // Prototype
// function Taruna(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }
// Taruna.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }
// Taruna.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }
// Taruna.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let rendika = new Taruna('Rendika', 15);


    // versi Class
class Taruna {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
    }
    main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
    }
    tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
    }
}

let rizky = new Taruna('Riky', 12);
let abi = new Taruna('Abi', 21);












