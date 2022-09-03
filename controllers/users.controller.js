let users = require('../public/user.json')

//get Random user
module.exports.getRandomUser = (req,res)=>{
    let randomUser = users[Math.floor(Math.random() * users.length)];
    res.send(randomUser)
}

// get users
module.exports.getAllUser = (req,res)=>{
        const limit = req.query.limit        
        if(limit){
            const user = users.slice(0,Number(limit))        
            res.send(user)
        }else{
            res.send(users)  
        }
  
}

// user Post

module.exports.userASave = (req,res)=>{
    const user = req.body
    if (user) {
        users.push(user)
        res.send(users)
    }else{
        res.send('User req undefine value provide!!')
    }
}

// user single patch
module.exports.userUpdate=(req,res)=>{
    const {id} = req.body    
     const filter = users.filter(user =>user.id == id)
     if(!filter[0]){
        res.status(404).send('User is not Found')
     }else{ 
        const user = users.find(user => user.id === Number(id))
        user.name = req.body?.name || user.name
        user.address = req.body?.address || user.address
        user.contact = req.body?.contact || user.contact
        user.gender = req.body?.gender ||  user.gender
        user.photourl = req.body?.photourl || user.photourl
        res.send(user)
        }
}
// arry object data update
module.exports.userMultipleDataUpdate = (req,res)=>{
    const user = req.body
    for (let i = 0; i < user.length; i++) {
        for (let y = 0; y < users.length; y++) {
            const element = users[y];
            if(element.id == user[i].id){
                element.name = user[i]?.name || element.name
                element.address = user[i]?.address || element.address
                element.contact = user[i]?.contact || element.contact
                element.gender = user[i]?.gender || element.gender
                element.photourl = user[i]?.photourl || element.photourl
                
            }
        }
    }
    const userId = user.map(i => {
        const userId = i.id
        return userId
    })
    let userUpdate = users.filter(function(user) {
        return userId.includes(user.id); 
      });
    res.send(userUpdate)
}

// delete user
module.exports.deleteUser = (req,res)=>{
    const {id} = req.body
   if (id) {
    users = users.filter(user => user.id !== Number(id))
    res.send(users)
   }else{
    res.status(400).send('Req your body Delete Id Provide')
   }
}