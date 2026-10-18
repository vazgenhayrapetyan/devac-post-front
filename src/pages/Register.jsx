import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/register", {
                username,
                email,
                password,
                role
            });
            navigate("/login");
        } catch (error) {
            console.error("Խնդիր առաջացավ:", error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;