const express = require('express');
const fs = require('fs');

const app = express();

const port = 3000;

app.get('/data', async (req, res) => {
    if(!fs.existsSync('./DB/db.json')) {
        fs.writeFile('./DB/db.json', JSON.stringify({"number":0}), 'utf8', () => {});
    } 

    data = await jsonReader("./DB/db.json")
    res.json(data.number);
});

function jsonReader(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, (err, fileData) => {
            if (err) {
                reject(err);
            }
            try {
                const object = JSON.parse(fileData);
                resolve(object);
            } catch (err) {
                reject(err);
            }
        });
    });
}

app.listen(port, () => console.log(`node-service-1 app listening on port ${port}!`))