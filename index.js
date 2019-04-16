require('dotenv').config();
const server = require('./server/server');
const passportSetup = require('./api/config/passport-setup');

port = process.env.PORT || 8000


server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})