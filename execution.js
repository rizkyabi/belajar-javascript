// 2.1 EXECUTION CONTEXT, HOISTING, & SCOPE

// console.log(nama);
// var nama = 'Rendika';

// saat program dijalankan yang terjadi adalah ada sesuatu yang disebut dengan 
// CREATION PHASE atau fase kreasi/pembentukan phase kreasi ini terjadi di context global karena disini kita bikin nya langsung didalam file javascript nya ngga didalam function. 
// creation phase pada Global Context                                                                      yang terjadi pada phase creation ini javascript nya akan mengecek apakah ada variable atau function didalam codingan nya itu dulu yang dia cek, dia ga akan peduli kan dulu  perintah console.log ini dia akan nyari dulu misalkan kalian punya 10 baris dari 10 baris itu di cari ada keyword ngga, ada keyword function ngga itu dulu yang dicari nah kalo ada dia akan membuat,
//  nama var = undefined, jadi semua variable akan di set dulu isi nya dengan undefined, makanya kita tulis console.log nya diatas variable nya udah ada tapi isi nya undefined lalu kalo ada,
// nama function itu akan diisi function itu sendiri(nama function = fn()), jadi diisi kode function nya. ya jadi ini akan ada dua hal yang dilakukan konsep ini disebut dengan,
// hoisting = mengerek, meskipun ditulis dibawah variable dan function dia akan otomatis dinaikkan keatas jadi ini dulu yang dilakukan konesp nya namanya hoisting. itu yang terjadi pada execution context di phase creation, selain dua hal ini ada lagi yang di definisikan yang di definisikan adalah javascript mendefinisikan object,
// window sebagai global object(window = global object) dan javascript mendefinisikan,
// this sebagai window (this = window), ini yang dilakukan meskipun kalian ga nulis apapun. kalo tulis window di console.log maka akan ada object nya, kalo tulis this dia jg ada. tapi selain dari itu ngga ada, jadi ada dua object dibuat dan kalo ada veriable diisi undefined, kalo ada function diisi tulisan function nya ngga dijalanin function nya ini namanya creation phase setelah ini baru,    
// execution phase jadi mengeksekusi programnya baris perbaris dari atas ke bawah baru dijalanin console.log nama begitu dia jalanin console.log nama, didalam memori nama isinya undefined, nama diisi 'Rendika' sekarang di memori namanya Rendika tapi dia udah terlanjur di console.log jadinya undifined kecuali kita pindahin kebawah, udah diisi "Rendika"baru diconsole.log. 

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting 