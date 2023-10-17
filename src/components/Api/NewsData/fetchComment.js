import axios from "axios";


 
const newsComment = async newsId => {
    const newsURL =  `https://hacker-news.firebaseio.com/v0/item/${newsId}.json`
    try{
       await axios.get(newsURL)
       .then(news => {
        console.log(news.data)
        localStorage.setItem("news",JSON.stringify(news.data))
        window.location="/comments"
        
       })


    }
    catch(err){
        console.log(err)
    }

}



export {
    newsComment
}
