import { createContext, useState } from 'react'



//create the context object 

const UserContext = createContext();


//the children are the components wrapped inside the provider class
export const UserProvider = ({ children }) => {
    //all the states management will go inside the provider ...
    const [actionText, setActionText] = useState('Create User')
    const [updateUser, setupdateUser] = useState({
        user: {},
        editable: false,
    });
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Adebayo",
            email: "adebayo@venturegardengroup.com",
            role: "user",
        },
        {
            id: 2,
            name: "Shina",
            email: "adedayo@venturegardengroup.com",
            role: "user",
        },
        {
            id: 3,
            name: "Olasunkanmi",
            email: "ola@venturegardengroup.com",
            role: "admin",
        },
    ]);



    //Add the user to User array List ...
    const addUser = (user) => {
        //generate a unique id
        const id = Math.floor(Math.random() * 1000) + 1;
        const newUser = { ...user, id };
        setUsers([...users, newUser]); //add the new user to the existing list
    };

    //delete User
    const deleteUser = (id) => {
        //filter method will return another array of users which does not include the clicked user
        setUsers(users.filter((user) => user.id !== id));
    };
    //sets the user data to be updated..
    const editUser = (user) => {
        setupdateUser({ user, editable: true });
        setActionText('Update User')
    };

    //update the user Data 
    const updateUserData = (id, updatedData) => {
        setUsers(users.map((user) => user.id === id ? 
            { ...users, ...updatedData } 
             : user))
        setupdateUser({ user: {}, editable: false }) //sets state back to empty...
        setActionText('Create User')
    }

    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )

}


export default UserContext