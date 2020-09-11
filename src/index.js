const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT =3333;
app.use(cors());
app.use(express.json());
app.use(routes);


// 404 - notfound
app.use((req, res, next) => {
   const error = new Error('Not found')
   error.status = 404
   next(error)
})

app.use((error, req, res, next) => {
   res.status(error.status || 500)
   res.json({ error: error.message})
})

app.listen(PORT,function(){
   console.log("localhost:",PORT);
});