import { Box, Button, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import Projects from './projects';
import About from './about';
import Contact from './contact';
import Socials from '../components/Socials';
import Intro from './about/Intro';
import { CgAsterisk } from 'react-icons/cg';


export default function Home() {
  return (
    <Box sx={{
      backGroundColor: 'background.paper',
      // paddingX: '4rem'
    }}>
      <Head>
        <title>Opeyemi portfolio - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box>
          <CgAsterisk color='green'/>
          <CgAsterisk color='green' />
        </Box>
        
        <Intro />
        <About />

        <CgAsterisk color='secondary.main' size='60px' className={styles.styleZoomOut} />
        <Projects />

        <CgAsterisk color='secondary.main' size='60px' className={styles.styleRotate}  />
        <Contact />

        <CgAsterisk color='secondary.main' size='60px'  />
        <Socials />
      </main>
      
      <footer className={styles.footer}>
      <Typography> &#169; {" "}{new Date().getFullYear()} Dev Opeyemi</Typography>
      </footer>
    </Box>
  )
}


