import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import ShieldIcon from '@mui/icons-material/Shield';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarRateIcon from '@mui/icons-material/StarRate';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import withStyles from '@material-ui/core/styles/withStyles';

import Commonstyles from  '../Styles/CommonStyles';
import SliderComponent from './SliderComponent';
const content = [
    'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
    'https://images.unsplash.com/photo-1618473962497-68e8d4e0680e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjB0cmVlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
    'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80'
      
]
class HtmlSlider extends Component{
    getSliderContent = () => {
        const { classes } = this.props;
    let arrayContent = content.map(item => {
                return (
                    
                        <Grid item  >
                           <div className={classes.container}>
                                <img src={item} style={{  width: '100%' ,height:'50%'}} />
                                  <div className={classes.centered}>Centered</div>
                                   </div>
                          
                            
                        </Grid>
                        
                        
                  
                        
                )
    })
        return arrayContent;
        }
    render() {
        return (
           <Grid item  elevation={6} square style={{ minHeight: '100px', margin: '10px auto', borderRadius: '5px', padding: '10px' }}>
              
                <SliderComponent content={this.getSliderContent()} centerSlidePercentage={100} centerMode={true} />
                </Grid>    
              
               
           
        )
    }
}
export default withStyles(Commonstyles)(HtmlSlider)