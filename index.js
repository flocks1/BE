require('dotenv').config();
const server = require('./server/server');


server.listen(4000, () => {
    console.log('Server listening on Port 4000');
})