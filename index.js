require('dotenv').config();
const server = require('./server/server');

port = process.env.PORT || 8000


server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})