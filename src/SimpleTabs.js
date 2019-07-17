import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Contact from './Contact';
import Users from './Users';
import Math from './Math';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
    
          <Tab label="Contact" />
          <Tab label="Users" />
          <Tab label="Math" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Contact <Contact /></TabContainer>}
      {value === 1 && <TabContainer>Users<Users /></TabContainer>}
      {value === 2 && <TabContainer>Math<Math /></TabContainer>}
    </div>
  );
}

