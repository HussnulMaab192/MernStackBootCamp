import React from "react";
import { useQuery } from "react-query";
// import { CircularProgressbar } from "react-circular-progressbar";
// 1-query Hook jst work like redux but it auto update if it get any change..
// jo pass kryn gy wo return kra k dey gi data...
const React_query_package = () => {
  const { data, isLoading, error } = useQuery("postsData", () =>
    fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) =>
      response.json()
    )
  );
  if (isLoading) return <div>Loading...</div>;
  // const value = 0.66;
  // console.log("🚀 ~ file: React_query_package.jsx:7 ~ data", data);
  //phla argument: jsmn data store hoga..
  // dosra argument: function hoga jo end point se data utha k ley ayga..
  //do parameters lay ga...jsko hit krry hain uska nam likhyn..
  return (
    <>
      <div className="container-sm">
        <h1 className="text-center my-3">Post Data..</h1>
        <div className="row">
          <table className="table-primary">
            {data.length > 0 ? (
              data.map((item, i) => (
                <div className="col">
                  <ul>
                    <li>UserID:{item.userId}</li>
                    <li>Userid:{item.id}</li>
                    <li>UserTitle:{item.title}</li>
                    <li>UserBody:{item.body}</li>
                  </ul>
                </div>
              ))
            ) : (
              <div style={{ width: 200, height: 200 }}>Loading..</div>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default React_query_package;
