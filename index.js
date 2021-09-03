const exp = require("express");
const app = exp();

app.listen(3000, function() {
    console.log("Start Server.");
})

const mysql = require('mysql');

app.get("/Get", function(req, res, nex) {

        if (nex) throw nex;

        const user = req.query.user;
        const password = req.query.password;
        const database = req.query.database;
        const sql = req.query.sql;

        // db接続
        let con = mysql.createConnection({
            host: 'db',
            user: user,
            password: password,
            port: 3306,
            database: database
        });
        // 接続チェック
        con.connect((err) => {
            if (err) throw err;
        });
        // ＳＱＬ送信
        con.query(sql, function(err, r) {
            if (err) throw err;
            response(res, "OK", r);
        })
    })
    // レスポンスをjsonで受け取る
function response(res, result, data) {
    let resJson = { status: result, data: data }
    res.json(resJson);
}