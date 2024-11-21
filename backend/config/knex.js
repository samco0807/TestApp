// backend/src/db/knex.js
// const knex = require("knex");
import knex from "knex";
// const dotenv = require("dotenv");
import dotenv from "dotenv";
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

// module.exports = db;
export default db
