const express = require('express');

const app = express();

//Post
//app.get('/', (req, res) => {
//    res.status(200)
//    .json({Message : 'Hello I am Wawan', app: 'wawandb' });
//});

//app.post('/', (req, res) => {
//    res.send('You can post this endpoint...')
//});

const trial = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/trial-simple.json`)
);

app.get('/api/v1/trial', (req,res) => {
    res.status(200).json({
        status: 'success',
        data: {
            trial
        }
    })
})

const port = 3000; 
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});
