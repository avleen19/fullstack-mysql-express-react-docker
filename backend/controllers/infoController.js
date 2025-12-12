const db = require("../db");

async function getAllInfo(req, res) {
  try {
    const [rows] = await db.query("SELECT * FROM info");
    res.json(rows);
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ error: err.message });
  }
}

async function createInfo(req, res) {
  try {
    const { msg } = req.body;

    await db.query("INSERT INTO info (msg) VALUES (?)", [msg]);

    res.json({ message: "Inserted successfully" });
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAllInfo, createInfo };
