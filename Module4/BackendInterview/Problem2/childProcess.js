
const {exec, execFile, spawn, fork}  =require("child_process");
const { stdout, stderr } = require("process");

// Exec
// Runs a shell command and returns the output after the task is done.

// execFile

exec('ls -lh',(err,stdout,stderr)=>{

    if(err){
        console.log(`exec error:${error}`);
    }

   console.log(`stdout: ${stdout}`);

})

// console.log("hello");


// Launches a new process and streams the output and error streams.

// spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
// ["https://www.youtube.com/"]);





function backupDB(dbName , backupPath){

 const command = `mongodump --db ${dbName} --out ${backupPath}`;

 exec(command, (err,stdout,stderr)=>{

    if(err){
        console.log(`exec error:${error}`);
    }

   console.log(`stdout: ${stdout}`);

})

}

backupDB("myDatabase","/path/to/backup/folder")