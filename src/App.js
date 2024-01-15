import React from'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import { Hidden,Grid, List ,ListItem, Divider} from "@material-ui/core";
import AppDrawer from './Component/AppDrawer'
import LandingPage from './Pages/LandingPage'
import Loginpage from './Pages/LoginPage'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const adsArray=[]
function App() {
  return (
    <div div className='page-container'>
      <div className=' curve'>
        <div style={{flex:12,display:'flex',color:'purple'}}>
          <img className="logo"src='/Logos/SchoolLogo1.png' width={100} style={{borderRadius:'5px',backgroundColor:'white',padding:'10px'}} />
         <h1 style={{
                        textAlign: 'center',
                        color: 'rgb(247 236 255)',
                        fontFamily: 'serif'
          }}>Little Flower Matriculation Hr. Secondary School</h1>
          
        </div>
        <Hidden smDown>
        <div className='linkHeader' style={{flex:3,display:'flex',gap:'28px',marginLeft:'15px'}}>
             <p ><a className='touchlink' href="/">Home</a></p>
              <p><a href="/gallery" className='touchlink'>Gallery & Events</a></p>
             
             <p><a href="/request" className='touchlink'>Academics</a></p>
            
           
            
            <p ><a className='touchlink' href="/">Board of Directors</a></p>
              <p><a href="https://lfms-admin-site.onrender.com" className='touchlink'>Admin </a></p>
            
             <p><a href="/request" className='touchlink'>Alumini</a></p>
            
             
            <p> <a href="/about" className='touchlink'>Contact us</a></p>
             <p> <a href="/about" className='touchlink' style={{border:'1px solid orange',backgroundColor:'orange',padding:'6px'}}>Admission >>></a></p>
        </div>
         </Hidden>
         <Hidden mdUp>
           <AppDrawer/>
         </Hidden>
      </div>
   
     <div className='wrap-content'>
       
       <Router>
         <Routes>
         <Route exact path="/" element={<LandingPage/>}/>
         <Route exact path="/home" element={<LandingPage/>}/>
         <Route  path="/admin_dashboard" element={<Loginpage/>}/>
        <Route path='/gallery' element={<Loginpage/>}/>
         </Routes>
         </Router>
        
     </div>
     <div style={{minheight:'200px',marginTop:'15px',backgroundColor:'rgb(17 17 17 / 90%)',overflow:'hidden',marginBottom:'20px',borderRadius: '5px',}}>
       
        <Grid container style={{ display: 'flex', justifyContent: 'space-around', color: '#808080',gap:'20px' }}>
          <Grid container style={{display:'flex',flexWrap:'wrap',padding:'20px'}}>
           
             <Grid item md={4} xs={6} >
            <p style={{color:'white'}}>School Rules</p> 
            </Grid>
             <Grid item md={4} xs={6}>
              
               <p style={{color:'white'}}>Useful Links</p>
              <List>
                <ListItem>
                  Admission
                </ListItem>
                
                <ListItem>
                 Feedback
                </ListItem>
                
                <ListItem>
                  About Us
                </ListItem>
                
                <ListItem>
                 Contact Us
                </ListItem>
              </List>
            </Grid>
            <Grid item md={4} xs={6}>
             
               <p style={{color:'white'}}> Contact Us</p>
              <div>
                <p><LocationOnIcon className='IconStyles' />  13, Periakulam Road, Sathyamangalam, India, Tamil Nadu</p>
                <p><LocalPhoneIcon className='IconStyles'/> 04295 224 845</p>
                <p><MailIcon className='IconStyles'/>littleflowersathy@gmail.com</p>
                <Grid item md={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <p style={{ marginTop: '5px'}}>Follow us on : </p>
            <FacebookIcon />
            <InstagramIcon />
            <MailIcon/>
                 </Grid>
             </div>
             
             
              
            </Grid>
            <Divider light={true} style={{color:'green',width:'5px'}} />
            <Grid item md={12}>
            <div style={{ marginTop:'10px',display: 'flex', justifyContent: 'center', gap: '10px',color:'white',width:'85%',flexWrap:'wrap' }}>
              
              <TextField variant='outlined' size="small" style={{border:'1px solid white',borderRadius:'5px'}} />
              <Button variant='outlined' style={{color:'white',border:'1px solid white',borderRadius:'5px'}}>Submit Feedback</Button>
                </div>
          </Grid>
          </Grid>
      </Grid>
      <p style={{color:'white',fontWeight:500,textAlign:'center'}}>@little flower sathy</p>
  </div>
   
    </div>
  );
}

export default App;