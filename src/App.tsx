import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUpPage from './pages/SignUpPage'
import Home from './pages/home'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import './App.css'

const font = "'Oswald', sans-serif"

const theme = createTheme({
  typography:{
    fontFamily: font,
  },
  palette: {
    background: {
      default: '#000000',
    },
    text: {
      primary: '#ffffff',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // Replace 'green' with the color you want
            },
            '&:hover fieldset': {
              borderColor: 'grey', // Replace 'lightgreen' with the color you want
            },
            '&.Mui-focused fieldset': {
              borderColor: '', // Replace 'darkgreen' with the color you want
            }
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        // Styles for the primary variant of the button
        containedPrimary: {
          backgroundColor: '#000000', // Black background for primary button
          color: '#ffffff', // White text for primary button
          '&:hover': {
            backgroundColor: '#4d4d4d', // Lighten the color a bit when hovered
          },
        },
        // Styles for the secondary variant of the button
        containedSecondary: {
          backgroundColor: '#ffffff', // White background for secondary button
          color: '#000000', // Black text for secondary button
          '&:hover': {
            backgroundColor: '#f5f5f5', // A slightly off-white color for hover
          },
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App