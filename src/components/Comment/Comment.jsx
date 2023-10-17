import axios from "axios";
import React, { useEffect, useState } from "react";
import DateTime from "../DateTime/DateTime";
import "./Comment.css";
import { Button } from '@mui/material';

function Comment({ items }) {
  const [newcomment, setNewComment] = useState({});
  const [textBox , setTextBox] = useState(false)

  useEffect(() => {
    const comments = async () => {
      const commentURL = `https://hacker-news.firebaseio.com/v0/item/${items}.json`;
      try {
        const comment = await axios.get(commentURL);
        setNewComment(comment.data);
      } catch (err) {
        console.log(err);
      }
    };
    comments();
  }, []);

  return (
    <div className="comment">
      <div className="comment_profile">
        <h1>P</h1>
      </div>
      <div className="comment_pofile_comment">
        <div className="top">
          <h1>{newcomment.by}</h1>
          <span><DateTime dateTime={newcomment.time} /></span>
        </div>
        <div className="middel">
        <p>
        <div dangerouslySetInnerHTML={{__html: newcomment.text}} />
        {/* {newcomment.text} */}
        </p>
        </div>
        {
            textBox ?
            <div className="bottom">
          <button disabled>reply</button>
          {/* <TextField
          id="filled-multiline-static"
          label="Comment"
          multiline
          rows={4}
          className="bottom_text_field"
          placeholder="Add a comment..."
          variant="filled"
        //   autoFocus
        /> */}
        <textarea
         autoFocus 
         className="bottom_text_field" 
         placeholder="Add a comment..." 
         rows={4}
         />
        <Button 
        onClick={()=> setTextBox(false)}
        variant='small'
        >reply</Button>
        <Button 
        onClick={()=> setTextBox(false)}
        variant='small'
        >Cancel</Button>
        </div>
        :
        <div className="bottom">
          <button onClick={() => setTextBox(true)}>reply</button>
        </div>
        }
      </div>
    </div>
  );
}

export default Comment;
