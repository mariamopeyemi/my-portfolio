import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import Head from 'next/head';

const Projects = () => {
  return (
    <Box sx={{
      backGroundColor: 'background.paper',
      display:'flex',
      flexDirection:'column',
      alignItems: 'center',
      gap:'4rem',
      minHeight:'100vh'
    }}>
      <Head>
        <title>Projects Opeyemi - portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography>
       MY PROJECTS
      </Typography>
      <Typography>
       MY PROJECTS Includes
       <Typography> Vue: Yebox website</Typography>
       <Typography> Typescript: HealthXP website</Typography>
       <Typography> React: Yebora Website</Typography>
       <Typography> React: Yebora web App</Typography>
       <Typography> React: Shout web App</Typography>
       <Typography> Next: Planvest Web app</Typography>
       <Typography> Next: Portfolio Website</Typography>
       <Typography> Wordpress: Jurislex website</Typography>
      </Typography>
    </Box>
  )
}

export default Projects