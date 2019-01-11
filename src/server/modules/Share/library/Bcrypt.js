const bcrypt = require('bcrypt');

class Bcrypt {

    constructor() {
        this.saltRounds = 10;
    }

    hash(data){
        return new Promise((resolve, reject) => {
            bcrypt.hash(data, this.saltRounds, (err, hashed)=> {
                err ? reject(err) : resolve(hashed)
            })
        })
    }

    compare(data, hash) {
        return new Promise((resolve, reject)=> {
            bcrypt.compare(data, hash, (err, same)=>{
                err ? reject(err) : resolve(same)
            })
        })
    }

    static getBcrypt(){
        return new Bcrypt();
    }
}

module.exports = Bcrypt.getBcrypt();