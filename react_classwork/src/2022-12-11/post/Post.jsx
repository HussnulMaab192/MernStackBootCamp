import React, { useEffect } from "react";
import { useState } from "react";

const Post = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {     // componentDidMount == life cycle !
    setTimeout(() => {
      getUserData();
    }, 500);
  }, []);
  const getUserData = async () => {
    try {
      const resposne = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
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
      {user.length > 0 ? (
        user.map((el) => (
          <ol>
            <li> {el.userId}</li>
            <li>{el.id}</li>
            <li>{el.title}</li>
            <li> {el.body}</li>
          </ol>
        ))
      ) : (
        <p>Loadign...</p>
      )}
    </div>
  );
};

export default Post;
