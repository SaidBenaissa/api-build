import express, { application } from 'express';
import {v4 as uuidv4} from 'uuid';
import { createUser } from '../controllers/users';

uuidv4(); // unique identifier uuid

const router = express.Router();

let users = [
    // {
    //     firstName: "Said",
    //     lastName: "BENAISSA",
    //     nationality: "Morocco",
    //     age: 40
    // },
    // {
    //     firstName: "Hicham",
    //     lastName: "BENAISSA",
    //     nationality: "Morocco",
    //     age: 41,

    // }
];

// All routes in here are relative to /users
router.get('/',  (req, res) => {
    res.send(users);
});

// Send data to the server

router.post('/', createUser);

router.get('/:id', (req, res) => {
    const {id}= req.params;
    const foundUser = users.find(user => user.id === id);
    res.send(foundUser)

});

router.delete('/:id', (req, res) => {
    const {id}= req.params;

    users.filter((user) => user.id !== id);

    res.send(`User with the the name ${id} has been deleted.`);

});

router.patch('/:id', (req, res) => {
    const {id}= req.params;

    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName){
        user.firstName = firstName;
    }
    if(lastName) {
        user.lastName = lastName;
    }
    if(age){
        user.age = age;
    }

    res.send(`User with ID ${id} has been updated !`);
});


export default router;
