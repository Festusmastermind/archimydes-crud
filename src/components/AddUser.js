import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

function AddUser({ onAdd, updateUser, updateUserData, actionText }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");

    //process the form here ...
    const submitForm = (e) => {
        e.preventDefault(); //prevents normal form submission
        //light validation
        if (!name && !email) {
            alert("Please enter name and email");
            return;
        }
        //else ...submit the values based on condition
        const newUser = { name, email, role };
        updateUser.editable == true ? updateUserData(updateUser.user.id, newUser) : onAdd(newUser);
    
        //after that the fields back to empty
        setName("");
        setEmail("");
        setRole("user");
    };

    useEffect(() => {
        //console.log(updateUser) //using side effects to update the form content..
        if (updateUser.editable === true) {
            setName(updateUser.user.name);
            setEmail(updateUser.user.email);
            setRole(updateUser.user.role);
        }
    }, [updateUser]);

    //returns the form and the process the form inside this component
    return (
        <>
            <div
                className="modal fade"
                id="userModal"
                tabIndex="-1"
                aria-labelledby="userModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="userModalLabel">
                                <FaArrowLeft data-bs-dismiss="modal" /> {actionText}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitForm}>
                                <div className="mb-3 mt-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="role"
                                        className="form-label"
                                    >
                                        Role:
                                    </label>
                                    <select
                                        className="form-select"
                                        value={role}
                                        onChange={(e) =>
                                            setRole(e.target.value)
                                        }
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                                <div className="d-grid gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-light btn-block mb-1"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-info btn-block text-white"
                                        data-bs-dismiss="modal"
                                    >
                                        {actionText}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddUser;
