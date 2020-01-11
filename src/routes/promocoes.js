const bodyParser = require('body-parser')

module.exports = function(app) {
    app.post('/promocoes', [ bodyParser.urlencoded({ extended: false }) ], function(req, resp) {
        const io = app.get('io')
        io.emit('novaPromocao', req.body.msg)
        resp.redirect('/produtos')
    })
    
    // app.get('/abreSocketSocketIO', function(req, response){ 
    //     response(????)
    // })
}
