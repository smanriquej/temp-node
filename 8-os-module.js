const os = require('os')

// info about current user
const user = os.userInfo()

// method returns the system uptime in seconds
const systemUpTime = os.uptime();

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    user: user,
    upTimeSeconds: systemUpTime
}

console.log(currentOS);