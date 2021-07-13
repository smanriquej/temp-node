const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.end('This is a Page')
    }else if(req.url === '/about'){
        res.end('This is an About Page')
    }else{
        res.end(`<h1>This page not found</h1>
                 <a href = '/'>Back home</a>`)
    }
})

server.listen(8000)