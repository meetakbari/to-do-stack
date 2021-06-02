import React, { useEffect, useState } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import { useHistory } from 'react-router';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Navbar: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'center'
    },
    NavItem: {
        width: '33%',
        textAlign: 'center',
    },
  }));

const Dashboard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  useEffect(() => {
      if(activeTab === 1){
        history.push('/todos');
      }
  }); //When the page is refreshed, Todos component will be loaded

  return (
    <div>
      <Nav tabs className={classes.Navbar}>
        <NavItem className={classes.NavItem}>
          <NavLink 
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); history.push('/todos');}}
          >
            To do
          </NavLink>
        </NavItem>
        <NavItem className={classes.NavItem}>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); history.push('/completed');}}
          >
            Completed
          </NavLink>
        </NavItem>
        <NavItem className={classes.NavItem}>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); history.push('/addnew')}}
          >
            Add new
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Dashboard;