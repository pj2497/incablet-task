import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import "./DataFetch.css";
import Header from "./Header";

function DataFetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://5w05g4ddb1.execute-api.ap-south-1.amazonaws.com/dev/profile/listAll"
      )
      .then((res) => {
        setPosts(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(posts);

  const sortBoth = () => {
    const copyList = [...posts];

    const newList = copyList.sort((a, b) => {
      let adate = a.date.split("/").reverse().join("");
      let bdate = b.date.split("/").reverse().join("");
      var astatus = a.status.toUpperCase();
      var bstatus = b.status.toUpperCase();

      if (astatus > bstatus && adate - bdate) {
        return 1;
      }
      if (astatus < bstatus && adate - bdate) {
        return -1;
      } else {
        return 0;
      }
    });
    setPosts(newList);

    console.log(newList);
  };

  const sortDate = () => {
    const copyList = [...posts];

    const newList = copyList.sort((a, b) => {
      let adate = a.date.split("/").reverse().join("");
      let bdate = b.date.split("/").reverse().join("");

      return adate - bdate;
    });
    setPosts(newList);
    console.log(newList);
  };

  const sortStatus = () => {
    const copyList = [...posts];

    const newList = copyList.sort((a, b) => {
      var astatus = a.status.toUpperCase();
      var bstatus = b.status.toUpperCase();

      if (astatus > bstatus) {
        return 1;
      }
      if (astatus < bstatus) {
        return -1;
      } else {
        return 0;
      }
    });

    setPosts(newList);

    console.log(newList);
  };

  return (
    <div>
      <div className="buttons">
        <h2>SORT BY: </h2>
        <button className="button" onClick={sortDate}>
          SORT DATE
        </button>

        <button className="button" onClick={sortStatus}>
          SORT STATUS
        </button>

        <button className="button" onClick={sortBoth}>
          SORT BOTH
        </button>
      </div>

      <Header className="heading" />

      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            name={post.name}
            age={post.age}
            gender={post.gender}
            status={post.status}
            date={post.date}
            image={post.img}
          />
        );
      })}
    </div>
  );
}

export default DataFetch;
