var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());

app.get('/', function(req, res, next){
  const param = req.query;
    const a = parseInt(param.a) ? parseInt(param.a) : 0;
    const b = parseInt(param.b) ? parseInt(param.b) : 0;
    const result = a + b;
    res.send(`${result}`);
});

app.listen(3000, function(){
  console.log('CORS-enabled web server listening on port 3000');
});