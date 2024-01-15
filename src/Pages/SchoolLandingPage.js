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
import SliderComponent from '../Component/SliderComponent';
import { Fade,Zoom } from '@material-ui/core';
const content = [
    { img: 'https://images.pexels.com/photos/3420517/pexels-photo-3420517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' ,quote:'I think its possible for ordinary people to choose to be extraordinary'},
    { img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', quote: 'Motivation is what gets you started.' },
    {img:'https://images.pexels.com/photos/8926648/pexels-photo-8926648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',quote: 'The beautiful thing about learning is that no one can take it away from you' },
    {img:'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',quote: 'Education is the most powerful weapon you can use to change the world.' },
    {img:'https://images.pexels.com/photos/3791242/pexels-photo-3791242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',quote: 'I find that the harder I work, the more luck I seem to have.' },
    {img:'https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',quote: 'Genius is 10% inspiration, 90% perspiration' }
      
]
class SchoolLandingPage extends Component{
    getSliderContent = () => {
        const { classes } = this.props;
    let arrayContent = content.map(item => {
                return (
                    
                        <Grid item  >
                           <div className={classes.container}>
                              <div style={{  width: '100%' ,height:'30%', opacity:'0.7'}}>  <img src={item.img}    /></div>
                            <h1 className={classes.centered} style={{whiteSpace:'break-spaces'}}>{ item.quote}</h1>
                                   </div>
                          
                            
                        </Grid>
                        
                        
                  
                        
                )
    })
        return arrayContent;
        }
    render() {
        return (
            
           <Grid item  square style={{ minHeight:'200px', margin: '10px auto', borderRadius: '5px', padding: '10px' }}>
               <SliderComponent content={this.getSliderContent()} centerSlidePercentage={100} centerMode={true} />
                </Grid>    
              
               
           
        )
    }
}
export default withStyles(Commonstyles)(SchoolLandingPage)