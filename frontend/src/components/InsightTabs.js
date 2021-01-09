import React, { useState } from 'react';
import { Tabs, Tab, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: 20,
    width: '95%',
  },
  container: {
    margin: 10,
    maxHeight: '78vh',
    overflowY: 'auto',
    scrollbarWidth: 'none',
  },
}));

const InsightTabs = ({ children }) => {
  const { root, container } = useStyles();
  const [focusedTab, setFocused] = useState(0);

  return (
    <div className={root}>
      <Tabs value={focusedTab} onChange={(_, newVal) => setFocused(newVal)} textColor="secondary">
        {children.map((child, index) => (
          <Tab value={index} key={index} label={child.props.tabName} />
        ))}
      </Tabs>
      <Box className={container}>{children[focusedTab]}</Box>
    </div>
  );
};

export default InsightTabs;