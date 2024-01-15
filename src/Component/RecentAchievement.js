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
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import SliderComponent from './SliderComponent';
import axios from "axios";
import WithStyles from '@material-ui/core/styles/withStyles';
import Commonstyles from  '../Styles/CommonStyles';
const content = [
    'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
    'https://images.unsplash.com/photo-1618473962497-68e8d4e0680e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjB0cmVlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
    'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80'
      
]
class RecentAchievements extends Component{
    state = {
        latestNews:[]
    }
    async componentDidMount() {
        if (sessionStorage.getItem('latestEvents')) {
            
                this.setState({
                    latestNews: [...JSON.parse(sessionStorage.getItem('latestEvents'))]
                })
        }
        else {
            await axios.get('https://lfms-admin-site.onrender.com/api/LatestEvents').then((response) => {
           
           
                this.setState({
                    latestNews: response.data
                })
                sessionStorage.setItem('latestEvents', JSON.stringify(response.data))
            });
        }

       
    }

    
    getSliderContent = () => {
        let arrayContent = this.state.latestNews?.length > 0 && this.state.latestNews.map((item)=> {
            
                return (
                    
                        <Grid item md={3} style={{ border: '1px solid white', color:'white',padding:'10px' ,height:'fit-content',width:'200px' ,borderRadius:'5px'}}>
                            <div >
                                <img src={`data:image/jpeg;base64,${item.blogImages}`} style={{ height: '150px', width: '100%' }} />
                                <h3 style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden',color:'rgb(149 193 43)' }}>{item.title }</h3>
                            <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{item.description}</p>
                            <Button color='secondary' style={{border:'1px solid green',background:'rgb(149 193 43)',color:'White'}} variant='contained'>Read More</Button>
                            </div>
                            
                        </Grid>
                        
                        
                    
                        
                )
        })
        
        return arrayContent;
        }
    render() {
        const { classes } = this.props;
        return (
           
            <Grid item  elevation={6} square style={{ minHeight: '400px', margin: '10px auto', borderRadius: '5px', padding: '10px' }}>
                <h3 style={{ color: 'rgb(149 193 43)', fontSize: 'x-large' }}>LATEST <span style={{color:'white' }}>NEWS </span></h3>
                <Divider style={{ height: '5px', backgroundColor: 'aliceblue', marginBottom: '10px' }} />
               < div className={classes.containerWidth}  style={{display:'flex',gap:'5px',overflowX:'scroll'}} >
                    {this.getSliderContent()}
                   
                            
                            
                        
                    
            </div>
                </Grid>
               
           
        )
    }
}
export default WithStyles(Commonstyles)(RecentAchievements)