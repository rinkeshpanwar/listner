// create a express server for serving html files
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000;
const convertor = require('./route/convertor');


// serve static files
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set express cors for all domain
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/convert", convertor);

// serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// start server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})