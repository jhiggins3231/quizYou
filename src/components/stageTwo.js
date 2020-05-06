import React from 'react'
import './stageTwo.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import LV from '../assets/lv.jpeg';
import Vegas from '../assets/vegas.jpeg';
import NYC from '../assets/ny.jpeg';

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
         backgroundImage: `url(${LV})`,
         width: '100vw',
         height: '100vh',
         padding: '0',
         margin: '0',
         backgroundSize: 'cover',
     },
     buttonLeft: {
         fontFamily:  'Permanent Marker',
         '&:hover' : {
             backgroundImage: `url(${Vegas})`,
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
             backgroundImage: `url(${NYC})`,
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
        <NavLink to='/mno' ><Button id="button" variant="contained" size="large" className={classes.buttonLeft}>Vegas</Button></NavLink>
        <Paper className={classes.header}>Vegas or NYC</Paper>
        <div className={classes.buttonArea}>
        <NavLink to='/'><Button id='button' variant="contained" size="large" className={classes.buttonRight}>NYC</Button></NavLink>
        </div>
            </div>
        </div>


    )
}