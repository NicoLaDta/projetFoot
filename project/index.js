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

//Update un admin
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

//Recupere tout les client
app.get('/client',(req,res) => {
    mysqlConnection.query('SELECT * FROM client',(err,rows,fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Recupere juste un client
app.get('/client/:id',(req,res) => {
    mysqlConnection.query('SELECT * FROM admin where IdClient = ?',[req.params.id],(err,rows,fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete un client
app.delete('/client/:id',(req,res) => {
    mysqlConnection.query('DELETE FROM client where IdClient = ?',[req.params.id],(err,rows,fields) => {
        if(!err)
            res.send('Delete successfully');
        else
            console.log(err);
    })
});

//Insert un client
app.post('/client',(req,res) => {
    let emp = req.body;
    var sql = "SET @IdClient = ?;SET @NomClient = ?;SET @PrenomClient = ?;SET @Email = ?; SET @TelephoneClient = ?; SET @Password = ?; \
    CALL AdminAddorEdit(@IdClient,@NomClient,@PrenomClient,@Email,@TelephoneClient,@Password);";
    mysqlConnection.query(sql,[emp.IdClient, emp.NomClient, emp.PrenomClient, emp.Email, emp.TelephoneClient, emp.Password], (err, rows, fields) => {
        if(!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                    res.send('Inserted Admin id : '+ element[0].idAdmin);
            });
        else
            console.log(err);
    })
});

//Update un client
app.put('/client',(req,res) => {
    let emp = req.body;
    var sql = "SET @IdClient = ?;SET @NomClient = ?;SET @PrenomClient = ?;SET @Email = ?; SET @TelephoneClient = ?; SET @Password = ?; \
    CALL AdminAddorEdit(@IdClient,@NomClient,@PrenomClient,@Email,@TelephoneClient,@Password);";
    mysqlConnection.query(sql,[emp.IdClient, emp.NomClient, emp.PrenomClient, emp.Email, emp.TelephoneClient, emp.Password], (err, rows, fields) => {
        if(!err)
            res.send('Update successfully')
        else
            console.log(err);
    })
});

//Recupere toute les reservation
app.get('/reservation',(req,res) => {
    mysqlConnection.query('SELECT * FROM reservation',(err,rows,fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Recupere une reservation
app.get('/reservation/:id',(req,res) => {
    mysqlConnection.query('SELECT * FROM reservation where IdReservation = ?',[req.params.id],(err,rows,fields) => {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete une reservation
app.delete('/reservation/:id',(req,res) => {
    mysqlConnection.query('DELETE FROM reservation where IdReservation = ?',[req.params.id],(err,rows,fields) => {
        if(!err)
            res.send('Delete successfully');
        else
            console.log(err);
    })
});