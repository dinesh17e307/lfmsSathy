import { fontSize } from "@mui/system";

const Commonstyles=(theme)=>({
content:{
  fontSize:'16px',
  fontWeight:500,
  color:'grey',
  marginTop:'20px !important'
},
heading:{
    fontSize:'30px',
    fontWeight:600,
    fontFamily:'gd-sage,"Times","Times New Roman",serif'
    },
  bannerWidth: {
    height: '100%',
    width: '290px',
    borderRadius: '10px',
    marginTop: '10px',
    marginRight: 'auto',
    marginLeft: 'auto',
    '@media(max-width:858px)': {
      width: '250px',
      marginTop: '20px',
    },
    '@media(max-width:681px)': {
      width: '200px',
      marginTop: '90px',
    },
  },
    dots: {
    '& .slick-dots li': {
      top: '45px !important',
    },
    '& .slick-dots li.slick-active button:before': {
      backgroundColor: 'White !important',
    },
  },
  bannerBackground: {
    marginLeft: '0px',
    width: '400px',
    '@media(max-width:858px)': {
      width: '300px',
    },
    '@media(max-width:681px)': {
      width: '250px',
    },
  },
    banner: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '-137px  !important',
    },
    '@media(max-width:1280px)': {
      marginLeft: '0px !important',
    },
  },
      containerWidth: {
   
    overflow: 'auto !important',
    '&::-webkit-scrollbar': {
      width: 4,
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: `none`,
      borderRadius: 7,
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'transparent',
      borderRadius: 7,
    },
    '&:hover': {
      '&::-webkit-scrollbar-track': {
        boxShadow: `inset 0 0 2px #c4c4c4`,
        borderRadius: 7,
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#c4c4c4',
        borderRadius: 7,
      },
    },
  },
  container :{
  position: 'relative',
  textAlign: 'center',
  color: 'white'
},
centered :{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  margin: '0',
  fontSize:' 3rem',
  whiteSpace: 'nowrap',
  background: 'repeating-linear-gradient(45deg, black, transparent 100px)'

 
}

})
 

 
export default Commonstyles;