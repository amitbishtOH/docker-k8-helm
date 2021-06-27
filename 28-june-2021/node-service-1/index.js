const express = require('express');

const app = express();

const port = 3000;

app.get('/data', (req, res) => {
    res.json({number: 1});
});

app.listen(port, () => console.log(`node-service-1 app listening on port ${port}!`))