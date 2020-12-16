import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar/PrimarySearchAppBar';
import Signup from "./pages/Signup";




export default function App() {
  const [bookData, setbookData] = useState([]);

  const fetchBooks = () => {
    axios.get("https://api.nytimes.com/svc/topstories/v2/books.json?api-key=7hfOFGALLGSAwSOPuN3R2ClK1XtuMLhG")

    
    .then(response => {
      setbookData(response.data.results)
      
    })
    .catch(err=> {
      console.log(err)
    })
  };

  useEffect(()=> {
    fetchBooks()
  }, [])

  console.log(process.env)
  return (
    <div >
      <PrimarySearchAppBar/>
      <Signup/>
     
    </div>
  );
};


