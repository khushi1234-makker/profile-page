import React, { useState } from "react";
import "./UserDashboard.css";

/*Interface for User object */
interface User {
  id: number;
  name: string;
  email: string;
}

const UserDashboard: React.FC = () => {

 
/* State variables */
  
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);

  /* Utility function: Sort users A-Z*/
  const sortUsers = (userList: User[]): User[] => {
    return [...userList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  };

  /* Add or Update User */
  const handleSubmit = (): void => {
    if (!name || !email) return;

    let updatedUsers: User[];

    if (editId !== null) {
      // Update existing user
      updatedUsers = users.map(u =>
        u.id === editId ? { ...u, name, email } : u
      );
      setEditId(null);
    } else {
      // Add new user
      updatedUsers = [
        ...users,
        { id: Date.now(), name, email }
      ];
    }

    // Always sort after add/update
    setUsers(sortUsers(updatedUsers));

    // Clear inputs
    setName("");
    setEmail("");
  };

  /* Delete User */
  const deleteUser = (id: number): void => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(sortUsers(updatedUsers)); // keep sorted
  };

  /* Edit User */
  const editUser = (user: User): void => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  /* Filter users based on search */
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      {/* Header Section */}
      <div className="header">

        {/* Search Input */}
        <input
          type="text"
          placeholder="🔍 Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h2>User Management Dashboard</h2>
      </div>

      {/* Form Section */}
      <div className="form">

        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Add / Update Button */}
        <button onClick={handleSubmit}>
          {editId ? "Update User" : "Add User"}
        </button>
      </div>

      {/* Users Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>

                {/* Edit Button */}
                <button
                  className="edit"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>

                {/* Delete Button */}
                <button
                  className="delete"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UserDashboard;