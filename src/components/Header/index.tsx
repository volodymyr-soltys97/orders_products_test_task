'use client';

import React from 'react';
import classes from './styles.module.scss';
import Image from 'next/image';
import logo from 'public/images/logo.png';
// import { TextField } from '@mui/material';

const Header = () => {
    return (
        <>
            <header className={classes.container}>
                <div className={classes.logoSearchContainer}>
                    <Image className={classes.logo} src={logo} alt='Logo' width={40} height={40} />
                    <div className={classes.search}>
                        <input type="button" value="" />
                        {/* <TextField
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            sx={{
                                height: 20,
                                padding: 0
                            }}
                        /> */}
                    </div>
                </div>
                <div className={classes.timeContainer}></div>
            </header>
        </>
    );
}

export default Header;