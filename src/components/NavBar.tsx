
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';


const NavBar: React.FC = () => {
    const theme = useTheme();
    return (
        <AppBar position="static" color='primary' style={{ backgroundColor: theme.palette.background.default }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div">
                    UncreativeX
                </Typography>
                <Button color="inherit" component={Link} to="/signup">
                    Sign Up
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
