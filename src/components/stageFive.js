import React from 'react'
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Spain from '../assets/spain.jpeg';
import Germany from '../assets/germany.jpeg';
import Egypt from '../assets/egypt.jpeg';
import Map from '../assets/map.jpeg';
import Australia from '../assets/australia.jpeg';

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
         backgroundImage: `url(${Map})`,
         width: '100vw',
         height: '100vh',
         padding: '0',
         margin: '0',
         backgroundSize: 'cover',
     },
     buttonLeft: {
         fontFamily:  'Permanent Marker',
         '&:hover' : {
             backgroundImage: `url(${Spain})`,
             backgroundSize: 'cover'
         },
         width: '200px',
         height: '200px',
         borderRadius: '50%',
         fontSize: '16px',
         backgroundColor: 'rgba(255,255,255,0.65)',
     },
     buttonMiddle: {
         fontFamily:  'Permanent Marker',
         '&:hover' : {
             backgroundImage: `url(${Germany})`,
             backgroundSize: 'cover'
         },
         width: '200px',
         height: '200px',
         borderRadius: '50%',
         fontSize: '16px',
         backgroundColor: 'rgba(255,255,255,0.65)'
     },
     buttonRight: {
        fontFamily:  'Permanent Marker',
        '&:hover' : {
            backgroundImage: `url(${Egypt})`,
            backgroundSize: 'cover'
        },
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        fontSize: '16px',
        backgroundColor: 'rgba(255,255,255,0.65)'
    },
    buttonMidLeft: {
        fontFamily:  'Permanent Marker',
        '&:hover' : {
            backgroundImage: `url(${Australia})`,
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

<NavLink to='/def' ><Button id="button" variant="contained" size="large" className={classes.buttonLeft}>Spain</Button></NavLink>
<NavLink to='/def' ><Button id="button" variant="contained" size="large" className={classes.buttonMidLeft}>Australia</Button></NavLink>
<Paper className={classes.header}>Where would I like to visit next?</Paper>
<div className={classes.buttonArea}>

<NavLink to='/' ><Button id='button' variant="contained" size="large" className={classes.buttonMiddle}>Germany</Button></NavLink>
<NavLink to='/jkl' ><Button id='button' variant="contained" size="large" className={classes.buttonRight}>Egypt</Button></NavLink>
</div>
</div>
</div>

    )
}