import reactDom from "react-dom";
import User from "./User";
import { FaPlus } from "react-icons/fa";
import AddUser from "./AddUser";

function Users({
    userInfo,
    onAdd,
    deleteUser,
    editUser,
    updateUser,
    updateUserData,
    actionText,
}) {
    return (
        <>
            <div className="clearfix mt-5">
                <h2 className="float-start">Users</h2>
                <button
                    className="btn btn-info text-white float-end"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#userModal"
                >
                    <FaPlus color="white" /> {actionText}
                </button>
            </div>
            <AddUser
                onAdd={onAdd}
                updateUser={updateUser}
                updateUserData={updateUserData}
                actionText={actionText}
            />

            <div className="card shadow-lg p-2 mt-1">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userInfo.map((user, index) => (
                                    <User
                                        key={index}
                                        userDetails={user}
                                        deleteUser={deleteUser}
                                        editUser={editUser}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;
