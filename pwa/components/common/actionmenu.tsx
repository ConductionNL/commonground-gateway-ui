import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { useRouter } from 'next/router';
import MessageIcon from '@material-ui/icons/Message';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import LockIcon from '@material-ui/icons/Lock';
import WorkIcon from '@material-ui/icons/Work';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 275,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ActionMenu() {
  const classes = useStyles();
  const router = useRouter()

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">

        <ListItem button onClick={() => router.push('/user')}>
          <ListItemIcon>
            <RadioButtonCheckedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => router.push('/sources')}>
          <ListItemIcon>
            <CardTravelIcon/>
          </ListItemIcon>
          <ListItemText primary="Sources" />
        </ListItem>
        <ListItem button onClick={() => router.push('/entities')}>
          <ListItemIcon>
            <AddToQueueIcon/>
          </ListItemIcon>
          <ListItemText primary="Entities" />
        </ListItem>

        <ListItem button onClick={() => router.push('/objects')}>
          <ListItemIcon>
            <EmojiObjectsIcon/>
          </ListItemIcon>
          <ListItemText primary="Objects" />
        </ListItem>

        <ListItem button onClick={() => router.push('/logs')}>
          <ListItemIcon>
            <KeyboardTabIcon />
          </ListItemIcon>
          <ListItemText primary="Logs" />
        </ListItem>

        {/*<Divider />*/}
        {/*<ListItem button onClick={() => router.push('/data')}>*/}
        {/*  <ListItemIcon>*/}
        {/*    <AssignmentIndIcon />*/}
        {/*  </ListItemIcon>*/}
        {/*  <ListItemText primary="Identiteit" />*/}
        {/*</ListItem>*/}

        {/*<ListItem button onClick={() => router.push('/workAndIncome')}>*/}
        {/*  <ListItemIcon>*/}
        {/*    <WorkIcon />*/}
        {/*  </ListItemIcon>*/}
        {/*  <ListItemText primary="Werk en Inkomen" />*/}
        {/*</ListItem>*/}

        {/*<ListItem button onClick={() => router.push('/livingAndTax')}>*/}
        {/*  <ListItemIcon>*/}
        {/*    <HomeIcon />*/}
        {/*  </ListItemIcon>*/}
        {/*  <ListItemText primary="Wonen en Belasting" />*/}
        {/*</ListItem>*/}

        {/*<ListItem button onClick={() => router.push('/vault')}>*/}
        {/*  <ListItemIcon>*/}
        {/*    <LockIcon />*/}
        {/*  </ListItemIcon>*/}
        {/*  <ListItemText primary="Datakluis" />*/}
        {/*</ListItem>*/}

      </List>
    </div>
  );
}
