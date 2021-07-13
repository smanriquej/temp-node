//Var Globas - NO WINDOW!

//__dirname  - Path to current directory
//__filename - File name
//require    - Function to use modules (CommonJS)
//module     - Info about current module (file)
//procces    - Info about env where the program is being executed

console.log(__filename);

setInterval(() => {
    console.log('Hola');
}, 3000);