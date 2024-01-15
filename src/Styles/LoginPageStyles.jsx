



const LoginPageStyles = (theme) => {
    return {

        root: {
            height: '100vh',
        },
        image: {
    
            backgroundColor: 'transparent'
   
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
            backgroundColor: '#2b99ca'
        },
        headingText: {
            color: '#2b99ca'
        },
      snackbarStyle: {
    backgroundColor: "red !important"
  }
        
    }
};


export default LoginPageStyles