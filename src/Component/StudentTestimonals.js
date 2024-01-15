import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import WithStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Commonstyles from  '../Styles/CommonStyles';

const content = [
    'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
    'https://images.unsplash.com/photo-1618473962497-68e8d4e0680e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjB0cmVlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
    'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80'
      
]
class StudentTestimonal extends Component{
    getSliderContent = () => {
    let arrayContent = content.map(item => {
                return (
                   
                        <Grid item style={{border:'1px solid grey'}} >
                            <div style={{display:'flex',flexWrap:'wrap',padding:'20px',gap:'0px 5px'}}>
                            <Avatar><img src={item} style={{ height: '200px', width: '300px' }} /></Avatar> 
                            <p style={{color:'white'}}>Dinesh , x-grade</p>
                            <p style={{ fontSize: '14px', color: 'grey' }}>
                                {'Student reviews are a combination of star ratings and text descriptions. These reviews present the actual experiences of real people who studied abroad. Just think about the ratings on Airbnb, Uber, IMDB, or the products you might order on Amazon, but for universities.'}
                               </p>
                            </div>
                            
                        </Grid>
                        
                        
                   
                        
                )
    })
        return arrayContent;
        }
    render() {
        const { classes } = this.props;
        return (
           
            <Grid item   elevation={6} square style={{  margin: '10px auto', borderRadius: '5px', padding: '10px', }}>
                <h3 style={{ color: 'rgb(149 193 43)', fontSize: 'x-large' }}>STUDENT'S <span style={{color:'white' }}>TESTIMONALS</span> </h3>
                <Divider style={{height:'5px',backgroundColor:'aliceblue',marginBottom:'10px'}} />
                <div className={classes.containerWidth} style={{height: '400px',overflowY:'scroll',display:'grid',padding:'20px',gap:'10px 0px'}}>
                {this.getSliderContent()}</div>
                </Grid>
               
           
        )
    }
}
export default WithStyles(Commonstyles)(StudentTestimonal)