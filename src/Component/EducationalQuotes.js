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
const content = [
    {
        author: 'Albert Einstein',
         image:'/Logos/einstein.jpg',
        content:'The person who follows the crowd will usually go no further than the crowd. The person who walks alone is likely to find himself in places no one has ever seen before.'
    },
     {
         author: 'Abdul Kalam',
         image:'/Logos/apjkalam.png',
         content: 'The best brains of the nation may be found on the last benches of the classroom.'
    },
      {
          author: 'C.V. Raman',
           image:'/Logos/cvramans.png',
        content:'I am the master of my failure… If I never fail how will I ever learn.'
    },
      {
          author: 'Mahatma Gandhi',
           image:'/Logos/gandhi.jpg',
        content:'Live as if you were to die tomorrow. Learn as if you were to live forever.'
    },
    {
        author: 'Nelson Mandela',
         image:'/Logos/nelsons.png',
        content:'Education is the most powerful weapon which you can use to change the world.'
    },
      
]
class EducationalQuotes extends Component{
   getSliderContent = () => {
    let arrayContent = content.map(item => {
                return (
                    < Grid container md={12} xs={12}>
                        <Grid item md={6} sm={12} xs={12}>
                            <img src={item.image} style={{height:'300px' ,width:'300px'}} />
                        </Grid>
                        <Grid item md={6} sm={12} xs={12} style={{ margin: 'auto',color:'grey' }}>
                            <q style={{ fontWeight: 600, fontSize: '25px' }}>{item.content}</q>
                            <p style={{ color: 'rgb(149 193 43)' }}>{'-  '+item.author}</p>
                        </Grid>
                        
                    </Grid >
                        
                )
    })
        return arrayContent;
        }
    render() {
        return (
           
         
           
          <Grid item  elevation={6} square style={{minHeight:'400px',margin:'10px auto',borderRadius:'5px',padding:'10px'}}>
                <div >
                    <h1 style={{ color: 'rgb(149 193 43)', textTransform: 'uppercase', fontSize: 'x-large' }}>Our <span style={{color:'white' }}>Inspiring </span>  Leaders</h1>
                   <Divider style={{height:'5px',backgroundColor:'aliceblue',marginBottom:'10px'}} />
                    <SliderComponent content={this.getSliderContent()}centerSlidePercentage={100} />
               </div>
                </Grid>
               
           
        
           
        )
    }
}
export default EducationalQuotes