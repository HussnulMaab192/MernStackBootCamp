import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";

const Postform = () => {
  const [postData, setPostData] = useState([]);
  const value = 0.66;
  const navigate = useNavigate();
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = await response.json();
      // console.log(data);
      setPostData(data);
    } catch (error) {
      console.log("Errors Found in Fetch:", error);
    }
  };
  const handleChange = (id) => {
    console.log("Your Clicked ID is:", id);
    //postData[id];
    // console.log("Your Clicked ID is:", postData[id]);
    navigate(`/Show-Details/${id}`);
  };
  return (
    <>
      <div className="container-sm">
        <h1 className="text-center my-3">Post Data..</h1>
        <div className="row">
          <table className="table-primary">
            {postData.length > 0 ? (
              postData.map((data, i) => (
                <div className="col col-sm-12">
                  <ul>
                    <li>UserID:{data.userId}</li>
                    <li>Userid:{data.id}</li>
                    <li>UserTitle:{data.title}</li>
                    <li>UserBody:{data.body}</li>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => handleChange(data.id)}
                    >
                      Show Details
                    </button>
                  </ul>
                </div>
              ))
            ) : (
              <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar
                  value={value}
                  maxValue={1}
                  text={`${value * 100}%`}
                />
                ;
              </div>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Postform;
