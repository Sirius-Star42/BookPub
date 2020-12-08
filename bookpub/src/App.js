import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from './Components/Card';
import './App.css';



function App() {
  const [bookData, setbookData] =useState([]);

  const fetchBooks = () => {
    axios.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=2012-12-08&api-key=7hfOFGALLGSAwSOPuN3R2ClK1XtuMLhG")
    .then(response => {
      setbookData(response.data.results.lists)
      
    })
    .catch(err=> {
      console.log(err)
    })
  };

  useEffect(()=> {
    fetchBooks()
  }, [])

 console.log(bookData)
 
  return (
    <div className="Container">

      
      {bookData.map((book) => <Card image={book}/>
      
        
        )}
      
    </div>
  );
}

export default App;
