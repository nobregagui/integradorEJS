const fs = require('fs')

function logHome(req, res, next){
    fs.appendFileSync('log.txt', 'O usuário entrou na url: ' + req.url)
    next()
}

module.exports = logHome