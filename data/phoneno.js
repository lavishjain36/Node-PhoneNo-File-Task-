const fs=require('fs');
let phoneno=()=>{
    let numbers = [];
    for(let i=1; i<=10000; i++) {
        let number = '9844';
        let randomNumber = Math.floor(Math.random() * 1000000);
        number = number + randomNumber;
        if (number.length === 10) {
            numbers.push(number);
        }
    }
    storeData('phone.txt',`${numbers}`);

}

//Here we will write a data to the file 
let storeData=(fileName,data)=>{
    data=`${data}\n`;
    fs.appendFile(fileName,data,'utf-8',(err)=>{
        if(err) throw err;
        console.log('Data is stored');
    });
}


module.exports={
    phoneno,
};
