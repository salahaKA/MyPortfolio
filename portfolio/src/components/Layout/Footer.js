import React from 'react'
import { Box, Typography } from '@mui/material'
import '../../styles/Footer.css'

function Footer() {
  return (
    <Box component="footer" className='footer'>
        <Typography variant='body2' className='footerText'>
        © {new Date().getFullYear()} My Portfolio. No copyright infringement intended.
        </Typography>
    </Box>
  )
}

export default Footer