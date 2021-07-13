const { readFile, writeFile } = require('fs')

console.log('Start task')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `This is a file create with node: ${first}, ${second}`
            ,(err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('End task')
            })
    })
})
console.log('Starting the next task')
