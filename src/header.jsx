import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        My Blog
      </Typography>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Button color="inherit">Login</Button>
      </motion.div>
    </Toolbar>
  </AppBar>
);

export default Header;
