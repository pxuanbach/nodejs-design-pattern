import db from './database.js';

export async function totalQuantity(product) {
  const now = Date.now();
  let sql = `SELECT product, quantity
            FROM sales
            WHERE product=?`;
  let total = 0;

  return new Promise(function (resolve, reject) {
    db.all(sql, [product], (err, rows) => {
      if (err)
        return reject();

      rows.forEach((row) => {
        total += row.quantity;
      })
      console.log(`totalQuantity() took: ${Date.now() - now}ms`);
      resolve(total);
    })
  })
}
