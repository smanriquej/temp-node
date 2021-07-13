//CommonJS, every file is odule (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const utils = require('./5-utils')
const alternative = require('./6-alternative-flavor')
require('./7-mind-grenade')


console.log(alternative)

utils(names.santi)
utils(names.secret)