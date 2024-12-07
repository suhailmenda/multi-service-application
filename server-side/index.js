const express = require('express');
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}))

app.use(express.json())

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


app.post('/api/v1/weatherData/', (req,res) => {
const city = req.body.city
const apiKey = process.env.APIKEY
  fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+city+'?unitGroup=us&key='+apiKey+'&contentType=json')
  .then(async (data) => {
    if (!data.ok) {
      return res.status(data.status).send('City Not Found or API Error');
  }
      data.json().then((data) => {
          res.json(data)
      })
      .catch((e) => {
        res.send('City Not Found', e)
      })
  
  })
  .catch((error) => {
    console.log(error) 
    res.sendStatus(404)
    res.send('City Not Found')
  })
}
)
