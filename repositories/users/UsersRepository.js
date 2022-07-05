const Users = require('../../models/users/Users');
const BaseRepository = require('../../repositories/BaseRepository');

class UsersRepository extends BaseRepository {
	constructor(provider) {
		new Users().init();
        super(Users)
	}


    getAllUsers(){
        return new Promise((res,rej) => {
            Users.findAll().then((allUsers) => {
                res(allUsers);
            },(err) => {
                rej(err);
            })
        });
    }

    insertUser(data){
        console.log("Insert User Data",data);
        return new Promise((res,rej) => {
            Users.create(data).then((insertResp) => {
                res(insertResp);
            },(err) => {
                rej(err);
            })
        });
    }

}


module.exports = UsersRepository;