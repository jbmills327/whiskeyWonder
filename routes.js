var express = require('express'),
    fuck = require('./controllers/controller');


module.exports = (app) => {
    app.get('/api/getWhiskey', fuck.get);
    app.post('/api/createWhiskey', fuck.create);
    app.put('/api/editWhiskey', fuck.edit);

}
