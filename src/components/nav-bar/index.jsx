import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
    </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
    <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
    >
        <MenuItem>
        <IconButton
            size="large"
            aria-label="show 1 new purchases"
            color="inherit"
        >
            <Badge badgeContent={1} color="error">
            <ShoppingCartIcon />
            </Badge>
        </IconButton>
        </MenuItem>

    </Menu>
    );

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            >
            Zelda Store
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
                size="large"
                aria-label="show 1 new purchases"
                color="inherit"
            >
                <Badge badgeContent={1} color="error">
                <ShoppingCartIcon />
                </Badge>
            </IconButton>
            </Box>
        </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
    </Box>
    );
}

export default NavBar;