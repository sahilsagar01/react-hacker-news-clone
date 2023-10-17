import React, { useEffect, useState } from 'react'
import "./NewsCard.css"
import axios from 'axios';
import { newsComment } from '../Api/NewsData/fetchComment';
import DirectComment from '../DirectComment/DirectComment';
import DateTime from '../DateTime/DateTime';

function NewsCard({newsId, id}) {
  const [news , setNews] = useState({
    })
    

    
  useEffect(() => {
    const fetchData = async () => {
      try{
        const newsURL = `https://hacker-news.firebaseio.com/v0/item/${newsId}.json`
        const singleNews = await axios.get(newsURL)
          setNews(singleNews.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
    // console.log(news)
  }, [newsId])
  return (
    <div className='newscard'>
    <div className='newscard_cont'>
    <div className='newscard_header'>
      <div className='newscard_news'>
      <h1><a href={news.url}>{news.title}</a></h1>
      </div>
      <span><DirectComment newsData={news}  /></span>
    </div>
    <div className='newscard_footer'>
    <p>{news.score} points by {news.by} || <span><DateTime dateTime={news.time} /></span></p>
    <button
    //  href="/comments"
     onClick={() => newsComment(newsId)}
     >{news.kids ? "Comments ":"Discuss"}{news.kids ? news.kids.length : ""}
     </button>
    </div>
    </div>
    </div>
  )
}

export default NewsCard