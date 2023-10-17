
function DateTime({dateTime}) {
    
  return (
    <div>{new Date(dateTime * 1000).toLocaleDateString()} {new Date(dateTime * 1000).toLocaleTimeString()}</div>
  )
}

export default DateTime;