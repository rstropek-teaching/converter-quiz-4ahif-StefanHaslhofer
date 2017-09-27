var convert = require('convert-units');
if(process.argv[4]!=='to'||isNaN(process.argv[2])){
    process.stdout.write("Invalid parameters\n");
}else{
    try {
        process.stdout.write(process.argv[2]+' '+process.argv[3]+' are '+convert(process.argv[2]).from(process.argv[3]).to(process.argv[5])+' '+process.argv[5]+'\n');
    }catch(err){
        process.stdout.write("Invalid parameters\n");
    }
}