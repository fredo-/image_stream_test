
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const app = express();

app.use(express.static('public'))

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', (req, res) => {

    let filePath = path.join(__dirname, '/public/index.html');
    return res.sendFile(filePath);
});

app.get('/image', (req, res) => {
    const imagePath = path.join(__dirname, '/img2.png');
    const readStream = fs.createReadStream(imagePath);

    readStream.on('error', (error) => {
        console.error('Error reading image: ', error);
    });

    readStream.pipe(res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    console.log(`Local site: http://localhost:${port}`);
});