
// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const app = express();

// // const port = 8000

// // app.use(bodyParser.json());

// // let users = []

// // // path = GET /test
// // app.get('/test', (req, res) => {
// //     let user ={
// //         name: 'John Doe',
// //         age: 30,
// //         email: 'john.doe@example.com'
// //     }
// //     res.json(user);
// // });

// // // path = POST /user
// // app.post('/user', (req, res) => {
// //     let user = req.body; 
// //     users.push(user);
// //     res.json({
// //         message: 'User added successfully',
// //         user: user
// //     });
// // });


// // app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`)
// // });
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// const port = 8000

// app.use(bodyParser.json());

// let users = []

// // path = GET /test
// app.get('/test', (req, res) => {
//     let user ={
//         name: 'John Doe',
//         age: 30,
//         email: 'john.doe@example.com'
//     }
//     res.json(user);
// });
// app.get('/users', (req, res) => {
//     res.json(users);
// });
// // path = POST /user
// app.post('/user', (req, res) => {
//     let user = req.body; 
//     users.push(user);
//     res.json({
//         message: 'User added successfully',
//         user: user
//     });
// });


// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// });
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000

app.use(bodyParser.json());

let users = []
let counter = 1;

// path = GET /test
app.get('/test', (req, res) => {
    let user ={
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    }
    res.json(user);
});
app.get('/users', (req, res) => {
    res.json(users);
});
// path = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter +=1; 
    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user
    });
});

// path = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser =req.body;
    //หา  user จาก id ที่ส่งมา
    let seletedIndex = users.findIndex(user => user.id == id);


    //อัพเดตข้อมูล user
   if (updateUser.name){
        users[seletedIndex].name = updateUser.name;
   }
   if (updateUser.email){
    users[seletedIndex].email = updateUser.email;
   }


    //เอาข้อมูลที่ update ส่ง response กลับไป
    res.json({
        message:'Userupdate successfully',
        data:{
            users:updateUser,
            indexUpdate: seletedIndex
        }
    })


});
app.delete('/user/:id',(req , res) => {
    let id = req.params.id;

    let seletedIndex = users.findIndex(user => user.id == id);
    users.splice(seletedIndex,1);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});