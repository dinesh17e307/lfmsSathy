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
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import React, { Component } from 'react';
import SliderComponent from './SliderComponent';
import { textAlign } from '@mui/system';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
const content = [
    { summary: 'Best schools in TamilNadu', details: '' },
    { summary: 'Best schools in TamilNadu', details: '' },
    { summary: 'Best schools in TamilNadu', details: '' },
    {summary: 'Best schools in TamilNadu', details: ''}
      
]
class ImportanceOfUs extends Component{
    getSliderContent = () => {
    let arrayContent = content.map(item => {
                return (
                    < Grid container md={12}>
                        <Grid item  style={{ border: '1px solid white'  }}>
                            <div >
                                <img src={item} style={{ height: '200px', width: '300px' }} />
                               
                            </div>
                            
                        </Grid>
                        
                        
                    </Grid >
                        
                )
    })
        return arrayContent;
        }
    render() {
        
        return (
           
            <Grid item  elevation={6} square style={{ minHeight: '400px', margin: '10px auto', borderRadius: '5px', padding: '10px' }}>
                <h3 style={{ color: 'rgb(149 193 43)', fontSize: 'x-large' }}><span style={{color:'white' }}>WHY</span> US ? </h3>
                <Divider style={{ height: '5px', backgroundColor: 'aliceblue', marginBottom: '10px' }} />
                <div style={{ display: 'grid', rowGap:'30px'}}>
                {content.map(item => {
                    return(
                    <Accordion style={{ borderRadius: '5px' }}>
                        <AccordionSummary expandIcon={<AddCircleOutlineSharpIcon />}>
                              {item.summary}
                        </AccordionSummary >
                        <AccordionDetails>
                             {item.details}
                        </AccordionDetails>
                    </Accordion>)
                })}
                    </div>
                </Grid>
               
           
        )
    }
}
export default ImportanceOfUs