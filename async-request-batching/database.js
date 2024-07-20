import sqlite from 'sqlite3';

const sqlite3 = sqlite.verbose();
const DBSOURCE = "db.sqlite";

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

export default db;
