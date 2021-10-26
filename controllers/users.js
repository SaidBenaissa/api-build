export const createUser =  (req, res) => {
    const user= req.body;
    users.push({...user, id: uuidv4()});
    res.send(`User with the the name ${user.firstName} has been added to the database.`);
}