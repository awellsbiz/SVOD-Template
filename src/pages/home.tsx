import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Container, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';

const Home: React.FC = () => {
    const theme = useTheme();
    const [email, setEmail] = React.useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleJoinUsClick = () => {
        // Navigate to signup page with email field filled in
        window.location.href = `/signup?email=${email}`;
    };

    return (
        <Container
            style={{ textAlign: 'center' }}
            maxWidth="xl"
            sx={{
                bgcolor: theme.palette.background.default,
                color: theme.palette.text.primary,
                minHeight: '100vh',
                padding: theme.spacing(2),
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <img src="src/assets/Free Simple Modern Circle Design Studio Logo.png" alt="Logo" />
                <Typography variant="h1" sx={{ typography: theme.typography }}>
                    Welcome to Creative Circle. Your Creative Filmmaking Community <br /> Enter your email to create your membership and start your filmmaking journey with us!
                </Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    sx={{ marginTop: theme.spacing(3), marginLeft: theme.spacing(1)}}
                    InputProps= {{
                        style: { height: 37, width: 300, color: 'white' },
                    }}
                    InputLabelProps={{ style: {color: 'white', fontSize: 20, top: -11, left: 5}}}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleJoinUsClick}
                    sx={{ marginTop: theme.spacing(3), marginLeft: theme.spacing(1)}}
                >
                    Join Us!
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
