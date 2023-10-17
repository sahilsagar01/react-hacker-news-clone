import React, {useState, useEffect} from 'react'
import "./Home.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';


import NewsCard from '../../components/NewsCard/NewsCard'
import { json } from 'react-router-dom';

function Home({Categories}) {

  const [allNewsId, setAllNewsId] = useState([])
  
  // pagination--------------------------------------------------
  const [pageNavNum, setPageNavNum] = useState(0)
  let pageNavLastNum = pageNavNum + 5
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 30;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = allNewsId.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(allNewsId.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1)

  // Checks navigaction bar status--------------------------------

  useEffect(() => {
    Categories === "home"
    ?
    localStorage.setItem("nav", "home")
    :
    localStorage.setItem("nav", Categories)


  },[Categories])
  
  useEffect(() => {
    const fetchHackerNews = async () => {
      try{
        
      await axios.get(Categories === "home"? `https://hacker-news.firebaseio.com/v0/topstories.json `
      : `https://hacker-news.firebaseio.com/v0/${Categories}.json`)
      .then(({data}) => setAllNewsId(data))
      }
      catch(err){
        console.log(err)
      }
    }
    fetchHackerNews()
  },[Categories])
  return (
    <div className='home'>
     
    {
      records.map((item ,index) =>{
        return <NewsCard key={index} id={index} newsId={item}/>
      })
    }
    <nav className='pagination_cont'>
      <ul className='pagination'>
        <li className='page-item'>
          <a  ><ArrowBackIosIcon sx={{color:"#ff6600"}} href='#' onClick={prevPage}/></a>
         </li>
        {
          numbers > 5?  numbers.map((n, i) =>(
            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <button href='#' className='page-link'
              onClick={() => changeCurrPage(n)}></button>
            </li>
          
          ))
          :
          numbers.slice(pageNavNum, pageNavLastNum).map((n, i) =>(
            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <button href='#' className='page-link page-link-dot'
              onClick={() => changeCurrPage(n)}>{n}</button>
            </li>
          ))
        }
        <li className='page-item'>
          <ArrowForwardIosIcon sx={{color:"#ff6600"}}  onClick={nextPage} />
        </li>
      </ul>
      <p className='page_indicator'>{`${firstIndex / recordsPerPage + 1} ot ${lastIndex / recordsPerPage + 4 < Math.ceil(allNewsId.length / recordsPerPage) ? lastIndex / recordsPerPage + 4 : Math.ceil(allNewsId.length / recordsPerPage)}...  ${Math.ceil(allNewsId.length / recordsPerPage)}pages`}</p>
    </nav>
    </div>
  )
  // controls-------------------------------------------------------
  function prevPage (e){ 
    e.preventDefault()
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
      
    }
    if(pageNavNum > 0) {
      setPageNavNum(pV => pV - 1)
    }
  
    
  }
  function changeCurrPage (id){
    setCurrentPage(id)
    if(pageNavNum < numbers.length - 5){
      setPageNavNum(id -1)
    }
    
  }
  function nextPage (e){ 
    e.preventDefault()
    if(currentPage !== nPages){
      setCurrentPage(currentPage + 1)
    }
    if(pageNavNum < numbers.length - 5){
      setPageNavNum(pV => pV + 1)
    }
   }
}

export default Home