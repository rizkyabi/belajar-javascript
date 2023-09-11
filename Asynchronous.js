function kalikan(a, b) {
    return a * b;
}
function hitungLuas(sisi) {
    return kalikan(sisi, sisi);
}
function cetakLuasKotak(sisi) {
    const luas = hitungLuas(sisi);
    console.log(luas);
}
cetakLuasKotak(5);