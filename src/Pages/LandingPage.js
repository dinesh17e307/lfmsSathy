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
import NoticeBoard from '../Component/NoticeBoard';
import SchoolOverView from '../Component/SchoolOverView';
import RecentAchievements from '../Component/RecentAchievement';
import EducationalQuotes from '../Component/EducationalQuotes';
import { fontSize } from '@mui/system';
import ManagementMessage from '../Component/MessagesfromManagement/MesageFromManagement';
import SchoolLandingPage from './SchoolLandingPage';
import Divider from '@material-ui/core/Divider';
import Draggable from 'react-draggable';
import Blink from 'react-blink-text';
import StudentTestimonal from '../Component/StudentTestimonals';
import UpComingEvents from '../Component/UpComingEvents';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import ImportanceOfUs from '../Component/ImportanceOfUs';
class LandingPage extends Component{
    state = {
        loading:true
    }
    async componentDidMount() {
      
    }
    render() {
       
       
        return (
           
            <Grid container style={{ gap: '1px 0px' }}>
                <Grid md={12} xs={12} style={{ height: '100px' ,display:'flex',gap:'10px',flexWrap:'wrap'}}>
                    <h1 style={{ color: 'rgb(149 193 43)', fontSize: 'x-large' }}><span style={{color:'white'}}>THOUGHT </span>OF THE DAY</h1>
                         <Divider style={{height:'5px',backgroundColor:'aliceblue',marginBottom:'10px'}} />
                        
                           
                    
                    </Grid>
                <Grid item md={12} sm={12} xs={12} >
                   < Fade left>
                     <SchoolLandingPage/>
                      </Fade>
                </Grid>
                
                <Grid item md={6} sm={12} xs={12}>
                    <Zoom>
                    <h3 style={{ fontSize: 'x-large',color:'white' }}>WELCOME TO <span style={{ color: 'rgb(149 193 43)' }}>LITTLE FLOWER </span>MATRIC SATHYAMANGALAM</h3>
                    <Divider style={{height:'5px',backgroundColor:'aliceblue',marginBottom:'10px'}} />
                    <img src="Logos/schoolOverView.jpg" width='100%' />
                    <p style={{ fontSize: '15px', color: 'grey', fontWeight: 500 }}>
                        <span style={{fontSize:'xx-large',color: 'rgb(149 193 43)',fontWeight:600}}>L</span>ittle Flower Matriculation Higher Secondary School, holds a distinguished name
            in Co-educational School in Sathyamangalam. The school was established in the year 1984
            with sole purpose of providing quality education to the rural masses.
            This dream of Little Flower seems to have come true with over Hundreds of quality
            students successfully stepping out of the school every year in the 35years since its
            inception.The school is governed by “Sre Banari Amman Educational Trust” that yearns for
            holistic development of its pupils. The school had a very steady growth. After 1994 the
            School has gradually converted into Matric School with higher forms.</p>
           </Zoom>
                </Grid> 
                 <Grid item md={6} sm={12}  xs={12}>
                    <NoticeBoard />
                    <div style={{color:'white',textAlign:'center'}}>
                        <Blink color='white' text='Call us 04295 224 845' style={{border:'1px solid white'}} fontSize='x-large'>
         
        </Blink> 
                      <img src="Logos/admission.png" style={{height:'200px'}} />
        </div>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Zoom>
                      <RecentAchievements/>
                      </Zoom>
                </Grid>
                 <Grid item md={12} sm={12}  xs={12}>
                       <ManagementMessage/>
                </Grid>
                 <Grid item md={12} sm={12}  xs={12}>
                      <SchoolOverView/>  
                </Grid>
                <Grid item md={12} sm={12} xs={12} >
                     <Bounce bottom>
                      <EducationalQuotes/>  </Bounce >
                </Grid>
                <Grid item md={6} sm={12}  xs={12} >
                    <Bounce right>
                      <UpComingEvents/>
                      </Bounce>
                </Grid>
                <Grid item md={6} sm={12} xs={12} >
                   < Bounce left >
                      <StudentTestimonal/>
                      </Bounce>
                </Grid>
                
                <Grid item md={6} sm={12}  xs={12}  >
                   <ImportanceOfUs/>
                </Grid>
                </Grid>
                
           
        )
    }
}
export default LandingPage