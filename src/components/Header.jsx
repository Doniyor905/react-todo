import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <div>
      <Box>
        <AppBar position="static" color="secondary">
          <Container>
            <Toolbar>
              <Typography variant="h6" component="span">
                TODO LIST
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
