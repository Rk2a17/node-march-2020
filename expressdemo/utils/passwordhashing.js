const bcrypt = require('bcrypt');
const passwordHashing = {
    salt : 10,
    doHash(plainPassword){
        var promise = bcrypt.hash(plainPassword,this.salt);
        return promise
        // let hashPwd = bcrypt.hashSync(plainPassword,this.salt);
        // return hashPwd;
    },
    compareHash(plainPwd, dbHashpwd){
        var promise = bcrypt.compare(plainPwd,dbHashpwd);
        return promise;
    //    return bcrypt.compareSync(plainPwd, dbHashpwd)
    }
}

module.exports = passwordHashing;
var promise = passwordHashing.doHash('amit');
promise.then(hashpwd =>{
    console.log('hashpwd', hashpwd);
    var pr = passwordHashing.compareHash('amit',hashpwd)
    pr.then(result=>{
        console.log(result?'same pwd':'not same pwd');
    }).catch(e=>{
        console.log('error is',e);
    })
}).catch(err=>{
    console.log('hash err',err)
})
/* testing code

const dbhash = passwordHashing.doHash('rohit');
// const hash2 = passwordHashing.doHash('rohit');

console.log('hash is',dbhash);
if(passwordHashing.compareHash('rohit',dbhash)){
    console.log('same');

}else{
    console.log('not same')
}
// console.log('hash2 is',hash2);

*/