// const hero = {
//   title: "Vexana",
//   type: "Mage",
//   damage: 60,
// }

// const {damager = 10, title, type, } = hero;

// console.log(`title: ${title}`);
// console.log(`type: ${type}`);
// console.log(`damage: ${damager}`);

const penjualan = {
  faktur: "FKT001",
  customer: {
    name: "Andika",
    phone: "0898162726256"
  },
}

const posting = {
  judul: "Lorem ipsum",
  konten: "lorem ipsum konten blog post",
  tags: ["#coding", "#js", "#FE"]
}

const {faktur, customer: {name, phone}} = penjualan;
// const { name, phone } = customer;
console.log(`Faktur ${faktur}`);
// console.log(`Customer ${name}`)
console.log(`Customer Name ${name}`)
console.log(`Customer Phone ${phone}`)

const {tags: [tag1, tag2]} = posting

console.log(tag1)
console.log(tag2)