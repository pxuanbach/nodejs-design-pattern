import db from './database.js';

const products = ['nodejs', 'design', 'patterns', 'third', 'edition']

async function populate() {
  db.run(`CREATE TABLE sales (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product varchar(255), 
      quantity bigint
    )`,
    (err) => {
      if (err) {
        // Table already created
        console.log(err.message)
      }
    }
  );

  const stmt = db.prepare("INSERT INTO sales(product, quantity) VALUES (?, ?)");
  for (let i = 0; i < 200000; i++) {
    stmt.run([
      products[Math.floor(Math.random() * 5)], // product
      Math.ceil(Math.random() * 100), // quantity
    ]);
  }
  stmt.finalize();

  console.log("Seeding data successfully")
}

db.serialize(() => {
  populate()
});

db.close()
