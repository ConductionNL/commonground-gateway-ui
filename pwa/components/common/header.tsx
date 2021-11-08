import Logo from 'components/common/logo';
import MainMenu from 'components/common/menu';
import Container from '@mui/material/Container';
import makeStyles from '@mui/styles/makeStyles';
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    marginTop: '20px'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  header: {
    backgroundColor: '#4376FC',
    marginTop: '-16px',
    paddingTop: '20px'
  }
}));

export default function Header() {

  const classes = useStyles();
  return (
    <header className={classes.header}>

      <div className={classes.sectionDesktop}>
        <Logo />
      </div>

      <MainMenu />
    </header>
  );
}
