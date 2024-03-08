class Car {
  constructor(name) {
    this.name = name;
  }

  tampil() {
    return this.name
  }
}

class Sport extends Car {
  tujuan() {
    return `Mobil ${this.name} untuk pribadi`
  }
}

const bmw = new Sport("BMW");
document.querySelector("h1").innerText = bmw.tampil()
console.log(bmw.tampil())
console.log(bmw.tujuan())
