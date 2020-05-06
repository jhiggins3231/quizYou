import React from 'react'
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/button';
import Entry from '../assets/entry.jpeg';

const useStyles = makeStyles({

    header: {
        color:'black',
        width: 400,
        padding: 95,
        margin: 25,
        backgroundColor: 'rgba(255,255,255,0.65)',
        fontFamily: 'Acme'
     },
      flexBox: {
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
     },
     page: {
         backgroundImage: `url(${Entry})`,
         width: '100vw',
         height: '100vh',
         padding: '0',
         margin: '0',
         backgroundSize: 'cover',
     },
     buttonLeft: {
         fontFamily:  'Permanent Marker',
         backgroundColor: 'white',
         width: '200px',
         height: '200px',
         borderRadius: '50%',
         fontSize: '16px',
         backgroundColor: 'rgba(255,255,255,0.65)',
     },
     buttonRight: {
         fontFamily:  'Permanent Marker',
         backgroundColor: 'white',
         width: '200px',
         height: '200px',
         borderRadius: '50%',
         fontSize: '16px',
         backgroundColor: 'rgba(255,255,255,0.65)'
     },
     buttonArea: {
         display: 'flex',
         justifyContent: 'space-around',
         alignItems: 'center',
     },
})


export default function Home() {

const classes = useStyles();

    return(
<div className={classes.page}>
            
<div className={classes.flexBox}>
<Button variant="contained" size="large" className={classes.buttonLeft}><NavLink to='/abc' id="buttonLeft">This way</NavLink></Button>
<Paper className={classes.header}><h1>Welcome!</h1><p>Welcome to my guessing game. There are a series of questions about me that will be laid out on each page. Choosing the correct answer will allow you to move forward. Some pages have answer that are all correct but will lead you down different paths. If you happen to pick the wrong answer you will be returned to the beginning. Choose carefully and Good Luck!</p></Paper>
<div className={classes.buttonArea}>
<Button variant="contained" size="large" className={classes.buttonRight}><NavLink to='/ghi' id='buttonRight'>That way</NavLink></Button>
</div>
</div>
</div>

    )
}