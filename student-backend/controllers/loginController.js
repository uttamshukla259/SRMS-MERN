const bcrypt = require("bcrypt");
const con = require("../db"); // Import the db connection

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUserSql = "SELECT * FROM logindetails WHERE email = ?";
    con.query(checkUserSql, [email], async (err, result) => {
      if (err) {
        console.error("Error checking user:", err.message);
        return res.status(500).send("Server error");
      }

      if (result.length > 0) {
        return res.status(400).send("User already exists.");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const insertUserSql =
        "INSERT INTO logindetails (email, password) VALUES (?, ?)";
      con.query(insertUserSql, [email, hashedPassword], (err, result) => {
        if (err) {
          console.error("Error creating user:", err.message);
          return res.status(500).send("Server error");
        }
        res.status(201).send("User created successfully.");
      });
    });
  } catch (err) {
    console.error("Error during signup:", err.message);
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const sql = "SELECT * FROM logindetails WHERE email = ?";
    con.query(sql, [email], async (err, result) => {
      if (err) {
        console.error("Error retrieving user:", err.message);
        return res.status(500).send("Server error");
      }

      if (result.length === 0) {
        return res.status(400).send("User not found.");
      }

      const user = result[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).send("Invalid credentials.");
      }

      res.status(200).send("Login successful.");
    });
  } catch (err) {
    console.error("Error during login:", err.message);
    res.status(500).send("Server error");
  }
};
