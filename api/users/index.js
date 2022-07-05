const router = require('express').Router()
const dotenv = require('dotenv');
dotenv.config();

const UsersRepository = require('../../repositories/users/UsersRepository')


router.get('/',(req,res) => {
    res.status(200).json({ message: 'API EGSYS/Users connected' })
});

router.get('/get_all_users',async (req,res) => {
    try{
        const users_rep = new UsersRepository();
        var users = await users_rep.getAllUsers();
        res.send(users);
    }catch(ex){
        res.send(ex);
    }
});

router.post('/insert_user',async(req,res) => {
    
    try{
        const users_rep = new UsersRepository();
        var insert_resp = await users_rep.insertUser(req.body);
        res.send(insert_resp);
    }catch(ex){
        res.send(ex);
    }
});

module.exports = router;