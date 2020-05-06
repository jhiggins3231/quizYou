import React from 'react'
import './stageSeven.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import IceCream from '../assets/icecream.jpeg';
import Brownie from '../assets/brownie.jpeg';
import Foster from '../assets/foster.jpg';
import Macadamia from '../assets/macadamia.jpg';
import OneWay from '../assets/oneway.jpg';

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
         backgroundImage: `url(${OneWay})`,
         width: '100vw',
         height: '100vh',
         padding: '0',
         margin: '0',
         backgroundSize: 'cover',
     },
     buttonLeft: {
         fontFamily:  'Permanent Marker',
         '&:hover' : {
             backgroundImage: `url(${Brownie})`,
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
         '&:hover' : {
             backgroundImage: `url(${IceCream})`,
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
         '&:hover' : {
             backgroundImage: `url(${Foster})`,
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
            backgroundImage: `url(${Macadamia})`,
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
            <NavLink to='/' ><Button id="buttonDessert" variant="contained" size="large" className={classes.buttonLeft}>Brownies</Button></NavLink>
            <NavLink to='/' ><Button id="buttonDessert" variant="contained" size="large" className={classes.buttonMidLeft}>Ice Cream</Button></NavLink>
            <Paper className={classes.header}>What is my favorite dessert?</Paper>
            <div className={classes.buttonArea}>
            <NavLink to='/fl' ><Button id='buttonDessert' variant="contained" size="large" className={classes.buttonMiddle}>Banana Foster</Button></NavLink>
            <NavLink to='/' ><Button id='buttonDessert' variant="contained" size="large" className={classes.buttonRight}>Apple Pie</Button></NavLink>
            </div>
        </div>
    </div>
    )
}