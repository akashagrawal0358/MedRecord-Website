const express = require('express') ;
const app = express();
const cors = require("cors");

app.use(cors());

require("./db/conn");
app.use(express.json());
app.use(require('./router/auth'));


const port = process.env.PORT || 5000  ;
app.get('/' , (req,res)=>{
    res.send('Hellloooo.....')
});

/*
//  Define a route to receive data from React


*/

app.listen(port , ()=>{
    console.log(`Server is running on Port ${port}`);
})
