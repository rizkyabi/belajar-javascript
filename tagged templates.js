// Tagged Templates Literals
// const nama = 'Rendika';
// const umur = 20;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values [i] || ''}`
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');

// }
// const str = coba`Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Rendika';
const umur = 20;
const hoby = 'Sepak Bola';

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');

}
const str = highlight`Halo, nama saya ${nama}, umur saya ${umur} tahun, dan saya Hoby ${hoby}.`;
// console.log(str);

document.body.innerHTML = str;