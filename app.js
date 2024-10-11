
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("<h1>Hello World!<h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    console.log(`Local site: http://localhost:${port}`);
});