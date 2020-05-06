import React from 'react'
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Celebrate from '../assets/celebrate.jpeg';
import Paper from '@material-ui/core/Paper';
import HomeIMG from '../assets/home.jpeg';
import Confetti from 'react-confetti';
import {useWindowSize} from 'react-use';

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
         backgroundImage: `url(${Celebrate})`,
         width: '100vw',
         height: '100vh',
         padding: '0',
         margin: '0',
         backgroundSize: 'cover',
     },
     buttonRight: {
         fontFamily:  'Permanent Marker',
         backgroundColor: 'white',
         '&:hover' : {
             backgroundImage: `url(${HomeIMG})`,
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
const { width, height } = useWindowSize()
    return(
        <div className={classes.page}>
        <Confetti
        width={width}
        height={height}
        />
            <div className={classes.flexBox}>
        <Paper className={classes.header}>Congrats! Now you know a little about me or maybe you already knew it all!</Paper>
        <div className={classes.buttonArea}>
        <NavLink to='/' ><Button id='button' variant="contained" size="large" className={classes.buttonRight}>Home</Button></NavLink>
        </div>
            </div>
        </div>
    )
}