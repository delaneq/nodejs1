const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Server work');
});



const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});