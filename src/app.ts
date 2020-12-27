import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('hi all!');
});
app.listen(port, '0.0.0.0', () => {
    return console.log(`server is listening on ${port}`);
});