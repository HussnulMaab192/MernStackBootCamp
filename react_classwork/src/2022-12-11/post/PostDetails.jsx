import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [Details, setDetails] = useState({});
  useEffect(() => {
    getPostDetails();
  }, []);
  const getPostDetails = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    setDetails(data);
  };
  return (
    <>
      <div className="container-sm">
        <div className="row">
          <h1>Post Details</h1>
          <div className="col col-sm-3">
            {Details ? (
              <ul>
                <li>{Details.id}</li>
                <li>{Details.userId}</li>
                <li>{Details.title}</li>
              </ul>
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
