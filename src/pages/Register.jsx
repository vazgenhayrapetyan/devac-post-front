import react, {useState} from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

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
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;