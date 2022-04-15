// instansiasi sebuah fungsi
function orang(depan, belakang) {
    this.depan = depan;
    this.belakang = belakang;
    this.sayhello = function (nama) {
        console.log(`Hello ${nama}, namaku ${depan} ${belakang}`);
    };
}

// instansiasi dengan menggunakan class dan juga konstruktor
class Mobil {
    constructor(merk, driver, waktuTersedia) {
        this.merk = merk;
        this.driver = driver;
        this.waktuTersedia = waktuTersedia;
    }
    show(platNomor) {
        console.info(`Status driver ${this.driver}, waktu tersedia ${this.waktuTersedia}, merknya ${this.merk}, platnya ${platNomor}`);
    }
}
const infomobil = new Mobil('HONDA', 'tersedia', '00.00');
infomobil.show('ABC12XZ');

// NOTESS
// ===== membuat array =====
var array3d = [
    ['TOYOTA', 'TERSEDIA', '05.00'],
    ['TOYOTA', 'TERSEDIA', '05.00'],
    ['TOYOTA', 'TERSEDIA', '05.00']
];
// ===== membuat JSON =====
let text = '{"employees":[' + '{"firstName":"John","lastName":"Doe" },' + '{"firstName":"Anna","lastName":"Smith" },' + '{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
console.info(obj.employees[1].firstName + ' ' + obj.employees[1].lastName);
