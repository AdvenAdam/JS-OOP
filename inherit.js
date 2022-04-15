// ================= INHERITANCE && OVERRIDING ===================

// kelas abstrak yang disini digunakan mendefinisikan spesifikasi apa saja yang diperlukan
class Mobil {
    constructor(merk, driver, waktuTersedia) {
        // digunakan agar class abstract tidak di instansiasi
        if (this.constructor === Mobil) {
            throw new Error(`tidak dapat melakukan instansiasi class ${this.constructor.name}`);
        }
        this.merk = merk;
        this.driver = driver;
        this.waktuTersedia = waktuTersedia;
    }
    // contoh ovveriding atau mengubah fungsi dari parent untuk dimodifikasi
    // membuat fungsi menamplkan data
    show() {
        throw new Error('ini error ya soalnya kelas abstract/superclass/parentclass');
    }
}
// kelas yang mengambil properti dari class abstract
class Barang1 extends Mobil {
    constructor(merk, driver, waktuTersedia) {
        super(merk, driver, waktuTersedia);
        this.platNomor = 'asfas';
    }
    // contoh polymorphism(overloading, overriding)
    // mengubah fungsi show dari kelas abstrak
    // membuat fungsi menamplkan data
    show(name) {
        console.info(`Status driver ${this.driver}, waktu tersedia ${this.waktuTersedia}, merknya ${this.merk}, plat nomornya ${this.platNomor} pelanggan ${name}`);
    }
}
class Barang2 extends Mobil {
    constructor(merk, driver, waktuTersedia) {
        super(merk, driver, waktuTersedia);
        this.platNomor2 = 'AD5555M';
    }
    // mengubah fungsi show dari kelas abstrak
    // membuat fungsi menamplkan data
    show() {
        console.info(`Status driver ${this.driver}, waktu tersedia ${this.waktuTersedia}, merknya ${this.merk}, plat nomornya ${this.platNomor2}`);
    }
}
// bagian instansiasi (pemanggilan)
const test = new Barang1('TOYOTA', 'TERSEDIA', '05.00');
test.show('Udin');
const test2 = new Barang2('TOYOTA', 'Tidak Tersedia', '05.00');
test2.show();
