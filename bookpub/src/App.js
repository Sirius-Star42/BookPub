import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import './App.css';
import FullWidthGrid from './Components/GridSurface/GridSurface';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function App() {
  const classes = useStyles();

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

  console.log(bookData)
  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" >
        <Grid item xs={12} sm={12}>
            Book Publication
        </Grid>
        {bookData.map( d =>
          <FullWidthGrid data={d}/>
        )}
      </Grid>
    </div>
  );
}


