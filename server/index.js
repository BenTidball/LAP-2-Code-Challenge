const app = require('./server');

//launch server on docker environment port or 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});