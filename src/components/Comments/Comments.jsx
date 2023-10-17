import React, { useEffect, useState } from "react";
import "./Comments.css";

import Comment from "../Comment/Comment";

import DateTime from "../DateTime/DateTime";

function Comments() {
  const [clickedNewsKids, setClickedNewsKids] = useState([]);
  const [clickedNews, setClickedNews] = useState({});

  useEffect(() => {
    try {
      const data = localStorage.getItem("news");
      const jsonData = JSON.parse(data);
      setClickedNews((pV) => {
        return {
          pV,
          ...jsonData,
        };
      });
      setClickedNewsKids(jsonData.kids.length > 0 ? jsonData.kids : []);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="comments">
      <div className="comments_container">
        <div className="comments_Profile">
          <a href={clickedNews.url}>{clickedNews.title}</a>
          <span>
            {clickedNews.score + " points by " + clickedNews.by + " || "}
            {clickedNews.kids ? "Comments " : "Discuss"}
            {clickedNews.kids ? clickedNews.kids.length : ""}
          </span>
          <span className="date_time">
            <DateTime dateTime={clickedNews.time} />
          </span>
        </div>
        <div className="comments_box">
          {clickedNewsKids.map((item) => {
            return <Comment key={item} items={item} />;
          })}
        </div>
        <a href="/">
        <button
          className="comments_container_button"
          sx={{
            border: "2px solid #fe6600",
            borderRadius: "20px",
            padding: "5px 10px",
            margin: "2rem auto 0",
          }}
          color="warning"
          
        >
          Back to home
        </button>
        </a>
      </div>
    </div>
  );
}

export default Comments;
