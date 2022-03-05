import {AppBar, Container, Toolbar, Typography} from '@mui/material';
import React from 'react';

const AppHeader: React.FC = () => {
    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters variant="dense">
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Logo here
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppHeader;