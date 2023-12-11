
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';



const SignUpPage = () => {

    const theme = useTheme();
    const inputProps = {
        style: {
            color: "white"
        }
    }
   

    const handleCancel = () => {
        console.log('Cancel');
    };

    return (
        <Container  sx={{
            // bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
            // minHeight: '100vh',
            // minWidth: '100vh',
            // margin: '0 auto',
            // padding: theme.spacing(5),
        }}>
            <Box sx= {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '0 auto',
                marginTop: '2rem',
                marginBottom: '2rem',
                maxWidth: '500px',
                maxHeight: '500px',
            }}>
                <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
                    Sign Up
                </Typography>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: {color: 'white'}}}
                    sx={{ marginBottom: '1rem' }}
                    
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: {color: 'white'}}}
                    sx={{ marginBottom: '1rem' }}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    InputLabelProps={{ style: {color: 'white'}}}
                    fullWidth
                    sx={{ marginBottom: '1rem' }}
                />
                <Button  variant="contained"style={{color: 'white'}} fullWidth>
                    Register
                </Button>
                <Button  style={{color: 'red'}}fullWidth onClick={handleCancel}>
                    Cancel
                </Button>
                </Box>
        </Container>
    );
};

export default SignUpPage;
