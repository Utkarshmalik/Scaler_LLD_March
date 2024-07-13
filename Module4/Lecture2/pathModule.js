
const path = require("path");

const filePath  = "/Users/utmalik/Scaler_LLD_March/Module4/Lecture2/example.txt";

const baseName = path.basename(filePath);

// const dirName = path.dirname(filePath);
// console.log(baseName);
// const baseNameWithoutExt  = path.basename(filePath, '.txt');
// console.log(baseNameWithoutExt);

// `path.join([...paths])`: Joins all given path segments together using the platform-specific separator.
// const directory = '/home/user';
// const subDirectory = 'docs';
// const fileName = 'file.txt';

// const fullPath  = path.join(directory, subDirectory, fileName);
// console.log(fullPath);

// `path.resolve([...paths])`: Resolves a sequence of paths or path segments into an absolute path.

// const fullPath = path.resolve('docs','file.txt');
// console.log(fullPath);




const arr1=[1,2,3,4,5];

const newArr =[8,9,0,...arr1];

console.log(newArr);