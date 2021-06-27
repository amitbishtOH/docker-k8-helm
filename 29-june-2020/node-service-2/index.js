const express = require('express');
const fs = require('fs');

const app = express();

const port = 3000;

app.post('/data', async (req, res) => {
    if(!fs.existsSync('./DB/db.json')) {
        fs.writeFile('./DB/db.json', JSON.stringify({"number":0}), 'utf8', () => {});
    } 

    
    data = await jsonReader("./DB/db.json");

    data.number++;

    await jsonWriter("./DB/db.json",data);

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

function jsonWriter(filePath,data) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(filePath, JSON.stringify(data), err => {
            if (err) {
                reject(err);
            }
            try {
                resolve(true);
            } catch (err) {
                reject(err);
            }
          });
    });
}


app.listen(port, () => console.log(`node-service-2 app listening on port ${port}!`))