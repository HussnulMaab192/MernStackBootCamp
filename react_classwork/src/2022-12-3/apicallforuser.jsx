import React, { useState, useEffect } from "react";

const Apicallforuser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      getUserData();
    }, 2000);
  }, []);

  const getUserData = async () => {
    try {
      const resposne = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await resposne.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log("🚀 Error!!!", error);
    }
  };

  return (
    <div>
      Apicallforuser
      {user.length > 0 ? (
        user.map((el) => (
          <div>
            <h1>User name : {el.name}</h1>
            <h1>User Address : {el.address.street}</h1>
            <h1>User Email : {el.email}</h1>
          </div>
        ))
      ) : (
        <p>Loadign...</p>
      )}
    </div>
  );
};

export default Apicallforuser;
