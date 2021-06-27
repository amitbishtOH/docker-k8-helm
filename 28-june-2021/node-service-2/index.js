const express = require('express');

const app = express();

const port = 3000;

app.post('/data', (req, res) => {
    res.json({success: true});
});

app.listen(port, () => console.log(`node-service-2 app listening on port ${port}!`))