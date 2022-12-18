import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // componentDidMount == life cycle !
    setTimeout(() => {
      getUserData();
    }, 500);
  }, []);
  const getUserData = async () => {
    try {
      const resposne = await fetch(
        // a
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await resposne.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log("🚀 Error!!!", error);
    }
  };
  const handleClick = (params) => {
    navigate(`/PostDetails/${params}`); // o
    //user[params];
  };
  return (
    <div className="container-sm">
      <div className="row">
        <div className="col col-sm-6">
          {user.length > 0 ? (
            user.map((el, i) => (
              <ul>
                <li> {el.userId}</li>

                <li>{el.id}</li>

                <li>{el.title}</li>

                <li> {el.body}</li>
                <button onClick={() => handleClick(el.id)}>
                  {" "}
                  Show Details{" "}
                </button>
              </ul>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
