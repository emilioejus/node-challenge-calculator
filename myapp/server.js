let express = require('express');
let app = express();

const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
  };
  app.use(myLogger);


app.get('/add', (req, res)=> {
    let val1 = parseInt(req.query.val1);
    let val2 = parseInt(req.query.val2);
    let add = val1 + val2;
    console.log(add)
    // Se utiliza toString() para enviar el valor
    res.status(200).send(add.toString())
})
app.get('/substract', (req, res)=> {
    let val1 = parseInt(req.query.val1);
    let val2 = parseInt(req.query.val2);
    let add = val1 - val2;
    console.log(add)
    // Se utiliza toString() para enviar el valor
    res.status(200).send(add.toString())
})
app.get('/multiply', (req, res)=> {
    let val1 = parseInt(req.query.val1);
    let val2 = parseInt(req.query.val2);
    let add = val1 * val2;
    console.log(add)
    // Se utiliza toString() para enviar el valor
    res.status(200).send(add.toString())
})
app.get('/divide', (req, res)=> {
    let val1 = parseInt(req.query.val1);
    let val2 = parseInt(req.query.val2);
    let add = val1 / val2;
    console.log(add)
    // Se utiliza toString() para enviar el valor
    res.status(200).send(add.toString())
})

// cons params

app.get('/add/:val1/:val2', (req, res)=> {
    let val1 = parseInt(req.params.val1);
    let val2 = parseInt(req.params.val2);
    let add = val1 + val2;
    console.log(add)
    // Se utiliza toString() para enviar el valor
    res.status(200).send(add.toString())
})
app.get('/substract/:val1/:val2', (req, res)=> {
    let val1 = parseInt(req.params.val1);
    let val2 = parseInt(req.params.val2);
    let add = val1 - val2;
    console.log(add)
    // Se utiliza toString() para enviar el valor
    res.status(200).send(add.toString())
})
app.get('/multiply/:val1/:val2', (req, res)=> {
    let val1 = parseInt(req.params.val1);
    let val2 = parseInt(req.params.val2);
    let add = val1 * val2;
    console.log(add)
    // Se utiliza toString() para enviar el valor
    res.status(200).send(add.toString())
})
app.get('/divide/:val1/:val2', (req, res)=> {
    let val1 = parseInt(req.params.val1);
    let val2 = parseInt(req.params.val2);
    let add = val1 / val2;
    console.log(add)
    // Se utiliza toString() para enviar el valor
    res.status(200).send(add.toString())
})

let server = app.listen(3000, ()=> {
    console.log(`listen in the port ${server.address().port}  http://localhost:${server.address().port}`)
})
