import React, { useEffect, useState } from 'react';
import { Button, Card } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toster = () => {
  const URL = "https://dummyjson.com/users";

  const [users, setUsers] = useState([]);

  const fetchUser = async () => {

    try {
      const response = await fetch(URL);

      const data = await response.json();
      setUsers(data.users); 
      console.log(data);
      toast.success("Data is successfully displayed");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {

    fetchUser() ;
  }, []); 

  return (
    <div style={{ padding: 20 }}>
          <h2 style={{display:'flex', justifyContent:'center'}}>Error Handling + Fetch API + Toast Notifications</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {users.slice(0, 10).map((user) => (
          <Card
            key={user.id}
            title={user.firstName + " " + user.lastName}
            style={{ width: 250 }}
          >
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
          </Card>
        ))}
      </div>
      

      <ToastContainer/>
    </div>
  );
};

export default Toster;
