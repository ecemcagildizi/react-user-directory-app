import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((res) => res.json())
          .then((data) => setUser(data));
      }, [id]);

    if (!user) {
        return <p>Loading user data...</p>
    }
    return (
        <div>
          <h2>{user.name}</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Company:</strong> {user.company.name}</p>

          <button onClick={() => navigate("/")}>Back to List</button>
        </div>
    );
}

export default UserDetail;