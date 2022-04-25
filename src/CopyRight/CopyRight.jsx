import React from 'react'
import Typography from '@mui/material/Typography';
import { Link as Enlace } from 'react-router-dom';
import Link from '@mui/material/Link';


const CopyRight = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
     <Link underline="none" as={Enlace} color="inherit" to={'/'}>
      Home
    </Link>{' '} 
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  )
}

export default CopyRight