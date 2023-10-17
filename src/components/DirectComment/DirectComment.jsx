import * as React from 'react';
import "./DirectComment.css"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ChatIcon from '@mui/icons-material/Chat';


export default function DirectComment({newsData}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ChatIcon onClick={handleClickOpen} sx={{color: "orange"}} />
      <Dialog open={open} onClose={handleClose} >
        <div className='directcomment_header'>
        <DialogTitle className='directcomment'>
        {newsData.title}
        <span>{newsData.score + " points by " + newsData.by}</span>
        </DialogTitle>
        {/* <DialogContentText className='directcomment_text'>
          
          </DialogContentText> */}
        </div>
        <DialogContent>
          
        <textarea
         autoFocus 
         className="bottom_text_field" 
         placeholder="Add a comment..." 
         rows={4}
         />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Post</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}