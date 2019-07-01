// Difference between Local and Global Scope
// Declaring Variables: 
// var -- not recommended. Makes variable totally global
// let -- recommended for all variables. Makes variable applicable in scope it was declared
let iAmGlobal = 'Global Value';
if (true) {
    let iAmLocal = 'Local Value';
    console.log ("Inside Block Local Value: " + iAmLocal);
    console.log ("Inside Block Global Value: " + iAmGlobal);
}
console.log ("Outside Block Local Value: " + iAmLocal); // this will throw an error
console.log ("Outside Block Global Value: " + iAmGlobal);
