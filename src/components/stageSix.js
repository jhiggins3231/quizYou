import React from 'react'
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/button';
import Paper from '@material-ui/core/Paper';
import Mountains from '../assets/mountains.jpeg';
import Beach from '../assets/beach.jpeg';
import Desert from '../assets/desert.jpeg';
import Forest from '../assets/forest.jpeg';
import Toilet from '../assets/toilet.jpeg';

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
         backgroundImage: `url(${Toilet})`,
         width: '100vw',
         height: '100vh',
         padding: '0',
         margin: '0',
         backgroundSize: 'cover',
     },
     buttonLeft: {
         fontFamily:  'Permanent Marker',
         backgroundColor: 'white',
         '&:hover' : {
             backgroundImage: `url(${Mountains})`,
             backgroundSize: 'cover'
         },
         width: '200px',
         height: '200px',
         borderRadius: '50%',
         fontSize: '16px',
         backgroundColor: 'rgba(255,255,255,0.65)',
     },
     buttonMidLeft: {
         fontFamily:  'Permanent Marker',
         backgroundColor: 'white',
         '&:hover' : {
             backgroundImage: `url(${Beach})`,
             backgroundSize: 'cover'
         },
         width: '200px',
         height: '200px',
         borderRadius: '50%',
         fontSize: '16px',
         backgroundColor: 'rgba(255,255,255,0.65)'
     },
     buttonMiddle: {
         fontFamily:  'Permanent Marker',
         backgroundColor: 'white',
         '&:hover' : {
             backgroundImage: `url(${Forest})`,
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
        backgroundColor: 'white',
        '&:hover' : {
            backgroundImage: `url(${Desert})`,
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
            <NavLink to='/' ><Button id="button" variant="contained" size="large" className={classes.buttonLeft}>Mountains</Button></NavLink>
            <NavLink to='/jkl' ><Button id="button" variant="contained" size="large" className={classes.buttonMidLeft}>Beach</Button></NavLink>
            <Paper className={classes.header}>I find what landscape the most relaxing</Paper>
            <div className={classes.buttonArea}>
            <NavLink to='/' ><Button id='button' variant="contained" size="large" className={classes.buttonMiddle}>Forest</Button></NavLink>
            <NavLink to='/' ><Button id='button' variant="contained" size="large" className={classes.buttonRight}>Desert</Button></NavLink>
            </div>
        </div>
    </div>

    )
}