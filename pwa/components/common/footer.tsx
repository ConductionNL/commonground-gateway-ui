import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

import makeStyles from '@mui/styles/makeStyles';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const router = useRouter()

  const [state, setState] = React.useState({
    bottumNavigation: 0,
  });

  const handleChange = (event, newValue) => {
    if(newValue == 'displayUserDrawer'){
      // setState({ ...state, ['displayUserDrawer']: true });
    }
    else {
      router.push('/' + newValue)
    }
    setState({ ...state, ['bottumNavigation']: newValue });
  };


  return (
    <footer>
      <BottomNavigation
        value={state['bottumNavigation']} onChange={handleChange}
        showLabels
        className={classes.sectionMobile}
      >
        <BottomNavigationAction label="Messages" value="messages" icon={<MailIcon />} />
        <BottomNavigationAction label="Tasks" value="tasks" icon={<NotificationsIcon />} />
        <BottomNavigationAction label="User" value="displayUserDrawer" icon={<PersonIcon />} />
      </BottomNavigation>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#21303F"
        color="white"
        className={classes.sectionDesktop}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>

            {/*<Grid item xs={12} sm={4}>*/}
            {/*  <Box borderBottom={1}>Participerende gemeenten</Box>*/}
            {/*  <Box>Deventer*/}
            {/*  </Box>*/}
            {/*  <Box>Enschede*/}
            {/*  </Box>*/}
            {/*  <Box>Groningen*/}
            {/*  </Box>*/}
            {/*  <Box>Leeuwarden</Box>*/}
            {/*  <Box>Zaanstad*/}
            {/*  </Box>*/}
            {/*  <Box>Zwolle*/}
            {/*  </Box>*/}
            {/*</Grid>*/}

            <Grid item xs={12} sm={6}>
              <Box borderBottom={1}>Contact</Box>
              <Box>
                  Lauriergracht 14h <br />
                  1016 RL Amsterdam
              </Box>
              <Box>
                <Link href="tel:+31 (0)85 3036840" color="inherit">
                  +31 (0)85 3036840
                </Link>
              </Box>
              <Box>
                <Link href="mailto:info@conduction.nl" color="inherit">
                  info@conduction.nl
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
