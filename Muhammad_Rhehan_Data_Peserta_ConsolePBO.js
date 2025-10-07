class Siswa{
    constructor(nama, umur, nilai) {
        this.nama = nama;
        this.umur = umur;
        this._nilai = nilai;
    }
    // getter
    get nilai() {
        return this._nilai
    }
    // setter
    set nilai(x) {
        if (x < 0 || x > 100 ) {
            console.log('angka harus berupa 0 - 100');
        } else {
            this._nilai = x;
        }
    }

    grade() {
        if(this.nilai >= 90 && this.nilai <= 100) {
            console.log('nilai A');
        }
        else if(this.nilai >= 80) {
            console.log('nilai B');
        }
        else if(this.nilai >= 70) {
            console.log('nilai C');
        } 
        else if(this.nilai >= 60) {
            console.log('nilai D');
        }
        else {
            console.log('tidak lulus');
        } 
    }
    
}

class Web extends Siswa {
    constructor(nama, umur, nilai, jurusan) {
        super(nama, umur, nilai);
        this.jurusan = jurusan;
    }
    // method
    webSay() {
        console.log(`jurusan: ${this.jurusan}`)
    }
}

class Design extends Siswa {
    constructor(nama, umur, nilai, jurusan) {
        super(nama, umur, nilai);
        this.jurusan = jurusan;
    }
    // method
    designSay() {
        console.log(`nama: ${this.nama}  umur: ${this.umur}  nilai: ${this.nilai}  jurusan: ${this.jurusan}`)
    }
}

// instantiate web
let web1 = new Web('Rhehan', 18, 80, 'IT' );
// web1.webSay();

// instantiate design
let design1 = new Design('Rio', 21, 89, 'UI/UX' );
// design1.designSay();

var peserta = new Siswa('Rhehan', 18, 80)
console.log('nama: ' + peserta.nama);
console.log(`umur: ${peserta.umur}`);
web1.webSay(); // class web
console.log('nilai:', peserta.nilai);
peserta.grade();

console.log();

var peserta = new Siswa('Rio', 21, 89)
console.log('nama: ' + peserta.nama);
console.log(`umur: ${peserta.umur}`);
design1.designSay(); // class design
console.log('nilai:', peserta.nilai);
peserta.grade();

console.log();
console.log("Nilai baru");
peserta.nilai = 1100;