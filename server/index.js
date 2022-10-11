const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "pxl_wrld",
  });


  app.post("/create", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

  
    db.query(
      "INSERT INTO pxl_user (username, password, accounttype) VALUES (?,?,'user')",
      [username, password],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });


  app.get("/inventory", (req, res) => {
    db.query("SELECT * FROM pxl_inventory", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/user", (req, res) => {
    db.query("SELECT * FROM pxl_inventory where username = ? and password = ?",username,password, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });



  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM pxl_inventory WHERE itemid = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


app.listen(3001, () => {

    console.log("Server Running on Port 3001");

});