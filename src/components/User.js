import { FaTrash } from "react-icons/fa";

//destructed the coming in props
function User({ userDetails, deleteUser, editUser}) {
    
    return (
        <tr className="p-5">
            <td onClick={()=>editUser(userDetails)}  data-bs-toggle="modal"
                    data-bs-target="#userModal" style={{cursor: 'pointer'}}>{userDetails.name}</td>
            <td>{userDetails.email}</td>
            <td>{userDetails.role}</td>
            <td>
                <FaTrash
                    style={{ color: "red", cursor: "pointer " }}
                    onClick={() => deleteUser(userDetails.id)}
                />
            </td>
        </tr>
    );
}

export default User;
