import React, { useState, useEffect } from "react";
import axios from "axios";

function Usercard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://randomuser.me/api/?results=10");
      console.log(result.data);
      setUsers(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {users.map((user, index) => (
        <div className="card" key={index}>
          <img src={user.picture.medium} alt="" />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <h5>Mail: {user.email}</h5>
          <p>Age: {user.dob.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Usercard;
