
const bodyParser = require('body-parser')
module.exports = function(app) {
    app.post(
        '/promocoes', 
        [ 
            bodyParser.urlencoded()
        ],
        (request, response, next) => {
            

            const sockets = app.get('sockets')

            sockets.emit('promocao', request.body.msg)
            response.redirect('/produtos')
        }
    )
}