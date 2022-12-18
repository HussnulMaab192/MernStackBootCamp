import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetailsForm = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    getPostDetails();
  }, []);
  const getPostDetails = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const rslt = await response.json();

    setData(rslt);
    console.log("users data", data);
  };
  // console.log(params.id);
  return (
    <>
      <div className="container-sm">
        <h1 className="text-center my-3">Post Details..</h1>
        <div className="row">
          <table className="table-primary">
            {data ? (
              <div className="col col-sm-12">
                <ul>
                  <li>UserID:{data.userId}</li>
                  {/* <li>Userid:{data.id}</li> */}
                  <li>UserTitle:{data.title}</li>
                  <li>UserBody:{data.body}</li>
                </ul>
              </div>
            ) : (
              <div className="col col-sm-6">Loading..</div>
            )}
          </table>
        </div>
      </div>
      ;
    </>
  );
};

export default PostDetailsForm;
