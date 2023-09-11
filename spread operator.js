// Memecah iterables menjadi single element

// const nama = ['Rizky', 'Abi', 'Rendika'];
// console.log(...nama[0]);

// Menggabungkan 2 array
// const taruna = ['Rizky', 'Abi', 'Rendika'];
// const ekstrakulikuler = ['futsal', 'volly', 'basket'];
// const namaEskul = [...taruna, 'Ade', ...ekstrakulikuler];
// // const namaEskul = taruna.concat(ekstrakulikuler);
// console.log(namaEskul);

// Meng-copy array
// const taruna = ['Rizky', 'Abi', 'Rendika'];
// // const taruna2 = taruna;
// const taruna2 = [...taruna];
// taruna2[0] = 'Ade';
// console.log(taruna2);

// const liTaruna = document.querySelectorAll('li');
// // const taruna = [];
// // for (let a = 0; a < liTaruna.length; a++) {
// //     taruna.push(liTaruna[a].textContent);
// // }
// // console.log(taruna);

// const taruna = [...liTaruna].map(b => b.textContent);
// console.log(taruna);

const nama = document.querySelector('.nama');
const hasil = [...nama.textContent].map(a => `<span>${a}</span>`).join('');
nama.innerHTML = hasil;








