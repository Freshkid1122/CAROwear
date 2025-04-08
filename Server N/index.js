const express = require ('express');
const app = express();
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 2000;
dotenv.config();
app.use (express.json());
app.use (bodyparser.urlencoded({extended: true}));
app.use(cors());
// const URI = process.env.uri || undefined;


let allfood = [
    {
        id: 1,
        name: 'Burger',
        price: 200,

    },
    {
        id: 2,
        name: 'Pizza',
        price: 300,

    },
    {
        id: 3,
        name: 'Pasta',
        price: 400,

    },
    {
        id: 4,
        name: 'Pasta',
        price: 400,

    }
]

app.get('/test', (req, res) => {
    res.send(allfood);
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})