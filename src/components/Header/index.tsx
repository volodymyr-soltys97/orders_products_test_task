import React from 'react';
import classes from './styles.module.scss';
import Image from 'next/image';
import logo from 'public/images/logo.png';

const Header = () => {
    return (
        <>
            <header className={classes.container}>
                <div className={classes.logoSearchContainer}>
                    <Image className={classes.logo} src={logo} alt='Logo' width={40} height={40} />
                </div>
            </header>
        </>
    );
}

export default Header;