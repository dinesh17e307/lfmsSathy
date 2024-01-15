import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { Fade, List, ListItem,Zoom } from '@material-ui/core';
import Commonstyles from  '../Styles/CommonStyles';
let NoticeBoards = [
    'Stay positive, work hard, and success will be knocking on your door',
    'I think its possible for ordinary people to choose to be extraordinary.',
    'Genius is 10% inspiration, 90% perspiration',
    'Motivation is what gets you started',
    'Stay positive, work hard, and success will be knocking on your door',
    'I think its possible for ordinary people to choose to be extraordinary.',
    'Genius is 10% inspiration, 90% perspiration',
    'Motivation is what gets you started',
    'Stay positive, work hard, and success will be knocking on your door',
    'I think its possible for ordinary people to choose to be extraordinary.',
    'Genius is 10% inspiration, 90% perspiration',
    'Motivation is what gets you started'
]
class NoticeBoard extends Component{
   
    render() {
         const { classes } = this.props;
        return (
           
          <Grid item component={Paper} className={classes.containerWidth} elevation={6} square style={{height:'400px',margin:'10px auto',borderRadius:'5px',padding:'10px',overflowY:'scroll'}}>
                <div style={{ textAlign: 'center'}} >
                    <img src='/Logos/noticeImage.jpg' width='150px' />
                    <p style={{ fontSize: 'large', color: 'grey' }}>News Form Management</p>
                    <marquee direction='up' scrollAmount='2'>
                    <List>
                        {NoticeBoards.map(item => {
                            return (<ListItem>
                                {item}
                            </ListItem>)
                        })
                        }
                        
                        </List>
                        </marquee>
                </div>
                
                </Grid>
               
           
        )
    }
}
export default withStyles(Commonstyles)(NoticeBoard)