import React, { Component } from 'react';
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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Hidden, Snackbar } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LoginPageStyles from '../Styles/LoginPageStyles';
import{getAdandSpecialOffer} from '../Api/LoginApi'
function Copyright() {
  return (
    <Typography variant="body2" color="Warning" align="center">
      {'Copyright © '}
      <Link color="Error">
       V-Store
      </Link>{' '}
      {'2022'}
      {'.'}
    </Typography>
  );
}



class SignInSide extends Component {
    state = {
        openSnackbar: false,
        snackbarcolor: 'success',
        message:'login successfully'
    }
    async componentDidMount() {
        
    }
    getFormDetails = (event) => {
        let id = event.target.id;
        let value = event.taget.value
        this.setState({
            [id]:value
        })
    }
    handleLogin = () => {
         this.setState({
             openSnackbar: true,
             //snackbarcolor:''
        })
    }
    handleClose = () => {
        this.setState({
            openSnackbar:false
        })
    }
    render() {
        const { classes } = this.props;

        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Hidden smDown>
                <Grid item xs={false} sm={4} md={7} style={{ padding: '10px' }} >
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{marginTop: 'auto'}}>
                    <h1 style={{
                        textAlign: 'center',
                        color: '#c615c6',
                        fontFamily: 'serif'
                    }}>Little Flower Matriculation Hr. Secondary School</h1>
                    <div style={{display:'flex',justifyContent: 'center',color: 'darkorchid'}}>
                        <LocationOnIcon color="primary" />
                        <p>
                        Varathampalayam Sathyamangalam
                         Sathyamangalam, Tamil Nadu - 638401
                    </p>
                                </div>
                                <div>
                                    <img src="Logos/schoolOverView.jpg" width='100%'/>
                                </div>
                    </div>
                       
                        </div>
                    </Grid>
                    </Hidden>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
          
                        <img width={150} className={classes.image} src="Logos/schoollogo.jpg" />
          
                        <Typography component="h1" variant="h3" style={{ font: 'caption', fontFamily: 'monospace', fontStyle: 'italic' }}>
                            Welcome Back !
                        </Typography>
                        <Grid className={classes.form} >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label='User Name'
                                name="email"
                                onChange={this.getFormDetails}
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                onChange={this.getFormDetails}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
            
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleLogin}
                            style={{backgroundColor:'#9C27B0'}}>
                                Sign In
                            </Button>

                            
                            <Grid style={{ display: 'flex', justifyContent: 'flex-start',marginTop:'20px' }}>
                                <img src="/special.png" width={100} />
                                <div >
                                    <p style={{height:'70px',width:'fi-content',fontWeight:600,fontSize:'14px',color:'red'}}>
                                       Admin Dasboard , Here admin can able to upload new photos & informations to Website
                                    </p>
                                    
                                      
                                    
                                </div>
                            </Grid>
                            
                        </Grid>
                        
                    </div>
                </Grid>
                <Snackbar 
                    
        open={this.state.openSnackbar}
    onClose={this.handleClose}
      message={this.state.message}
       autoHideDuration={6000}
                >
                     
                </Snackbar>
                
            </Grid>
        );
    }
}
export default withStyles(LoginPageStyles)(SignInSide)