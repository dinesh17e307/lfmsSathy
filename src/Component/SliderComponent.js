import React, { Component } from "react";
import Slider from "react-slick";
import withStyles from '@material-ui/core/styles/withStyles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Grid from '@material-ui/core/Grid';
import Commonstyles from '../Styles/CommonStyles';
let BannerImages=['https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg','https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg']
const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
 class SliderComponent extends Component {
     state = {
          autoplayTime: 3000,
    }
      renderSlides = () => {
    const { classes } = this.props;
    return BannerImages.map((image, indx) => (
      <div>
        <img
          key={indx}
          className={classes.bannerWidth}
          src={ image}
        />
      </div>
    ));
  };
  render() {
    const { classes, content ,centerMode,centerSlidePercentage} = this.props;
    console.log(content)
    return (
      <div>
        
        <Carousel dynamicHeight={true} centerMode={centerMode}
centerSlidePercentage={centerSlidePercentage} autoPlay={true} infiniteLoop={true} thumbWidth={false} showIndicators={false} showStatus={false} transitionTime={10} >
          {
            this.props.content.map(item => {
              return (
             <div>{item}</div>
             )
            })
                }
          
            </Carousel>
      </div>
    );
  }
}
export default withStyles(Commonstyles)(SliderComponent)