import React, { useState } from "react";

import { AppBar, Box, Toolbar, Container, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import './assets/styles/Header.scss';

const Header: React.FC = (props) => {   //<{ onNavClick(e: React.MouseEvent, sectionName: string): void }>
    const classPrefix = 'mp';
    const pages = [
        'About', 'Achievements', 'Résumé', 'Contact'
    ];
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(e.currentTarget);
    }

    const handleCloseNavMenu = (e: React.MouseEvent) => {
        setAnchorElNav(null);
    }

    const onNavClick = (e: React.MouseEvent, sectionName: string) => {
        // props.onNavClick(e, sectionName);
        interface SectionElementMapping {
            'About': string,
            'Achievements': string,
            'Résumé': string,
            'Contact': string
        }
        let sectionElementMapping: SectionElementMapping = {
            'About': '.mp-about',
            'Achievements': '.mp-achievements',
            'Résumé': '.mp-resume',
            'Contact': '.mp-contact'
        };


        let element = document.querySelector((sectionElementMapping as any)[sectionName]);
        //
        var headerOffset = document.getElementById('mp-header')?.offsetHeight;//45;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - (headerOffset ?? 0);
        //
        // element?.scrollIntoView(false, { 'behavior': 'smooth', 'block': 'center' });
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    return (
        // <div className="mp-row mp-header-bar">
        //     <div className="mp-heading-section">
        //         <div>
        //             Bikram Singh Patel
        //         </div>
        //     </div>
        //     <div className="mp-nav-section">
        //         <div className={`${classPrefix}-nav-item`}>
        //             About
        //         </div>
        //         <div className={`${classPrefix}-nav-item`}>
        //             Achievements
        //         </div>
        //         <div className={`${classPrefix}-nav-item`}>
        //             Résumé
        //         </div>
        //         <div className={`${classPrefix}-nav-item`}>
        //             Contact
        //         </div>
        //     </div>

        // </div >
        <AppBar id="mp-header" position="sticky" sx={{ padding: '1rem', color: 'var(--mp-content-color)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop */}
                    <Typography variant="h4" noWrap sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        // fontFamily: '"Gill Sans", sans-serif',
                        fontWeight: 700,
                        // fontSize: '2rem',
                        // letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',

                        // hyphens: 'manual'
                    }}>
                        Bikram Singh Patel
                    </Typography>
                    {/* Responsive */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorElNav} anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {
                                pages.map(x => (
                                    <MenuItem key={x} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{x}</Typography>
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </Box>
                    {/* Responsive */}
                    <Typography variant="h6" noWrap sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        // fontFamily: 'cursive',
                        fontWeight: 700,
                        // letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        hyphens: 'manual'
                    }}>
                        Bikram Singh &shy;Patel
                    </Typography>

                    {/* Desktop */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {
                            pages.map(x => (
                                //onNavClick(e, x); 
                                <Button key={x} onClick={(e) => { handleCloseNavMenu(e); onNavClick(e, x); }} sx={{
                                    my: 2,
                                    color: 'inherit',
                                    display: 'block',
                                    // fontFamily: '"Gill Sans", sans-serif',
                                    fontSize: '1.25rem'
                                }}>
                                    {x}
                                </Button>
                                // <MenuItem key={x} onClick={handleCloseNavMenu}>
                                //     <Typography textAlign="center">{x}</Typography>
                                // </MenuItem>
                            ))
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;