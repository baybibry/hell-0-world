const fs = require('fs');
fs.writeFileSync('./.env' , `API_KEY=${process.env.API_KEY}\n URL=${process.env.URL}\n REACT_APP_API_KEY=${process.env.REACT_APP_API_KEY}\n REACT_APP_URL=${process.env.REACT_APP_URL}\n`)