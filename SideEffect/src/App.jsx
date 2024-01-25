import { useState,useEffect } from 'react'
import PostItem from './PostItem'


function App() {
  const [post,setpost]=useState([])
  const [isLoading,setLoading]=useState(false)
  const [page, setPage] = useState(1)
  const [error,setError]=useState("")

useEffect(function(){
  fetchData(page)
},[page])

let  fetchData=async ()=>{
    setLoading(true)
    setError("")
    try {
      let res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      let data=await res.json();
      // console.log(data);
      setpost(data)
      setLoading(false)
      
    } catch (erro) {
      // console.log(erro);
      setLoading(false)
      setError("Error")
    }
  }

function prevPage(){
  if(page==1){
    alert("This page is  last previous page.")
  }
  else{
    setPage(page-1)
  }
}
function nextPage(){
  if(page==8){
    alert("This page is the last page.")
  }
  else{
    setPage(page+1)
  }
  

}

  return (
    <>
      <h1 style={{textAlign:"center"}}><u>Welcome.com</u></h1>
      <h1>{isLoading?"Loading...":""}</h1>  
      <h1>{error!="" ?"Failed to Load Post REFRESH page":""}</h1>
      <div className='pageButton'>
      <button onClick={prevPage}>Previous</button>
      <h4><u>{page}</u></h4>
      <button onClick={nextPage}>Next</button>
      </div>
      <PostItem post={post}/>

    </>

  )
}

export default App
