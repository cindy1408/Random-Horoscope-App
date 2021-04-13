const path = require('path')
const express = require('express');
const app = express();
//const http = require('http')
const port = 5000;

//const server = http.createServer(app);
//set static folder 
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.send('result')
// })

app.listen(port, () => {
    console.log(`I'm listening to port: ${port}`)
});
