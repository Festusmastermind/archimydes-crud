import { useState } from "react";
import Users from "./components/Users";

function App() {
    const [actionText, setActionText] = useState("Create User");
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

    //Add the user to User array List ..
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
        setActionText("Update User");
    };

    //update the user Data
    const updateUserData = (id, updatedData) => {
        setUsers(
            users.map((user) =>
                user.id === id ? { ...users, ...updatedData } : user
            )
        );
        setupdateUser({ user: {}, editable: false }); //sets state back to empty...
        setActionText("Create User");
    };
    return (
        <div className="container">
            <Users
                userInfo={users}
                onAdd={addUser}
                deleteUser={deleteUser}
                editUser={editUser}
                updateUser={updateUser}
                updateUserData={updateUserData}
                actionText={actionText}
            />
        </div>
    );
}

export default App;
