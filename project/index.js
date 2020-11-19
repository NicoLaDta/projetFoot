const mysql = require('mysql')
const express = require('express')
var app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'footDb',
    port:'3306',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err)
        console.log('DB connection succeded');
    else
        console.log('DB connection failed \n Error : '+JSON.stringify(err,undefined,2));
});

app.listen(3000,()=>console.log('Express server run at port nb : 3000'));

//Recupere tout les admins
app.get('/admin',(req,res) => {
    mysqlConnection.query('SELECT * FROM admin',(err,rows,fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Recupere juste un admin
app.get('/admin/:id',(req,res) => {
    mysqlConnection.query('SELECT * FROM admin where IdAdmin = ?',[req.params.id],(err,rows,fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete un admin
app.delete('/admin/:id',(req,res) => {
    mysqlConnection.query('DELETE FROM admin where IdAdmin = ?',[req.params.id],(err,rows,fields) => {
        if(!err)
            res.send('Delete successfully');
        else
            console.log(err);
    })
});

//Insert un admin
app.post('/admin',(req,res) => {
    let emp = req.body;
    var sql = "SET @IdAdmin = ?;SET @Name = ?;SET @CodeAdmin = ?;SET @Salary = ?; \
    CALL AdminAddorEdit(@IdAdmin,@Name,@CodeAdmin,@Salary);";
    mysqlConnection.query(sql,[emp.IdAdmin, emp.Name, emp.CodeAdmin, emp.Salary], (err, rows, fields) => {
        if(!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                    res.send('Inserted Admin id : '+ element[0].idAdmin);
            });
        else
            console.log(err);
    })
});

//Insert un admin
app.put('/admin',(req,res) => {
    let emp = req.body;
    var sql = "SET @IdAdmin = ?;SET @Name = ?;SET @CodeAdmin = ?;SET @Salary = ?; \
    CALL AdminAddorEdit(@IdAdmin,@Name,@CodeAdmin,@Salary);";
    mysqlConnection.query(sql,[emp.IdAdmin, emp.Name, emp.CodeAdmin, emp.Salary], (err, rows, fields) => {
        if(!err)
            res.send('Update successfully')
        else
            console.log(err);
    })
});