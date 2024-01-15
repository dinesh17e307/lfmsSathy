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
import Counter from './Counter';
let contentArray = [
    {
        image: <SupervisorAccountIcon fontSize='large'/>,
        count:1000,
        content: '',
        suffix:"+ Students"
    },
    {
        image: <EmojiEventsIcon fontSize='large'/>,
        count:100,
        content: '',
        suffix:"% Results"
    },
    {
        image: <StarRateIcon fontSize='large'/>,
         count:200,
        content: '',
        suffix:"+ Achievements"
    }
]
class SchoolOverView extends Component{
    render() {
        return (
           
          
                <Grid container md={12} style={{ gap: '30px',display:'flex',justifyContent:'space-evenly',margin:'0px auto'}} >
                    {contentArray.map(item=>{
                        return(
                    
                        
                            <Grid item md={3} style={{ height:'300px',width:'100%',textAlign:'center',display:'block',backgroundColor:'white' ,borderRadius:'10px',}}>
                              <p style={{ color:'#95c12b'}}> {item.image}</p>
                                <p style={{color: '#95c12b',
fontSize: '29px',
fontWeight: '600',
fontStyle: 'italic'}}>{String(item.count) + item.suffix}</p>
                               </Grid>
                               
                       
                        
                        )
                    })
                    }
                </Grid>
              
               
           
        )
    }
}
export default SchoolOverView