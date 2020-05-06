import React from 'react'
import './stageFour.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tree from '../assets/tree.jpeg';
import Camp from '../assets/camp.jpeg';
import Cabin from '../assets/cabin.jpeg';


const useStyles = makeStyles({
    header: {
        color:'black',
        width: 400,
        padding: 95,
        margin: 25,
        backgroundColor: 'rgba(255,255,255,0.65)',
        fontFamily: 'Lobster',
        fontSize: 36
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
         backgroundImage: `url(${Tree})`,
         width: '100vw',
         height: '100vh',
         padding: '0',
         margin: '0',
         backgroundSize: 'cover',
     },
     buttonLeft: {
         fontFamily:  'Permanent Marker',
         '&:hover' : {
             backgroundImage: `url(${Camp})`,
             backgroundSize: 'cover'
         },
         width: '200px',
         height: '200px',
         borderRadius: '50%',
         fontSize: '16px',
         backgroundColor: 'rgba(255,255,255,0.65)',
     },
     buttonRight: {
         fontFamily:  'Permanent Marker',
         '&:hover' : {
             backgroundImage: `url(${Cabin})`,
             backgroundSize: 'cover'
         },
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
<NavLink to='/' id="campButton"><Button variant="contained" size="large" className={classes.buttonLeft} id="mainButton">Camp</Button></NavLink>
<Paper className={classes.header}>Camp or Stay Indoors</Paper>
<div className={classes.buttonArea}>
<NavLink to='/rst' id='indoorButton'><Button variant="contained" size="large" className={classes.buttonRight} id="mainButton">Indoor</Button></NavLink>
</div>
</div>
</div>
    )
}