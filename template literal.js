// `string text`    

// `string text baris 1
//  string text baris 2    
//  string text abris 3`   //multi-line string

//  `string text ${expression} string text`    //embedded expression
 
//  tag`string text ${expression} string text` //tagged template

    // Template Literals / Template String
// const nama = 'Rendika';
// const umur = 20;
// console.log(`Halo, nama saya ${nama}, umur saya ${umur} tahun.`);
// console.log('Halo, nama saya ' + nama + ', umur saya ' + umur + ' tahun.');

    // Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 13;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

    // HTML Fragments
// const taruna = {
//     nama : 'Rendika',
//     umur : 20,
//     hoby : 'Futsal',
//     posisi : 'Flank'
// };

// const el = `<div class="taruna">
//     <h2>${taruna.nama}</h2>
//     <span class="hoby">Ekstrakulikuler : ${taruna.hoby}</span>
// </div>`;
// document.body.innerHTML = el;

// menggunakan Looping
// const taruna = [
//     {
//         nama: 'Rendika',
//         hoby: 'Futsal'
//     },    
//     {
//         nama: 'Rizky',
//         hoby: 'Sepak Bola'
//     },    
//     {
//         nama: 'Abi',
//         hoby: 'Gamers'
//     }
// ];

// const el = `<div class="taruna">
//     ${taruna.map(a => `<ul>
//       <li>${a.nama}</li>
//       <li>${a.hoby}</li>
//     </ul>`).join('')}
// </div>`;


// Conditionals
// ternary
// const sepakBola = {
//     klub: 'persis suci',
//     pemain: 'Rendika',
//     feat: 'silo'
// }
// const el = `<div class="sepakBola">
//     <ul>
//         <li>${sepakBola.pemain}</li>
//         <li>${sepakBola.klub} ${sepakBola.feat ? `(feat. ${sepakBola.feat})` : ''}</li>
//     </ul>
// </div>`;
// document.body.innerHTML = el;


// Nested
// HTML Fragments Bersarang
const taruna = {
    nama: 'Rendika',
    semester: 3,
    mataPelajaran: ['simulasi digital', 'pemograman dasar', 'desain grafis', 'matematika']
};

function cetakMatapelajaran(mataPelajaran) {
    return `
        <ol>
            ${mataPelajaran.map(mp => `<li>${mp}</li>`).join('')}        
        </ol>
    `;
}

const el = `<div class="taruna">
    <h2>${taruna.nama}</h2>
    <span class="semester">Semester : ${taruna.semester}</span>
    <h4>Mata Pelajaran :</h4>
    ${cetakMatapelajaran(taruna.mataPelajaran)} 
</div>`;



document.body.innerHTML = el;

