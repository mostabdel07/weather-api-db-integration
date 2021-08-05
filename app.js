require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();

mongoose.connect(process.env.DATABASE_URL), { useNewUrlParser: true };
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'af54222a038bf33ff8ad9b74fe016a32';
const city = 'Barcelona';

app.get('/', (req, res)=>{
    axios.get(`${baseUrl}q=${city}&appid=${apiKey}`)
      .then(response =>{
        // handle 
        res.send(response.data)
      })
      .catch(error => {
        res.send(error)
      })
})

app.listen(3000), () => console.log('Server started');