import React from 'react'
import './stageThree.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Street from '../assets/street.jpeg';
import Paper from '@material-ui/core/Paper';
import Car from '../assets/car.jpeg';
import Truck from '../assets/truck.jpeg'


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
    page: {
        backgroundImage: `url(${Street})`,
        width: '100vw',
        height: '100vh',
        padding: '0',
        margin: '0',
        backgroundSize: 'cover'
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
    buttonLeft: {
        fontFamily:  'Permanent Marker',
        '&:hover' : {
            backgroundImage: `url(${Car})`,
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
            backgroundImage: `url(${Truck})`,
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
    }

})


export default function Home() {

const classes = useStyles();

    return(
        <div className={classes.page}>

    <div className={classes.flexBox}>
        <div className={classes.buttonArea}>
        <NavLink to='/rst' ><Button id="buttonThree" variant="contained" size="large" className={classes.buttonLeft}>Car</Button></NavLink>
        <Paper className={classes.header}>Car or Truck?</Paper>
        <NavLink to='/' ><Button id="buttonThree" variant="contained" size="large" className={classes.buttonRight}>Truck</Button></NavLink>
        </div>
        </div>
    </div>
    )
}