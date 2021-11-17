const express = require('express');
const app = express();
const path = require('path');

/*
This projects use quill
doc : https://quilljs.com/docs/quickstart/
*/

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(8080, () => {
    console.log(`Server is runnig
    website on http://localhost:8080`)
})