// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0) {
            alert('angkot masih kosong!');
            return false; 
        }

        for(var a = 0; a < this.penumpang.length; a++) {
            if( this.penumpang[a] == namaPenumpang) {
                this.penumpang[a] = undefined;
                this.kas += bayar;
                return this.penumpang; 
            }
        }
    }
}

var angkot1 = new Angkot('Rizky',['mundu', 'pasar pagi'], [], 0);
var angkot2 = new Angkot('ade', ['cipto', 'mundu'], [], 0);