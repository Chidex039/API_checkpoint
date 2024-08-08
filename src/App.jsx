import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(null);

  // an async function to get list f users
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  // Blocking code to help bypass the initial null value
  // if (users === null) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div>
      {/* <h1>{count}</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>Count number</button> */}
      <h1 className="text-3xl text-red-500">Hello world</h1>
      {users?.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.username}</h1>
            <p>{item.phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
