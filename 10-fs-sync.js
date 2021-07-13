const { readFileSync, writeFileSync } = require('fs')
console.log('Start task')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt',
    `This is a file create with node: ${first}, ${second}`
    ,{flag: 'a'}  
)
console.log('End task')
console.log('Starting the next task')